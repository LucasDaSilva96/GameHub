import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-[hsla(0,0%,100%,.16)] py-2 px-4 flex flex-col gap-6">
      <h1 className="font-black text-2xl text-center">
        Sorry, but the page that you are looking for was not found.
      </h1>
      <button
        className="py-4 px-8 bg-black rounded-md mt-[auto]"
        onClick={() => navigate("/")}
      >
        Go to all games
      </button>
    </div>
  );
}

export default PageNotFound;
