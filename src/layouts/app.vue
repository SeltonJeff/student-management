<template>
  <div class="app-layout">
    <Side />
    <v-container class="page-content">
      <slot />
      <v-dialog
        v-model="alert.isVisible"
        @update:modelValue="
          ($event) => store.dispatch('setAlertVisible', $event)
        "
        class="dialog__student-deleted"
      >
        <v-alert :type="alert.current.type" border="top" prominent>
          {{ alert.current.content }}
        </v-alert>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Side from "../components/_layout/Side/index.vue";
import { useStore } from "vuex";
import { TAppState } from "../store";
import { reactive } from "vue";

const store = useStore<TAppState>();
const {
  state: { alert },
} = reactive(store);
</script>

<style scoped lang="scss">
.app-layout {
  display: flex;

  .page-content {
    position: relative;
    height: 100vh;
    width: calc(100% - 350px);
    overflow-y: auto;
    padding: 20px;
    background-color: rgba(230, 230, 230);
  }
}

:deep(.v-overlay__content) {
  min-height: 200px;
  min-width: 400px;
}
:deep(.v-alert) {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .v-alert__prepend {
    margin: 0;
  }
}
</style>
