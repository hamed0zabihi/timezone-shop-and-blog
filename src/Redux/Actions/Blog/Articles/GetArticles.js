import { getArticlesFromApi } from "../../../../Server/Article";

export const GetArticles = () => {
  return async (dispatch) => {
    const { data, status } = await getArticlesFromApi();
    if (status === 200) {
      await dispatch({ type: "GET_ARTICLES", payload: data });
    }
  };
};
