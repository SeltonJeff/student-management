type TEnv = {
  VITE_BASE_URL_API: string;
};

export const Env: TEnv = {
  VITE_BASE_URL_API: import.meta.env.VITE_BASE_URL_API,
};
