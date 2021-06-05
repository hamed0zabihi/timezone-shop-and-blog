import { getProductsFromApi } from "../../../Apis/Products";

const GetProdcuts = () => {
  return async (dispatch) => {
    const { data, status } = await getProductsFromApi();
    if (status === 200) {
      await dispatch({ type: "GET_PRODUCTS", payload: data });
    }
  };
};

export default GetProdcuts;
