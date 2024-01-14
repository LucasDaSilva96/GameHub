import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCart,
  getTotalCartPrice,
  increaseItemQuantity,
} from "../redux/CartSlice";
import Platforms from "./Platforms";

function CheckOut() {
  const { cart } = useSelector(getCart);
  console.log(getTotalCartPrice(cart));
  return (
    <div className="w-full grid grid-cols-2 relative">
      <h1 className="text-center text-2xl font-black row-span-1 col-span-2 py-2">
        Billing
      </h1>
      {cart.length > 0 ? (
        <div className=" justify-self-center row-span-2 overflow-y-scroll flex  flex-col gap-4 max-w-full max-h-[500px]">
          {cart.map((data) => (
            <CheckOutBox data={data} key={data.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CheckOutBox({ data }) {
  const {
    background_image,
    slug,
    released,
    genres,
    platforms,
    quantity,
    id,
    price,
  } = data;
  const dispatch = useDispatch();

  return (
    <article className="bg-[#303336] rounded-lg">
      <img
        src={background_image}
        alt="Image from RAWG"
        className=" min-w-[200px] max-w-[300px] "
      />
      <div className="py-2 px-2 ">
        <h1>{slug}</h1>
        <Platforms platforms={platforms} />
        <h2>Price: {price}$</h2>
        <div className="mt-[auto] flex items-center w-full justify-center gap-3">
          <button
            onClick={() => dispatch(decreaseItemQuantity(id))}
            className="bg-[#202020] py-[6px] px-3 rounded-lg cursor-pointer z-50"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => dispatch(increaseItemQuantity(id))}
            className="bg-sky-600 py-1 px-3 rounded-lg cursor-pointer z-50"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default CheckOut;
