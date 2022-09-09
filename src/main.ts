import "vuetify/_styles.scss";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import AppRouter from "./routes";
import AppStore from "./store";
// @ts-ignore
import VueMask from "@devindex/vue-mask";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(AppRouter);
app.use(AppStore);
app.use(vuetify);
app.use(VueMask);

app.mount("#app");
