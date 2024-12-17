<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <LandmarkCard
      v-for="landmark in landmarks"
      :key="landmark.id"
      :landmark="landmark"
      @toggle-favorite="onToggleFavorite"
    />
  </div>
</template>

<script setup>
import LandmarkCard from "./LandmarkCard.vue";

defineProps(["landmarks"]);
const emit = defineEmits(["toggle-favorite"]);

const onToggleFavorite = (id) => {
  emit("toggle-favorite", id);
};
</script>
