import React, { useContext } from "react";
import { cartContext } from "../App";

const Cart = () => {
  const {
    cartItems,
    subTotal,
    removeFromCart,
    onCartItemIncrement,
    onCartItemDecrement,
  } = useContext(cartContext);
  const shippingCost = 5.99;
  const total = subTotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600 h-96 mt-20">
        Your cart is empty.
      </div>
    );
  }

  const onHandleIncrement = (eachProduct) => {
    onCartItemIncrement(eachProduct.id);
  };

  const onHandleDecrement = (eachProduct) => {
    onCartItemDecrement(eachProduct.id);
  };

  return (
    <div className=" container mx-auto px-4 py-10 bg-white text-gray-800 dark:bg-gray-900 dark:text-white mt-3 mb-3">
      <h2 className="text-3xl font-bold mb-8 ">Your Cart</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain mr-4"
              />
              <div className="flex-grow">
                <h4 className="text-md font-semibold">{item.title}</h4>
                <p>Rs: {subTotal.toFixed(2)}/-</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => onHandleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="px-2">{item.qty}</span>
                  <button
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => onHandleIncrement(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-medium ml-4 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg dark:text-black">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs: {subTotal.toFixed(2)}/-</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs: {shippingCost.toFixed(2)}/-</span>
          </div>
          <div className="border-t border-gray-300 my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>Rs:{total.toFixed(2)}/-</span>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
