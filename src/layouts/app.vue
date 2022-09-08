<template>
  <div class="app-layout">
    <div class="sidebar" />
    <div class="page-content">
      !Header here!
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;

  .sidebar {
    position: relative;
    height: 100vh;
    width: 350px;
    background-color: blue;
  }

  .page-content {
    position: relative;
    height: 100vh;
    width: calc(100% - 350px);
    background-color: orange;
    overflow-y: auto;
  }
}
</style>
