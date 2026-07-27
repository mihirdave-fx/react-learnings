import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";

import ErrorPage from "../layouts/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import TopProductsPage from "../pages/TopProductsPage";
import NewArrivalsPage from "../pages/NewArrivalsPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import TopProductDetailsPage from "../pages/TopProductDetailsPage";
import CartPage from "../pages/CartPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productID",
        element: <ProductDetailsPage />,
      },
      {
        path: "top-products",
        element: <TopProductsPage />,
      },
      {
        path: "top-products/:tproductID",
        element: <TopProductDetailsPage />,
      },
      {
        path: "new-arrivals",
        element: <NewArrivalsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "sign-in",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
]);
