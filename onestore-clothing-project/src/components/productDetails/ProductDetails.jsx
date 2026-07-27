import { FaDollarSign } from "react-icons/fa6";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../features/ContextProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {
  const { id, img, title, price, rating, color, size, description } = product;

  const { dispatch } = useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "Add", product: product });
    toast.success("Item Added to cart!");
    setIsAdded(true);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-0 sm:gap-4">
            <div className="col-span-full sm:col-span-6 p-4 mt-6 mb-4 sm:mb-10">
              <div className="flex justify-end">
                <img src={img} alt={title} className="w-100 shadow-xl" />
              </div>
            </div>
            <div className="col-span-full sm:col-span-6 p-4 mt-2 sm:mt-6 mb-10">
              <div className="flex flex-col gap-4">
                <p>{title}</p>
                {/* price */}
                <div className="flex items-center">
                  <span>
                    <FaDollarSign />
                  </span>
                  {price}
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-orange-400" />
                  {rating}
                </div>
                {/* sizes */}
                <div className="flex justify-between items-center w-60">
                  <p>Select Size</p>
                  <p className="text-sm text-secondary">
                    <a href="#" className="cursor-pointer hover:text-dark">
                      Size Chart
                    </a>
                  </p>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <p className="border rounded-full w-8 h-8 text-center hover:bg-primary hover:text-white">
                    {size}
                  </p>
                </div>
                {/* buttons */}
                <div className="inline-flex gap-4 font-semibold">
                  <button
                    href="#"
                    className="w-30 border text-center rounded-full cursor-pointer hover:bg-dark hover:text-white"
                  >
                    Wishlist
                  </button>
                  {isAdded ? (
                    <Link
                      to="/cart"
                      className="w-30 border text-center rounded-full cursor-pointer bg-dark text-white hover:opacity-90 leading-normal flex items-center justify-center"
                    >
                      Go to cart
                    </Link>
                  ) : (
                    <button
                      className="w-30 border text-center rounded-full cursor-pointer hover:bg-dark hover:text-white"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
                {/* product details */}
                <div>
                  <p className="uppercase text-dark font-semibold">
                    Product Details
                  </p>
                  <p className="text-sm">{description}</p>
                </div>
                <div>
                  <p className="uppercase text-dark font-semibold ">Sold By</p>
                  <p className="text-sm">Example store, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
