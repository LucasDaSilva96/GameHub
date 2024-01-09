import RatingStar from "./RatingStar";

function GameCard({ background_image, name, platforms, rating, released }) {
  return (
    <article className="bg-[hsla(0,0%,100%,.16)] max-w-[275px] py-2 px-2 relative">
      <img
        src={background_image}
        alt="Image from RAWG video games database api"
      />
      <div>
        <h1>{name}</h1>
        <RatingStar rating={5} />
      </div>
    </article>
  );
}

export default GameCard;
