import http from "./http";
import api from "./ApiList.json";
export const LoginUser = (user) => {
  console.log("email", user["email"]);
  return http.get(`${api.mockapi}/user?email=${user["email"]}`);
};
export const RegisterUser = (user) => {
  return http.post(`${api.mockapi}/user`, JSON.stringify(user));
};

export const FavoriteApi = (favorite, userId) => {
  return http.put(`${api.mockapi}/user/${userId}`, favorite);
};
