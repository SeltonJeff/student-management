<template>
  <component v-bind:is="handleGetLayout()">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <v-dialog
      v-model="alert.isVisible"
      @update:modelValue="($event) => store.dispatch('setAlertVisible', $event)"
      class="dialog__student-deleted"
    >
      <v-alert :type="alert.current.type" border="top" prominent>
        {{ alert.current.content }}
      </v-alert>
    </v-dialog>
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
    alert,
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

<style lang="scss">
@import "./assets/scss/main.scss";

.v-overlay__content {
  min-height: 200px;
  min-width: 400px;
}
.v-alert {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .v-alert__prepend {
    margin: 0;
  }
}
</style>
