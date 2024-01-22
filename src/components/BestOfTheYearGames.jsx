import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchBestGamesThisYear } from "../api/fetchGames";
import ErrorElement from "./ErrorElement";
import Loader from "./Loader";
import GameCard from "./GameCard";
import { ScrollToTop } from "./Home";

function BestOfTheYearGames() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["BestOfTheYearGames"],
    queryFn: fetchBestGamesThisYear,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });
  window.addEventListener("scroll", toggleVisible);
  if (error) return <ErrorElement />;
  if (isFetching) return <Loader />;

  return (
    <React.Fragment>
      <h1 className="font-black text-3xl py-5">Best of the year</h1>
      <div className="flex flex-wrap gap-4 pb-[40px] ">
        {status === "success"
          ? data.pages.map((page) => {
              return page.results.map((result, i) => {
                return <GameCard data={result} key={i} />;
              });
            })
          : null}
        {visible && <ScrollToTop />}
      </div>
      {hasNextPage && (
        <button
          className="bg-[hsla(0,0%,100%,1)] rounded-[50%] py-2 px-2 mb-4 animate-bounce ml-[35vw]"
          onClick={() => {
            fetchNextPage();
          }}
          disabled={!hasNextPage || isFetchingNextPage}
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

export default BestOfTheYearGames;
