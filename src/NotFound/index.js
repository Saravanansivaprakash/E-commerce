import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="w-1/2"
    />
    <h1 className="text-2xl font-bold">Page Not Found</h1>
    <Link to="/">
      <button className="px-3 py-2 bg-blue-700 text-white rounded-md mt-10">
        Home Page
      </button>
    </Link>
  </div>
);

export default NotFound;
