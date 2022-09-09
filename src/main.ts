import "vuetify/_styles.scss";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// @ts-ignore
import VueMask from "@devindex/vue-mask";
import App from "./App.vue";
import AppRouter from "./routes";
import AppStore from "./store";

const app = createApp(App);
const vuetify = createVuetify({ components, directives });

app.use(AppRouter);
app.use(AppStore);
app.use(vuetify);
app.use(VueMask);

app.mount("#app");
