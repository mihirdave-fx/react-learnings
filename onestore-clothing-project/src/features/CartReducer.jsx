export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0,
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];

    case "Remove":
      return state.filter((product) => product.id !== action.id);

    case "Increase":
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

    case "Decrease":
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      );

    default:
      state;
  }
};

export default CartReducer;
