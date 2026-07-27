import React from "react";
import { useParams } from "react-router-dom";
import topProductData from "../api/topProductsData.json";
import TopProductDetails from "../components/TopProductDetails/TopProductDetails";

const TopProductDetailsPage = () => {
  const { tproductID } = useParams();

  const topProduct = topProductData.find((item) => {
    return item.id === Number(tproductID);
  });

  return (
    <>
      <div className="flex justify-center">
        <h1>Top Product Details Page</h1>
      </div>
      <TopProductDetails topProduct={topProduct} />
    </>
  );
};

export default TopProductDetailsPage;
