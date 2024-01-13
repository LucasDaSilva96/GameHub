import { useInfiniteQuery } from "@tanstack/react-query";
import fetchGames from "../api/fetchGames";

import GameCard from "./GameCard";
import React, { useState } from "react";
import Loader from "./Loader";

function Home() {
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
    queryKey: ["AllGames"],
    queryFn: fetchGames,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });
  window.addEventListener("scroll", toggleVisible);
  return (
    <React.Fragment>
      {isFetching && <Loader />}
      <h1 className="font-black text-3xl py-5">All Games</h1>
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
      <button
        className="bg-[hsla(0,0%,100%,1)] rounded-[50%] py-2 px-2 mb-4 animate-bounce ml-[35vw]"
        onClick={() => {
          fetchNextPage();
        }}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {hasNextPage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        )}
      </button>
    </React.Fragment>
  );
}

export function ScrollToTop() {
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div
      onClick={handleScroll}
      className="bg-[hsla(0,0%,100%,1)] rounded-[50%] py-1 px-1 fixed z-50 bottom-4 right-2 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M205.66,138.34a8,8,0,0,1-11.32,11.32L136,91.31V224a8,8,0,0,1-16,0V91.31L61.66,149.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
    </div>
  );
}

export default Home;
