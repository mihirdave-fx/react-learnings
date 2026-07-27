import { useContext } from "react";
import CartProduct from "../components/Cart/CartProduct";
import { CartContext } from "../features/ContextProvider";
CartContext;
import { totalItems, totalPrice } from "../features/CartReducer";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <section>
      <div className="container">
        <h1 className="text-center text-2xl font-bold mb-10">Cart Page</h1>
        <div className="grid grid-cols-12 gap-4 my-6">
          <div className="col-span-12 sm:col-span-8 space-y-4">
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border">
                <h2 className="text-lg font-semibold text-gray-700">
                  Your cart is empty
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Add items to see them here!
                </p>
              </div>
            )}
          </div>
          <div className="col-span-12 sm:col-span-4">
            <div className="w-full bg-primary text-black font-semibold p-4 rounded">
              <div className="mb-4">
                <p>Total Items: {totalItems(cart)}</p>
                <p>Total Price: ${totalPrice(cart)}</p>
              </div>
              <div>
                <button className="px-4 py-2 shadow-lg rounded-xl bg-dark text-white cursor-pointer">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
