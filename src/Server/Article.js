import http from "./http";
import api from "./ApiList.json";

export const getArticlesFromApi = () => {
  return http.get(`${api.mockapi}/article?limit=20`);
};
