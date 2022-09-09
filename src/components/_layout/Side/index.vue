<template>
  <nav class="side">
    <v-col align="center">
      <v-img src="/a+_logo.svg" width="100px" :aspect-ratio="16 / 9" />
      <v-list v-model="selectedMenuItem">
        <v-list-subheader>Menu</v-list-subheader>
        <v-divider style="margin-bottom: 8px" />
        <v-list-item
          v-for="(item, itemIndex) in menu"
          :key="itemIndex"
          :value="item"
          :active="item.text === selectedMenuItem"
          @click="handleSelectMenuItem(item)"
          active-color="var(--color-primary)"
        >
          <router-link :to="item.link">
            <v-list-item-title v-text="item.text" align="start" />
          </router-link>
        </v-list-item>
      </v-list>
    </v-col>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

type TMenuItem = { text: string; link: string };
const menu = [{ text: "Alunos", link: "#" }];

const selectedMenuItem = ref("Alunos");

const handleSelectMenuItem = (item: TMenuItem) => {
  selectedMenuItem.value = item.text;
};

defineComponent({
  name: "Side",
});
</script>

<style scoped lang="scss">
.side {
  position: relative;
  height: 100vh;
  width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>
