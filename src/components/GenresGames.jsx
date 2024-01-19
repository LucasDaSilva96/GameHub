import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGamesByGenre } from "../api/fetchGames";
import ErrorElement from "./ErrorElement";
import Loader from "./Loader";
import GameCard from "./GameCard";
import { ScrollToTop } from "./Home";

function GenresGames() {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);
  const { genresType } = useParams();
  const [gamesArray, setGamesArray] = useState([]);
  const { error, data, isFetching } = useQuery({
    queryKey: [`Genre-${genresType}`, page],
    queryFn: async () => await fetchGamesByGenre(genresType, page),
    placeholderData: keepPreviousData,
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (data) {
      setGamesArray((value) => [...value, ...data.results]);
    }
  }, [data]);
  if (isFetching) return <Loader />;
  window.addEventListener("scroll", toggleVisible);
  if (error) return <ErrorElement />;
  return (
    <React.Fragment>
      {isFetching && <Loader />}
      <h1 className="font-black text-3xl py-5 capitalize">{genresType}</h1>
      <div className="flex flex-wrap gap-4 pb-[40px] ">
        {gamesArray.length > 0
          ? gamesArray
              .filter(
                (value, index, self) =>
                  index === self.findIndex((t) => t.id === value.id)
              )
              .map((game) => <GameCard data={game} key={game.id} />)
          : null}

        {visible && <ScrollToTop />}
      </div>
      {data.next && (
        <button
          className="bg-[hsla(0,0%,100%,1)] rounded-[50%] py-2 px-2 mb-4 animate-bounce ml-[35vw]"
          onClick={() => {
            data.next ? setPage((e) => e + 1) : page;
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </button>
      )}
    </React.Fragment>
  );
}

export default GenresGames;
