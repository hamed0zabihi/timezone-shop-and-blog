import * as types from "../ActionTypes";

export const GetSelectedProduct = (id) => {
  return async (dispatch, getState) => {
    const AllProducts = [...getState().productsLocal];
    const data = AllProducts.filter((el) => el.id === parseInt(id));
    if (data && AllProducts) {
      await dispatch({ type: types.GET_SELECTED_PRODUCT, payload: data });
    }
  };
};
