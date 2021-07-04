import * as types from "../ActionTypes";

const initialState = [];

export const GetSelectedProduct = (id = initialState) => {
  return async (dispatch, getState) => {
    const AllProducts = [...getState().productsLocal];
    const data = AllProducts.filter((el) => el.id === parseInt(id));
    if (data && AllProducts) {
      await dispatch({ type: types.GET_SELECTED_PRODUCT, payload: data });
    }
  };
};
