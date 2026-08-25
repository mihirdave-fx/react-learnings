import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { getProducts } from "../../api/productApi";
import { BASE_URL } from "../../api/client";

const Products = ({ isHomePageContent, limit, className = "" }) => {
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
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-dark">
          Top Selling Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
          {/* card section */}
          {productToShow.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <Link to={`/products/${data.id}`}>
                <img
                  /* 2. Prepend BASE_URL to relative paths like /static/uploads/... */
                  src={
                    data.image?.startsWith("http")
                      ? data.image
                      : `${BASE_URL}${data.image}`
                  }
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* view all button */}
        {isHomePageContent && (
          <div className="flex justify-center">
            <Link
              to="/products"
              data-aos="slide-up"
              className="text-center mt-10 cursor-pointer bg-secondary hover:bg-dark text-white py-1 px-5 rounded-md "
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
