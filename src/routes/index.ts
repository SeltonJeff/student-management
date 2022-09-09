import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../pages/login/index.vue";

import { StudentRoutes } from "./student";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/dashboard", redirect: "/dashboard/student" },
];

const AppRoutes: RouteRecordRaw[] = [...routes, ...StudentRoutes];

const AppRouter = createRouter({
  routes: AppRoutes,
  history: createWebHistory(),
});

export default AppRouter;
