import axios from "axios";
import { Env } from "./env";

console.log("env: ", Env);
export const Api = axios.create({
  url: Env.VITE_BASE_URL_API,
});
