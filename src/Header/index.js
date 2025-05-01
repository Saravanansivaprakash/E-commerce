import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from "../App";
import { useNavigate } from "react-router-dom";
import useTheme from "../customTheme/useTheme";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import MiniCart from "../MiniCart";

const Header = () => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [nextTheme, setTheme] = useTheme();
  const { cartItems, subTotal } = useContext(cartContext);
  const navigate = useNavigate();
  const itemQuantity = cartItems.reduce((acc, cum) => acc + cum.qty, 0);
  const onHandleShowMinicart = () => {
    setShowMiniCart((prevState) => !prevState);
  };
  const onClickViewCart = () => {
    onHandleShowMinicart();
    navigate("/cart");
  };

  return (
    <>
      <header className="shadow-md bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold text-blue-600"
            onClick={() => navigate("/")}
          >
            MyShop
          </h1>
          <div className="flex gap-1">
            <div onClick={onHandleShowMinicart} className="flex gap-1">
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
              <span className="text-white bg-orange-600 rounded-2xl px-1">
                {itemQuantity}
              </span>
            </div>
            <button onClick={() => setTheme(nextTheme)}>
              {nextTheme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>
      {showMiniCart && (
        <MiniCart
          onClickViewCart={onClickViewCart}
          subTotal={subTotal}
          cartItems={cartItems}
        />
      )}
    </>
  );
};

export default Header;
