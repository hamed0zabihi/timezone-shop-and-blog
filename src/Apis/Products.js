import http from "./http";
import api from "./ApiList.json";

export const getProductsFromApi = () => {
  return http.get(`${api.mockapi}/product`);
};
