import { createContext, useEffect, useReducer } from "react";
import CartReducer from "../features/CartReducer";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, [], () => {
    try {
      const localData = localStorage.getItem("localStorageCartData");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart data from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("localStorageCartData", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
