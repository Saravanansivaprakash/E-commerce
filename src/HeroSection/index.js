import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section className="bg-blue-50 py-20 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
          Welcome to MyShop
        </h2>
        <p className="text-lg text-gray-600 mb-6 dark:text-white">
          Best products at unbeatable prices!
        </p>
        <Link to="/products">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
