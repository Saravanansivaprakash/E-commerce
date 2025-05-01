import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cartContext } from "../App";

const Index = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);
  const fetchProductDetail = async () => {
    const api = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(api);
    const data = await response.json();
    const result = { ...data, qty: 1 };
    setProductDetail(result);
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center h-screen container mt-3">
      <div className="flex flex-col md:flex-row gap-6 p-6 h-400px">
        <div className="w-full max-w-150px md:w-1/2 flex justify-center items-center">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className="w-52 h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="mt-3 font-bold font-sans text-xl md:text-2xl">
            {productDetail.title}
          </h2>
          <p>{productDetail.description}</p>
          <p className="font-bold font-sans first-letter:">
            Price: {productDetail.price} | Rating: {productDetail.rating?.rate}
          </p>
          <Link to="/cart">
            <button className="bg-blue-600  hover:bg-blue-900  text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 mt-2">
              Go to cart
            </button>
          </Link>
          <button
            className="bg-blue-600  hover:bg-blue-900  text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 mt-2 ml-5"
            onClick={() => addToCart(productDetail)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
