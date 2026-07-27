import NewArrivals from "../components/NewArrivals/NewArrivals";

const NewArrivalsPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1>New Arrivals Page</h1>
      </div>
      <NewArrivals isHomePageContent={false} />
    </>
  );
};

export default NewArrivalsPage;
