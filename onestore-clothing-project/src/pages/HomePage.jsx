import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import TopProducts from "../components/TopProducts/TopProducts";
import NewArrivals from "../components/NewArrivals/NewArrivals";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="mt-10 sm:mt-14 mb-12 flex justify-center">
        <Products isHomePageContent={true} limit={5} />
      </div>
      <TopProducts isHomePageContent={true} limit={3} />
      <Banner />
      <Subscribe />
      <NewArrivals isHomePageContent={true} limit={4} />
      <Testimonials />
    </>
  );
};

export default HomePage;
