<template>
  <div class="card">
    <img :src="landmark.image" :alt="landmark.name" />
    <h2>{{ landmark.name }}</h2>
    <p>{{ landmark.description }}</p>
    <button @click="toggleFavorite">
      {{ landmark.isFavorite ? "Remove from Favorites" : "Add to Favorites" }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["landmark"]);
const emit = defineEmits(["toggle-favorite"]);

const toggleFavorite = () => {
  emit("toggle-favorite", props.landmark.id);
};
</script>
