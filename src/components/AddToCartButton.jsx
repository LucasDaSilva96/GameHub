import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { useState } from "react";

function AddToCartButton({ data }) {
  const dispatch = useDispatch();
  const [hasAdded, setHasAdded] = useState(false);
  return (
    <button
      className={`py-2 px-4 ${
        hasAdded ? "opacity-70" : "opacity-100"
      } bg-sky-400 ${
        hasAdded ? "cursor-not-allowed" : "cursor-pointer"
      } capitalize`}
      disabled={hasAdded}
      onClick={() => {
        setHasAdded(true);
        return dispatch(addItem({ ...data, quantity: 1, price: 59 }));
      }}
    >
      {hasAdded ? "Added to your cart" : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
