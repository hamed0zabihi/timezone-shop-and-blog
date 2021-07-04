import * as types from "../ActionTypes";

const initialState = [];

export const addProductToCart = (product = initialState, quantity = 1) => {
  return {
    type: types.ADD_TO_CART,
    payload: { ...product, quantity: quantity },
  };
};

export const removeProductFromCart = (id = initialState) => {
  return { type: types.REMOVE_FROM_CART, payload: id };
};

export const clearCart = () => {
  return { type: types.CLEAR_CART, payload: [] };
};
