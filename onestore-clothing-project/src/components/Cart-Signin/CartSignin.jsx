import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../features/ContextProvider";
import { useContext } from "react";
CartContext;

const CartSignin = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex justify-center items-center">
      {/* cart */}
      <div>
        <Link to="/cart" className="flex items-center gap-2">
          <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default CartSignin;
