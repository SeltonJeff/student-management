<template>
  <div class="app-layout">
    <Side />
    <div class="page-content">
      !Header here!
      <slot />
    </div>
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
    background-color: orange;
    overflow-y: auto;
  }
}
</style>
