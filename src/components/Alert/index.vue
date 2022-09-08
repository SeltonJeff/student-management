<template>
  <v-alert v-if="isVisible" :type="type">{{ content }}</v-alert>
</template>

<script setup lang="ts">
import { ref } from "vue";

type TAlertTypes = "success" | "info" | "warning" | "error";
defineProps<{ type: TAlertTypes; content: string }>();

const isVisible = ref(false);
const time = 4000;

const handleHidden = () => {
  isVisible.value = false;
};
const handleVisible = () => {
  isVisible.value = true;
  setTimeout(() => handleHidden(), time);
};
</script>
