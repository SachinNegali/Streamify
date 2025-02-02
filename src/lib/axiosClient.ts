import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dummyserver-wr9r.onrender.com/",
  // "http://localhost:8082/",
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
