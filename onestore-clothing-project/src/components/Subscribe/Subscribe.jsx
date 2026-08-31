import Banner from "../../assets/Subscribe/bg-img.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="mb-15 bg-gray-100 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto py-6">
          <h1 className="text-2xl text-center! sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-down"
            data-aos-once="true"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
