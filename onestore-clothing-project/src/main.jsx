import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContextProvider from "./features/ContextProvider.jsx";
import { ToastContainer, Bounce } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </ContextProvider>
  </StrictMode>,
);
