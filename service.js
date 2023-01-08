import axios from "axios";
import { BASE_API } from "./config";

export const axiosInstance = axios.create({
  headers: {
    Authorization: `TDAX-API`,
    "Content-Type": "application/json",
  },
});

// Use redux in non-component
// https://redux.js.org/faq/code-structure#how-can-i-use-the-redux-store-in-non-component-files
axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = BASE_API;
    return config;
  },
  (error) => Promise.reject(error)
);
