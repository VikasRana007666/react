import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/next",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers.Accept = "application/json";

  return config;
});

export default axiosInstance;
