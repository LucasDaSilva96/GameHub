import { useQuery } from "@tanstack/react-query";
import { fetchNextWeekGames } from "../api/fetchGames";
import React, { useState } from "react";
import { ScrollToTop } from "./Home";
import GameCard from "./GameCard";
import Loader from "./Loader";
import ErrorElement from "./ErrorElement";

function NextWeekGames() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["NextWeekGames"],
    queryFn: fetchNextWeekGames,
  });

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  if (error) return <ErrorElement />;

  if (!isPending && !error && data.results.length < 1)
    return (
      <h1 className="font-black text-3xl py-5">
        No games found for this period
      </h1>
    );

  window.addEventListener("scroll", toggleVisible);
  return (
    <React.Fragment>
      {isPending && <Loader />}
      <h1 className="font-black text-3xl py-5">Next week</h1>
      <div className="flex flex-wrap gap-4 pb-[40px] ">
        {!isError && !isPending
          ? data.results.map((data, i) => {
              return <GameCard data={data} key={i} />;
            })
          : null}
        {visible && <ScrollToTop />}
      </div>
    </React.Fragment>
  );
}

export default NextWeekGames;
