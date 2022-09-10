type TEnv = {
  VITE_BASE_URL_API: string;
  VITE_API_SECRET: string;
};

export const Env: TEnv = {
  VITE_BASE_URL_API: import.meta.env.VITE_BASE_URL_API,
  VITE_API_SECRET: import.meta.env.VITE_API_SECRET,
};
