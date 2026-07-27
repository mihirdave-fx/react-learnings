import BannerImg from "../../assets/products/women2.jpg";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import { FaShippingFast } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 md:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className="overflow-hidden">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] max-h-[350px] object-cover mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] order-1 sm:order-1"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:gap-3 sm:pt-0 order-2 sm:order-2">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            >
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoCheckmarkDoneCircleSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaShippingFast className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdPayments className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
