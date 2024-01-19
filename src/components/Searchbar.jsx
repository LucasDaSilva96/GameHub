import { useQuery } from "@tanstack/react-query";
import { fetchGameDetailsByTitle } from "../api/fetchGames";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useRef, useState } from "react";
import { useKey } from "./useKey";

function Searchbar({ openSearchBar, setOpenSearchBar, query, setQuery }) {
  const inputEl = useRef(null);
  const [data, setDate] = useState(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div className=" relative min-w-52  md:min-w-[375px]">
      <input
        placeholder="Search game"
        type="text"
        ref={inputEl}
        value={query}
        onChange={async (e) => {
          if (e.target.value !== "" || e.target.value !== " ") {
            setQuery(e.target.value);
            setDate(await fetchGameDetailsByTitle(query));
            if (data) {
              setOpenSearchBar(true);
            }
          }
        }}
        className=" py-2 px-2 rounded-lg  text-black  min-w-full bg-[hsla(0,0%,100%,.16)] transition-all hover:bg-white focus:bg-white "
      />
      <svg
        className=" absolute top-0 w-7 right-1 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="#000"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
      {openSearchBar && data && <DropBar data={data} />}
    </div>
  );
}

function DropBar({ data }) {
  const { background_image, name, id } = data;

  return (
    <div className="absolute top-[38px] md:top-[35px] left-[-50px] md:left-0  backdrop-blur-lg rounded-md bg-[hsla(0,0%,100%,.16)] py-3 md:py-5 px-2 w-full min-w-[300px]">
      <Link to={`/gameDetail/${id}`}>
        <article className=" max-w-[275px] relative  flex  rounded-md  ">
          <img
            src={
              background_image
                ? background_image
                : "/icon/No-Image-Placeholder.svg"
            }
            alt="Image from RAWG video games database api"
            loading="lazy"
            className="max-w-[80px] "
          />
          <h1 className="py-2 px-2 font-black text-lg">{name}</h1>
        </article>
      </Link>
    </div>
  );
}

export default Searchbar;
