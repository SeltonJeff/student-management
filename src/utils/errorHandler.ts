import AppRouter from "../routes";

export type TError = {
  code: string;
  status: number;
  message: string;
};

export default async function (error: unknown) {
  const apiError: any = error;
  console.log("errorHandler: ", apiError);
  if (apiError.response.data.status === 401) {
    localStorage.clear();
    await AppRouter.push({ path: "/login" });
    //  hook to refresh_token here in future
  }
}
