import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import ProductDetails from "../components/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productID);
      setProduct(data);
    };
    fetchProduct();
  }, [productID]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

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
