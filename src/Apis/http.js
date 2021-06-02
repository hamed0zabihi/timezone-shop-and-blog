import axios from "axios";
import { toast } from "react-toastify";
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
      toast.error("مشکلی از سمت سرور رخ داده است.", {
        position: "top-right",
        closeOnClick: true,
      });
    }
    console.log("🚀 ~ file: http.js ~ error", error);
    return Promise.reject(error);
  }
);
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
