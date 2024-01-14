import React from "react";
import { Link } from "react-router-dom";
import {
  clearItem,
  decreaseItemQuantity,
  getTotalCartPrice,
  increaseItemQuantity,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartSideBar({ openCart, cart, handleCloseAll }) {
  const total = getTotalCartPrice(cart);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <aside
        className={`pt-[80px] px-4 bg-[#151515c5] fixed top-0 h-[100vh] w-[375px] right-0 tr ${
          !openCart ? "translate-x-[200%]" : "translate-x-0"
        } transition-all  backdrop-blur-lg z-[100] flex flex-col gap-2`}
      >
        <div className=" max-h-[450px] md:max-h-[500px] overflow-y-scroll flex flex-col gap-3">
          {cart.length > 0 ? (
            cart.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <h1 className="text-center text-2xl font-black capitalize">
              Empty cart
            </h1>
          )}
        </div>

        {cart.length > 0 && (
          <React.Fragment>
            <Link
              to="/checkout"
              onClick={handleCloseAll}
              className="capitalize bg-sky-700 py-2 rounded-lg text-center"
            >
              Go to billing
            </Link>
            <h1 className="py-2">
              Total: <strong>{total}$</strong>
            </h1>
            <button
              onClick={() => dispatch(clearItem())}
              className="mt-auto mb-4 bg-[#e63946] py-2 rounded-md capitalize"
            >
              Clear cart
            </button>
          </React.Fragment>
        )}
      </aside>
    </React.Fragment>
  );
}

export default CartSideBar;

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <article className="flex gap-2 bg-[#303336] rounded-md items-center justify-center px-1">
      <div>
        <img
          src={item.background_image}
          alt="Image from RAWG"
          className="max-w-[150px] rounded-md"
        />
      </div>
      <div className="py-2 text-center capitalize flex flex-col gap-2">
        <h1>{item.slug}</h1>
        <h2>Price: {item.price}$</h2>

        <div className="mt-[auto] flex items-center w-full justify-center gap-3">
          <button
            onClick={() => dispatch(decreaseItemQuantity(item.id))}
            className="bg-[#202020] py-[6px] px-3 rounded-lg cursor-pointer z-50"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(increaseItemQuantity(item.id))}
            className="bg-sky-600 py-1 px-3 rounded-lg cursor-pointer z-50"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
