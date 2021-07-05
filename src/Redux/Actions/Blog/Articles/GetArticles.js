import {
  getArticlesFromApi,
  getArticleFromApi,
} from "../../../../Server/Article";
import * as types from "../../ActionTypes";

export const GetArticles = () => {
  return async (dispatch) => {
    const { data, status } = await getArticlesFromApi();
    if (status === 200) {
      await dispatch({ type: types.GET_ARTICLES, payload: data });
    }
  };
};

export const GetArticle = (id = []) => {
  return async (dispatch) => {
    const { data, status } = await getArticleFromApi(id);
    if (status === 200) {
      await dispatch({ type: types.GET_ARTICLE, payload: data });
    }
  };
};
