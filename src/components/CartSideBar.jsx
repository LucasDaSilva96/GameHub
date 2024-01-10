import React from "react";
function CartSideBar({ openCart }) {
  return (
    <React.Fragment>
      <aside
        className={`pt-[80px] px-4 bg-[#151515c5] absolute top-0 h-[100vh] w-[375px] right-0 tr ${
          !openCart ? "translate-x-[200%]" : "translate-x-0"
        } transition-all  backdrop-blur-lg z-[100]`}
      >
        <h1>Cart</h1>
      </aside>
    </React.Fragment>
  );
}

export default CartSideBar;
