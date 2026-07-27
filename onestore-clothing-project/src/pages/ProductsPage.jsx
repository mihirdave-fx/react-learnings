import Products from "../components/Products/Products";

const ProductsPage = () => {
  return (
    <div className="mt-2 mb-6 flex justify-center">
      <Products isHomePageContent={false} className="mt-4" />
    </div>
  );
};

export default ProductsPage;
