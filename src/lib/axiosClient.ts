import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8082/",
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("Error fecthing data", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
