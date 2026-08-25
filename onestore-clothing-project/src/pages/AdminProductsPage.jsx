import React from "react";
import ProductForm from "../components/Admin/ProductForm";

const AdminProductsPage = () => {
  return (
    <section className="bg-primary min-h-screen mx-auto">
      <div className="px-[50px] py-5">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Product Management
        </h1>

        <ProductForm />
      </div>
    </section>
  );
};

export default AdminProductsPage;
