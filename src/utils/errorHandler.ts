import AppRouter from "../routes";
import store from "../store";

export type TError = {
  code: string;
  status: number;
  message: string;
};

export default async function (error: unknown) {
  const apiError: any = error;
  console.log("errorHandler: ", apiError.response.data);
  if (apiError.response.data.status === 401) {
    localStorage.clear();
    await AppRouter.push({ path: "/login" });
    await store.dispatch("setAlertVisible", false);
    //  hook to refresh_token here in future
  }
}
