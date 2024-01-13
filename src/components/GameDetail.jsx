import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/fetchGames";
import React, { useState } from "react";
import Loader from "./Loader";
import Platforms from "./Platforms";
import ImageModal from "./ImageModal";

function GameDetail() {
  const queryClient = useQueryClient();
  const { gameId } = useParams();

  const { data, isError, isLoading, fetchStatus, status } = useQuery({
    queryKey: ["gameDetail", { id: gameId }],
    queryFn: async () => {
      return await fetchGameById(gameId);
    },
  });

  // const {
  //   slug,
  //   released,
  //   background_image,
  //   background_image_additional,
  //   description,
  //   genres,
  //   platforms,
  // } = data;

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {isError && (
        <h1 className=" capitalize font-black text-2xl text-center">
          Failed to fetch the details about the game
        </h1>
      )}
      {status === "success" && (
        <GameDetailComponent
          background_image={data.background_image}
          slug={data.slug}
          description={data.description}
          platforms={data.platforms}
          background_image_additional={data.background_image_additional}
        />
      )}
    </React.Fragment>
  );
}

function GameDetailComponent({
  slug,
  released,
  background_image,
  background_image_additional,
  description,
  genres,
  platforms,
}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((e) => !e);
  };

  function removeHtmlTags(inputText) {
    const htmlTagsRegex = /<[^>]*>/g;
    const textWithoutHtmlTags = inputText.replace(htmlTagsRegex, "");

    return textWithoutHtmlTags;
  }

  const formatedDescription = removeHtmlTags(description);

  return (
    <React.Fragment>
      <div className=" w-full flex flex-col items-center gap-4">
        <h2 className="font-black text-3xl text-center  capitalize">{slug}</h2>
        <img
          src={background_image}
          alt="Image from RAWG"
          className=" w-full max-w-[600px] rounded-lg"
        />
        <article className="max-w-[600px] bg-[#282b2e9f] py-1 px-1 rounded-md flex flex-col gap-2">
          <div className="max-h-[200px] overflow-y-scroll">
            <p className="w-[100%] tracking-wide leading-normal">
              {formatedDescription}
            </p>
          </div>
          <Platforms platforms={platforms} />
          <img
            src={background_image_additional}
            alt="Image from RAWG"
            className="max-w-[250px] rounded-md cursor-pointer"
            onClick={toggleModal}
          />
        </article>
      </div>
      {modal && (
        <ImageModal
          image_url={background_image_additional}
          toggleModal={toggleModal}
        />
      )}
    </React.Fragment>
  );
}

export default GameDetail;
