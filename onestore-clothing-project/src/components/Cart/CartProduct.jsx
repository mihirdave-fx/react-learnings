import { useContext } from "react";
import { CartContext } from "../../features/ContextProvider";

const CartProduct = ({ product }) => {
  const { id, img, title, price, rating, color, size, description, quantity } =
    product;

  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((product) => product.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((product) => product.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  return (
    <section>
      <div className="flex flex-row gap-4 shadow-lg p-4 mt-2 mb-3 rounded-lg">
        <div className="flex items-center">
          <img
            src={img}
            alt=""
            className="w-25 h-25 rounded-full object-cover"
          />
        </div>
        <div className="p-1 flex flex-col gap-2">
          <div>
            <h3>{title}</h3>
            <h4>${price}</h4>
          </div>
          <div className="flex gap-2 w-fit text-center items-center">
            <button
              className="rounded-full w-6 h-6 border font-bold"
              onClick={() => Decrease(id)}
            >
              -
            </button>
            <button className="rounded border px-2 py-1">{quantity}</button>
            <button
              className="rounded-full w-6 h-6 border font-bold"
              onClick={() => Increase(id)}
            >
              +
            </button>
          </div>
          <button
            className="border py-1 px-2 rounded cursor-pointer bg-primary hover:bg-dark hover:text-white font-semibold"
            onClick={() => dispatch({ type: "Remove", id: id })}
          >
            Remove
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartProduct;
