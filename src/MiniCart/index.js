import React from "react";

const MiniCart = ({ onClickViewCart, subTotal, cartItems }) => (
  <div className="ml-auto flex flex-col gap-2 bg-red-200 w-96 p-3 rounded-sm min-h-40 mr-3 text-gray-800 dark:bg-gray-900 dark:text-white absolute z-10 right-0">
    {cartItems.length === 0 ? (
      <p className="text-center justify-center"> Cart is empty </p>
    ) : (
      <>
        {cartItems.map((eachItem) => (
          <div
            className="flex gap-2 bg-red-200 w-full items-center text-gray-800 dark:bg-gray-900 dark:text-white"
            key={eachItem.id}
          >
            <img src={eachItem.image} alt={eachItem.title} className="w-12" />
            <div>
              <p className="text-sm">{eachItem.title}</p>
              <p className="text-sm">Quantity: {eachItem.qty}</p>
              <p className="text-sm">
                Price: {eachItem.price * eachItem.qty}/-
              </p>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <button
              className=" bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm ml-2 dark:bg-gray-900 dark:text-white dark:border"
              onClick={onClickViewCart}
            >
              ViewCart
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded opacity-50 cursor-not-allowed text-sm ml-2 mt-2">
              Checkout
            </button>
          </div>
          <p className="mr-2">Subtotal: {subTotal.toFixed(2)}/-</p>
        </div>
      </>
    )}
  </div>
);

export default MiniCart;
