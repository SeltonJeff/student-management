import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "../pages/login/index.vue";
import Dashboard from "../pages/dashboard/index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
];

const AppRouter = createRouter({
  routes,
  history: createWebHistory(),
});

export default AppRouter;
