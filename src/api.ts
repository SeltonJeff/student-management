import axios from "axios";
import { Env } from "./env";

export const Api = axios.create({
  baseURL: Env.VITE_BASE_URL_API,
  headers: {
    secret: Env.VITE_API_SECRET,
  },
});
