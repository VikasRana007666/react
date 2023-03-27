import axios from "axios";

const axios = axios.create({
  baseURL: process.env.baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
