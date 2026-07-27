import { FaDollarSign } from "react-icons/fa6";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const TopProductDetails = ({ topProduct }) => {
  const { id, img, title, price, rating, color, size, description } =
    topProduct;
  return (
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
                <a
                  href="#"
                  className="w-30 border text-center rounded-full hover:bg-dark hover:text-white"
                >
                  Wishlist
                </a>
                <a
                  href="#"
                  className="w-30 border text-center rounded-full hover:bg-dark hover:text-white"
                >
                  Add to cart
                </a>
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
  );
};

export default TopProductDetails;
