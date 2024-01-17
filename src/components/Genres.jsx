import React from "react";
import { Link } from "react-router-dom";

function Genres() {
  const genresArray = [
    "action",
    "strategy",
    "role-playing-games-rpg",
    "shooter",
    "adventure",
    "puzzle",
    "racing",
    "sports",
  ];
  return (
    <React.Fragment>
      <h1 className="font-black text-3xl py-5">Genres</h1>
      <div className="flex flex-wrap gap-4 pb-[40px] ">
        {genresArray.map((el) => (
          <GenreCard type={el} key={el} />
        ))}
      </div>
    </React.Fragment>
  );
}

function GenreCard({ type }) {
  const actionImgUrl =
    "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg";

  const shooterImgUrl =
    "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg";

  const strategyImgUrl =
    "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg";

  const rpgImgUrl =
    "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg";

  const adventureImgUrl =
    "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg";

  const puzzleImgUrl =
    "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg";

  const racingImgUrl =
    "https://media.rawg.io/media/games/27b/27b02ffaab6b250cc31bf43baca1fc34.jpg";

  const sportImgUrl =
    "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg";

  return (
    <Link to={`./${type}`}>
      <article className=" w-[275px] relative min-h-[275px] rounded-md transition-all shadow-lg hover:shadow-cyan-500/50 hover:translate-y-[-2px] overflow-hidden ">
        <img
          src={
            type === "action"
              ? actionImgUrl
              : type === "shooter"
              ? shooterImgUrl
              : type === "strategy"
              ? strategyImgUrl
              : type === "role-playing-games-rpg"
              ? rpgImgUrl
              : type === "puzzle"
              ? puzzleImgUrl
              : type === "racing"
              ? racingImgUrl
              : type === "sports"
              ? sportImgUrl
              : type === "adventure"
              ? adventureImgUrl
              : "/icon/No-Image-Placeholder.svg"
          }
          alt="Image from RAWG video games database api"
          loading="lazy"
          className="absolute top-0 w-full"
        />
        <h2 className="py-2 px-4 font-black text-center text-base capitalize underline absolute z-20 top-[30%] right-[50%] -translate-y-2/4 translate-x-2/4 bg-[#343a40b2] backdrop-blur-sm rounded-md">
          {type}
        </h2>
      </article>
    </Link>
  );
}

export default Genres;
