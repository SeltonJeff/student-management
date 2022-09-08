import { Component } from "vue";
import defaultLayout from "../layouts/default.vue";
import appLayout from "../layouts/app.vue";

export const AppLayouts = {
  default: defaultLayout as Component,
  app: appLayout as Component,
};
