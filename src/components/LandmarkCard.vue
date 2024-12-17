<template>
  <div
    class="border rounded shadow p-4 text-center"
    :class="landmark.isFavorite ? 'bg-yellow-100' : 'bg-white'"
  >
    <img
      :src="landmark.image"
      :alt="landmark.name"
      class="w-full h-32 object-cover rounded mb-2"
    />
    <h2 class="text-lg font-bold">{{ landmark.name }}</h2>
    <p class="text-sm text-gray-600">{{ landmark.description }}</p>
    <button
      @click="toggleFavorite"
      class="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
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

<style scoped>
.bg-yellow-100 {
  background-color: #fef3c7; /* Light yellow for favorite landmarks */
}
</style>
