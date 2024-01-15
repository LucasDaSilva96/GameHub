import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import CartSideBar from "./CartSideBar";
import SideBarMenu from "./SideBarMenu";
import { useSelector } from "react-redux";
import { getCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useSelector(getCart);
  const [displayCart, setCartNotis] = useState(cart.length);
  const [openCart, setOpenCart] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    setCartNotis(cart.length);
  }, [cart.length]);

  function handleOpenCart() {
    setOpenCart((e) => !e);
    setOpenSideBar(false);
  }

  function handleOpenSidebar() {
    setOpenSideBar((e) => !e);
    setOpenCart(false);
  }

  function handleCloseAll() {
    setOpenSideBar(false);
    setOpenCart(false);
  }
  return (
    <React.Fragment>
      <header className=" flex items-center pt-[2px] pb-2 px-4 justify-between bg-[#151515] z-[300] fixed top-0 left-0 w-[100%] ">
        <aside>
          <Link to="/" onClick={handleCloseAll}>
            <img
              src="/img/Logo.png"
              alt="Logo"
              className=" w-32 md:w-28 hidden md:block pt-1 drop-shadow-2xl"
            />
          </Link>

          <IconContext.Provider
            value={{
              size: "36px",
              className:
                "block md:hidden cursor-pointer z-[155] absolute top-[21px]",
            }}
          >
            <FiMenu onClick={handleOpenSidebar} />
          </IconContext.Provider>
        </aside>
        <div className=" relative min-w-52  md:min-w-[375px]">
          <input
            placeholder="Search game"
            className=" py-2 px-2 rounded-lg  text-black  min-w-full bg-[hsla(0,0%,100%,.16)] transition-all hover:bg-white focus:bg-white "
          />
          <svg
            className=" absolute top-0 w-7 right-1 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#000"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>

        <div
          className=" relative z-[150] cursor-pointer"
          onClick={handleOpenCart}
        >
          {displayCart > 0 && (
            <div className="  absolute top-[-15px] w-[32px] right-0 flex gap-1 justify-center">
              <span>{displayCart}</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#FFF"
            viewBox="0 0 256 256"
            className="md:max-w-[36px] max-w-7"
          >
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
          </svg>
        </div>
      </header>
      <CartSideBar
        openCart={openCart}
        cart={cart}
        handleCloseAll={handleCloseAll}
      />
      <SideBarMenu openSidebar={openSideBar} handleCloseAll={handleCloseAll} />
    </React.Fragment>
  );
}

export default Header;
