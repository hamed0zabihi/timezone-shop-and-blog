import http from "./http";
import api from "./ApiList.json";

export const createOrder = (order, userId) => {
  return http.post(
    `${api.mockapi}/user/${userId}/orders`,
    JSON.stringify(order)
  );
};
