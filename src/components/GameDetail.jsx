import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../api/fetchGames";
import React, { useState } from "react";
import Loader from "./Loader";
import Platforms from "./Platforms";
import ImageModal from "./ImageModal";
import AddToCartButton from "./AddToCartButton";

function GameDetail() {
  const { gameId } = useParams();

  const { data, isError, isLoading, status } = useQuery({
    queryKey: ["gameDetail", { id: gameId }],
    queryFn: async () => {
      return await fetchGameById(gameId);
    },
  });

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      {isError && (
        <h1 className=" capitalize font-black text-2xl text-center">
          Failed to fetch the details about the game
        </h1>
      )}
      {status === "success" && <GameDetailComponent data={data} />}
    </React.Fragment>
  );
}

function GameDetailComponent({ data }) {
  const {
    background_image,
    description,
    slug,
    background_image_additional,
    released,
    genres,
    platforms,
  } = data;
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
          <h2>Released: {released}</h2>
          <div className="flex items-center gap-2">
            <h3>Genres:</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {genres.map((el, i) => {
                return (
                  <span key={el.name}>
                    {i < genres.length - 1 ? `${el.name},` : `${el.name}.`}
                  </span>
                );
              })}
            </div>
          </div>
          <img
            src={background_image_additional}
            alt="Image from RAWG"
            className="max-w-[250px] rounded-md cursor-pointer"
            onClick={toggleModal}
          />
          <div>
            <h4 className="text-xl">
              Price:{" "}
              <span className="text-lg underline text-cyan-500">59.00$</span>
            </h4>
          </div>
          <AddToCartButton data={data} />
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
