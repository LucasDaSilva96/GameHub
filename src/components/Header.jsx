import React, { useState } from "react";

function Header() {
  const [displayCart, setCartNotis] = useState(10);
  const [openCart, setOpenCart] = useState(false);
  return (
    <React.Fragment>
      <header className=" flex items-center justify-between ">
        <aside>
          <img src="/img/Logo.png" alt="Logo" className=" w-32 py" />
        </aside>
        <div className=" relative min-w-80">
          <input
            placeholder="Search game"
            className=" py-2 px-2 rounded-md  text-black  min-w-full bg-[hsla(0,0%,100%,.16)] transition-all hover:bg-white focus:bg-white wi"
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

        <div className=" relative">
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
            className=" cursor-pointer z-50"
          >
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
          </svg>
        </div>
      </header>
      <aside className=" bg-[hsla(0,0%,100%,.16)] absolute top-0 h-[100vh] w-[375px] ">
        <h1>Cart</h1>
      </aside>
    </React.Fragment>
  );
}

export default Header;
