import axios from "axios";
import { Env } from "./env";

export const Api = axios.create({
  baseURL: Env.VITE_BASE_URL_API,
  headers: {
    client_secret: Env.VITE_API_SECRET,
  },
});

Api.interceptors.request.use(async (request) => {
  const tokenOnLocalStorage = localStorage.getItem("access_token");
  if (request.headers && tokenOnLocalStorage) {
    request.headers.access_token = tokenOnLocalStorage;
  }
  return request;
});
