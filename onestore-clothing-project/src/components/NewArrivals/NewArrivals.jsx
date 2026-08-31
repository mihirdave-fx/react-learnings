import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

// import productsData from "../../api/productsData.json";
import { getProducts } from "../../api/productApi";
import { BASE_URL } from "../../api/client";
import { useEffect, useState } from "react";

const NewArrivals = ({ isHomePageContent, limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const productToShow = limit ? products.slice(0, limit) : products;

  return (
    <div className="container">
      {/* Header section */}
      <div className="flex justify-between items-center">
        {/* left side content */}
        <div className="text-left mb-10">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sm text-dark"
          >
            New Arrival Products for you
          </p>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="text-3xl font-bold"
          >
            New Arrival Products
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
          <div className="mb-10">
            <div className="group">
              <Link
                to="/new-arrivals"
                data-aos="slide-right"
                data-aos-once="true"
                className="flex items-center gap-1 text-secondary hover:text-dark"
              >
                View all
                <span>
                  <FaArrowRight className="transition-transform duration-400 ease-in-out group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 gap-10 mb-15">
        {productToShow.map((data) => (
          <div
            key={data.id}
            data-aos="slide-up"
            data-aos-once="true"
            data-aos-delay={data.aosDelay}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center rounded-2xl shadow-xl w-full justify-center"
          >
            {/* image section */}
            <div className="order-1 sm:order-1">
              <div className="relative overflow-hidden order-1 sm:order-1">
                <img
                  src={
                    data.image?.startsWith("http")
                      ? data.image
                      : `${BASE_URL}${data.image}`
                  }
                  alt=""
                  className="size-[250px] object-cover sm:rounded-bl-2xl sm:rounded-tl-2xl rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-br-none w-full"
                />
              </div>
            </div>
            {/* text content section */}
            <div className="flex flex-col gap-2 order-2 sm:order-2 p-2">
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.color}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
              {/* <p className="line-clamp-2">{data.review}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
