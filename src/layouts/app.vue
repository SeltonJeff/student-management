<template>
  <div class="app-layout">
    <Side />
    <v-container class="page-content" fluid>
      <slot />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Side from "../components/_layout/Side/index.vue";
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
</style>
