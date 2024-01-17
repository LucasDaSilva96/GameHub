import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../helpers/localStorage";
import Loader from "./Loader";
import GameCard from "./GameCard";

function Collection() {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCollection(getLocalStorage());
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) return <Loader />;
  if (collection.length < 1 && !isLoading)
    return (
      <h1 className="font-black text-3xl py-5">Your collection is empty</h1>
    );
  return (
    <React.Fragment>
      <h1 className="font-black text-3xl py-5">Your collection</h1>
      <div className="flex flex-wrap gap-4 pb-[40px]">
        {collection.map((data) => (
          <GameCard data={data} key={data.id} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Collection;
