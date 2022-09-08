<template>
  <component v-bind:is="handleGetLayout()">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";
import { TAppState } from "./store";
import { AppLayouts } from "./layouts/intex";
import routes from "./routes";

const store = useStore<TAppState>();
const {
  state: {
    layout: { current },
  },
} = reactive(store);

routes.beforeResolve(({ path }) => {
  if (path.includes("login")) store.dispatch("setLayout", "default");
  else if (store.state.layout.current !== "app")
    store.dispatch("setLayout", "app");
});

const handleGetLayout = () =>
  AppLayouts[store.state.layout.current] || AppLayouts["default"];
</script>

<style lang="scss" scoped>
@import "./assets/scss/main.scss";
</style>
