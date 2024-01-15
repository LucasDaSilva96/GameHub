import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  decreaseItemQuantity,
  deleteItem,
  getCart,
  getTotalCartPrice,
  increaseItemQuantity,
} from "../redux/CartSlice";
import Platforms from "./Platforms";
import { useNavigate, Form } from "react-router-dom";

function CheckOut() {
  const { cart } = useSelector(getCart);
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="text-center text-2xl font-black py-2">Billing</h1>
      <div className=" flex flex-wrap gap-6 relative">
        {cart.length > 0 ? (
          <div className=" justify-self-center row-span-2 overflow-y-scroll flex  flex-col gap-4 max-w-full max-h-[550px]">
            {cart.map((data) => (
              <CheckOutBox data={data} key={data.id} />
            ))}
          </div>
        ) : null}
        <BillingComponent cart={cart} />
      </div>
    </div>
  );
}

function CheckOutBox({ data }) {
  const { background_image, slug, platforms, quantity, id, price } = data;
  const dispatch = useDispatch();

  return (
    <article className="bg-[#303336] rounded-lg max-w-[300px] flex flex-col gap-2 items-center pb-2">
      <img src={background_image} alt="Image from RAWG" className=" w-full " />
      <div className="py-2 px-2 flex flex-col items-center ">
        <h1 className="font-black capitalize text-xl text-center">{slug}</h1>

        <Platforms platforms={platforms} />

        <h2 className="text-center text-lg underline py-3">Price: {price}$</h2>
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
      <button
        onClick={() => dispatch(deleteItem(id))}
        className=" py-2 px-4 self-center bg-[#e63946] rounded-md capitalize"
      >
        Remove
      </button>
    </article>
  );
}

function BillingComponent({ cart }) {
  const totalPrice = getTotalCartPrice(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-[#303336] max-w-[500px] min-w-[300px] min-h-[200px] py-2 px-2 rounded-md flex flex-col items-center gap-4 max-h-[550px]">
      {totalPrice > 0 ? (
        <h2 className="font-black text-center text-xl">
          Amount:<strong className="ml-2 underline">{totalPrice}$</strong>
        </h2>
      ) : (
        <h2 className="font-black text-center text-xl">Empty cart</h2>
      )}

      {totalPrice > 0 && (
        <Form className="flex flex-col gap-8 w-full ">
          <div className="flex w-full flex-wrap items-center gap-4">
            <input
              type="name"
              placeholder="First name"
              required={true}
              className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500"
            />
            <input
              type="name"
              placeholder="Last name"
              required={true}
              className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500"
            />
          </div>
          <input
            type="Address"
            placeholder="Billing Address"
            required
            className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500"
          />

          <div className="flex w-full flex-wrap items-center gap-4">
            <input
              type="Address"
              placeholder="City"
              required={true}
              className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500"
            />
            <input
              type="number"
              placeholder="Zip or postal code"
              required={true}
              className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500"
            />
          </div>

          <input
            type="number"
            placeholder="Phone number"
            required={true}
            className="bg-black  py-1 px-2 rounded-md text-white outline-blue-500 max-w-[62%]"
          />

          <div className="flex flex-col gap-2">
            <div>
              <h3 className="py-2">Please select a payment method</h3>
              <select
                name="payment"
                required
                className="bg-black  outline-blue-500 py-1 px-1"
                defaultValue="none"
              >
                <option value="none" disabled>
                  --Select--
                </option>
                <option value="visa">Visa</option>
                <option value="masterCard">MasterCard</option>
                <option value="americanExpress">American Express</option>
                <option value="discover">Discover</option>
                <option value="vtc-pay-e-wallet">VTC Pay-e-Wallet</option>
                <option value="onlineBanking">Online Banking</option>
                <option value="bitcoin">Bitcoin</option>
              </select>
            </div>
            <div>
              <h4 className="py-2">Expiration data and security code</h4>
              <div className="flex items-center gap-2">
                <select
                  name="card-month"
                  required
                  className="bg-black  outline-blue-500 py-1 px-1 cursor-pointer"
                  defaultValue="0"
                >
                  <option value="0" disabled>
                    --
                  </option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <select
                  name="card-month"
                  required
                  className="bg-black  outline-blue-500 py-1 px-1 cursor-pointer"
                  defaultValue="0"
                >
                  <option value="0" disabled>
                    ----
                  </option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                </select>

                <input
                  type="number"
                  required
                  className="bg-black  outline-blue-500 py-[5px] px-1 max-w-[48px]"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="py-2 bg-[#64ac24] md:mt-[48px] "
            onClick={() => {
              dispatch(clearItem());
              return navigate("/");
            }}
          >
            Place order
          </button>
        </Form>
      )}

      {totalPrice === 0 && (
        <button
          className="py-2 px-8 bg-black rounded-md mt-[auto]"
          onClick={() => navigate("/")}
        >
          Go to shop
        </button>
      )}
    </div>
  );
}

export default CheckOut;
