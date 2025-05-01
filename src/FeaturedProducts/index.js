import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../App";
import { TailSpin } from "react-loader-spinner";
import FailureView from "../FailureView";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const FeaturedProducts = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const navigate = useNavigate();
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const { addToCart } = useContext(cartContext);

  const fetchProducts = async () => {
    try {
      const api = "https://fakestoreapi.com/products";
      const response = await fetch(api);
      const data = await response.json();
      const result = data.map((eachData) => ({ ...eachData, qty: 1 }));
      setApiStatus(apiStatusConstants.success);
      setProducts(result);
    } catch (error) {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const onHandleIncrement = (eachProduct) => {
    const exisitingQty = eachProduct.qty + 1;
    const product = { ...eachProduct, qty: exisitingQty };
    setProducts((prevState) => [
      ...prevState.map((val) =>
        val.id === product.id ? { ...val, qty: exisitingQty } : val
      ),
    ]);
  };

  const onHandleDecrement = (eachProduct) => {
    const exisitingQty = eachProduct.qty;
    if (exisitingQty > 1) {
      const product = { ...eachProduct, qty: exisitingQty - 1 };
      setProducts((prevState) => [
        ...prevState.map((val) =>
          val.id === product.id ? { ...val, qty: exisitingQty } : val
        ),
      ]);
    }
  };

  const onHandleAddCartItem = (product) => {
    addToCart(product);
  };
  const handleClickRetry = () => {
    navigate("/");
    console.log("retry");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const successView = () => (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>

          <div className="m-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
            {products.map((eachProduct) => (
              <div
                className="group relative h-200px  border rounded-md flex flex-col justify-around"
                key={eachProduct.id}
              >
                <Link to={`/products/${eachProduct.id}`}>
                  <img
                    src={eachProduct.image}
                    alt={eachProduct.title}
                    className="aspect-square w-full h-48 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="m-2 flex flex-col justify-between gap-1">
                    <h3 className="text-sm font-bold mx-1">
                      {eachProduct.title}
                    </h3>
                    <p className="text-sm font-medium mx-1">
                      Price: {eachProduct.price}
                    </p>
                  </div>
                </Link>
                <div className="bg-green-500 text-white w-1/2 rounded-full flex justify-around m-2 dark:bg-gray-900 dark:text-white dark:border">
                  <button onClick={() => onHandleDecrement(eachProduct)}>
                    -
                  </button>
                  <span>{eachProduct.qty}</span>
                  <button onClick={() => onHandleIncrement(eachProduct)}>
                    +
                  </button>
                </div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 w-full mt-2"
                  onClick={() => onHandleAddCartItem(eachProduct)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const loadingView = () => (
    <div className="flex justify-center items-center h-screen">
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="2"
      />
    </div>
  );

  const rendingViews = () => {
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return <FailureView handleClickRetry={handleClickRetry} />;
      case apiStatusConstants.inProgress:
        return loadingView();
      case apiStatusConstants.success:
        return successView();
      default:
        return null;
    }
  };

  return <>{rendingViews()}</>;
};

export default FeaturedProducts;
