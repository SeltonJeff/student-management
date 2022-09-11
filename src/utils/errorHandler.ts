import AppRouter from "../routes";
import AppStore from "../store";

export type TError = {
  code: string;
  status: number;
  message: string;
};

export default async function (error: unknown) {
  const apiError: any = error;
  await AppStore.dispatch("alert", {
    type: "error",
    content: apiError.response.data.message || "Erro inesperado.",
  });
  if (apiError.response.data.status === 401) {
    localStorage.clear();
    await AppRouter.push({ path: "/login" });
    //  hook to refresh_token here in future
  }
}
