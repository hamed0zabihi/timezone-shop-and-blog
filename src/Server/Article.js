import http from "./http";
import api from "./ApiList.json";

export const getArticlesFromApi = () => {
  return http.get(`${api.mockapi}/article?limit=20`);
};

export const getArticleFromApi = (id) => {
  return http.get(`${api.mockapi}/article/${id}`);
};
