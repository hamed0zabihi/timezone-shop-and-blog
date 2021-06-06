export const GetSelectedProduct = (id) => {
  return async (dispatch, getState) => {
    const AllProducts = [...getState().ProductsLocal];
    const data = AllProducts.filter((el) => el.id === parseInt(id));
    if (data && AllProducts) {
      await dispatch({ type: "GET_SELECTED_PRODUCT", payload: data });
    }
  };
};
