function RatingStar({ rating }) {
  const ratingsArray = rating
    ? Array.from(Array(Math.round(rating)).keys())
    : [];
  return (
    <div className="flex items-center">
      {ratingsArray.map((_star, i) => {
        return <Star key={i} />;
      })}
    </div>
  );
}

function Star() {
  return <img src="/img/star.png" alt="star" className="max-w-[26px]" />;
}

export default RatingStar;
