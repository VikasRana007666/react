import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.baseURL,
  // withCredentials: false,
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
});

axiosInstance.interceptors.request.use((config) => {
  const token = process.env.USER_TOKEN;

  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json";
  config.headers.Accept = "application/json";

  return config;
});

export default axiosInstance;
