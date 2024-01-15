import { Link } from "react-router-dom";
import Platforms from "./Platforms";
import RatingStar from "./RatingStar";

function GameCard({ data }) {
  const { background_image, name, rating, released, platforms, id } = data;

  return (
    <Link to={`/gameDetail/${id}`}>
      <article className="bg-[hsla(0,0%,100%,.16)] max-w-[275px] relative min-h-[275px] flex flex-col rounded-md transition-all shadow-lg hover:shadow-cyan-500/50 hover:translate-y-[-2px] ">
        <img
          src={background_image}
          alt="Image from RAWG video games database api"
          loading="lazy"
          className=""
        />
        <h1 className="py-2 px-2 font-black text-lg">{name}</h1>
        <div className="flex items-center gap-2  px-2">
          <h2 className="font-black">Released:</h2>
          <span className="underline">{released}</span>
        </div>
        <div className="py-2 px-2 mt-[auto]">
          <RatingStar rating={5} />
          <Platforms platforms={platforms} />
        </div>
      </article>
    </Link>
  );
}

export default GameCard;
