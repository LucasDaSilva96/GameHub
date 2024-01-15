import { useNavigate } from "react-router-dom";

function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className="py-2 px-8 font-black rounded-md  absolute z-50 top-0  border-2 backdrop-blur-3xl border-sky-500 shadow-2xl outline-blue-500"
      onClick={() => navigate(-1)}
    >
      <span className=" text-white">Go Back</span>
    </button>
  );
}

export default GoBackBtn;
