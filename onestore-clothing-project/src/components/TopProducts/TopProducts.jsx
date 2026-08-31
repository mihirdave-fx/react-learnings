import { FaStar, FaArrowRight } from "react-icons/fa";

import topProductsData from "../../api/topProductsData.json";
import { Link } from "react-router-dom";

const TopProducts = ({ isHomePageContent, limit }) => {
  const productToShow = limit
    ? topProductsData.slice(0, limit)
    : topProductsData;

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="flex justify-between items-center">
          {/* left side content */}
          <div className="text-left mb-24">
            <p
              data-aos="fade-up"
              data-aos-once="true"
              className="text-sm text-dark"
            >
              Top Rated Products for you
            </p>
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-3xl font-bold"
            >
              Top Rated Products
            </h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              className="text-xs text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          {/* right side content */}
          {isHomePageContent && (
            <div className="mb-24">
              <div className="group">
                <Link
                  to="/top-products"
                  data-aos="slide-right"
                  data-aos-once="true"
                  className="flex items-center gap-1 text-secondary hover:text-dark"
                >
                  View all{" "}
                  <span>
                    <FaArrowRight className="transition-transform duration-400 ease-in-out group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mb-5">
          {productToShow.map((data) => (
            <div
              data-aos="zoom-in"
              data-aos-once="true"
              key={data.id}
              className="rounded-2xl shadow-xl bg-white hover:bg-black/80 hover:text-white relative duration-300 group max-w-[300px] mb-5 md:mb-0"
            >
              <Link to={`/top-products/${data.id}`}>
                {/* image section */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[150px] mx-auto transform -translate-y-20"
                  />
                </div>
              </Link>
              {/* details section */}
              <div className="p-4 text-center">
                <div className="flex justify-center items-center w-full gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="font-bold text-xl">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-dark hover:scale-105 duration-300 text-white py-1 px-4 hover:bg-white hover:text-dark mt-4 rounded-full cursor-pointer">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
