const initial = [];
export const addProductToCart = (product = initial, quantity = 1) => {
  return { type: "ADD_TO_CART", payload: { ...product, quantity: quantity } };
};
export const removeProductFromCart = (id) => {
  return { type: "REMOVE_FROM_CART", payload: id };
};
export const clearCart = () => {
  return { type: "CLEAR_CART", payload: [] };
};
