import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../api/productsData.json";
import ProductDetails from "../components/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  const product = productsData.find((item) => {
    return item.id === Number(productID);
  });

  return (
    <>
      <div className="flex justify-center">
        <h1>Product Detail Page</h1>
      </div>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;
