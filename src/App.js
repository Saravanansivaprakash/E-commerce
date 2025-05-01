import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Header from "./Header";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Footer from "./Footer";
import FeaturedProducts from "./FeaturedProducts";

export const cartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (!existingItem) {
      setCartItems((prevState) => [...prevState, product]);
    } else {
      setCartItems((prevState) => [
        ...prevState.map((val) =>
          val.id === product.id
            ? { ...val, qty: val.qty + product.qty }
            : { ...val }
        ),
      ]);
    }
  };

  const onCartItemIncrement = (id) => {
    setCartItems((prevState) => [
      ...prevState.map((val) =>
        val.id === id ? { ...val, qty: val.qty + 1 } : val
      ),
    ]);
    console.log("increment");
  };

  const onCartItemDecrement = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem.qty > 1) {
      setCartItems((prevState) => [
        ...prevState.map((val) =>
          val.id === id ? { ...val, qty: val.qty - 1 } : val
        ),
      ]);
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subTotal = cartItems.reduce((acc, cum) => acc + cum.qty * cum.price, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        subTotal,
        onCartItemIncrement,
        onCartItemDecrement,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </cartContext.Provider>
  );
}

export default App;
