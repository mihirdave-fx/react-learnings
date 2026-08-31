import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <div className="main-div px-50 text-center">
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-bold border-b-2">Welcome Admin</h1>
      </div>
      <p className="mt-5">
        <Link to="/admin/products" className="text-blue-500 hover:text-red-500">
          Go to product management
        </Link>
      </p>
    </div>
  );
};

export default AdminHomePage;
