import http from "./http";
import api from "./ApiList.json";
export const getArticlesFromApi = () => {
  return http.get(`${api.jsonplaceholder}/posts?_limit=20`);
};
