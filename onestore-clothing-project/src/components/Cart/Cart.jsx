import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../features/ContextProvider";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-center items-center">
      {/* cart */}
      <Link to="/cart" className="flex items-center gap-2">
        <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
        <span>{cart.length}</span>
      </Link>
    </div>
  );
};

export default Cart;
