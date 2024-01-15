import { useNavigate, useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-black text-2xl text-center">{error}</h1>
      <button
        className="py-2 px-8 bg-black rounded-md mt-[auto]"
        onClick={() => navigate("/")}
      >
        Go to all games
      </button>
    </div>
  );
}

export default ErrorElement;
