import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers["Access-Control-Allow-Credentials"] = true;
axios.defaults.headers["crossorigin"] = true;
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      console.log("🚀 ~ file: http.js ~  response", response);
      return response;
    }
    return Promise.reject(response);
  },
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log("error:", error);
      toast.error("internal server error.please try again later", {
        position: "top-right",
        closeOnClick: true,
      });
    }
    console.log("🚀 ~ file: http.js ~ error", error);
    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
