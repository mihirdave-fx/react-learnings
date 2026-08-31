import { FaDollarSign } from "react-icons/fa6";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FaRulerVertical, FaStar } from "react-icons/fa";
import { CartContext } from "../../features/ContextProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/client";

const ProductDetails = ({ product }) => {
  const { id, image, title, price, rating, color, size, description } = product;

  const { dispatch } = useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: "Add", product: product });
    toast.success("Item Added to cart!");
    setIsAdded(true);
  };

  // Construct full image URL accurately
  const imageUrl = image?.startsWith("http") ? image : `${BASE_URL}${image}`;

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-0 sm:gap-4">
            <div className="col-span-full sm:col-span-6 p-4 mt-6 mb-4 sm:mb-10">
              <div className="flex justify-end">
                <img src={imageUrl} alt={title} className="w-100 shadow-xl" />
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
                <div className="flex gap-12 items-center">
                  <p>Select Size</p>
                  <div className="text-sm flex items-center justify-center gap-0.5 text-dark font-semibold">
                    <a href="#" className="cursor-pointer hover:text-secondary">
                      Size Chart
                    </a>
                    <p>
                      <FaRulerVertical />
                    </p>
                  </div>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <div className="border rounded-full w-6 h-6 text-center hover:bg-dark hover:text-white cursor-pointer text-sm">
                    <p>{size}</p>
                  </div>
                </div>
                {/* buttons */}
                <div className="inline-flex gap-4 font-semibold">
                  <button className="w-fit px-6 py-2 rounded-2xl text-base text-neutral-50 bg-secondary hover:bg-dark transition-colors duration-200 cursor-pointer text-sm">
                    Wishlist
                  </button>
                  {isAdded ? (
                    <button className="w-fit px-6 py-2 rounded-2xl text-base text-neutral-50 bg-secondary hover:bg-dark transition-colors duration-200 cursor-pointer text-sm">
                      <Link to="/cart">Go to cart</Link>
                    </button>
                  ) : (
                    <button
                      className="w-fit px-6 py-2 rounded-2xl text-base text-neutral-50 bg-secondary hover:bg-dark transition-colors duration-200 cursor-pointer text-sm"
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
