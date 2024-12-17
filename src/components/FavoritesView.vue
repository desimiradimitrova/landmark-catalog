<template>
  <div class="container">
    <h1 class="text-center text-2xl font-bold mb-6">Your Favorite Landmarks</h1>

    <!-- Show Favorites or Empty Message -->
    <div v-if="favorites.length" class="grid">
      <div v-for="landmark in favorites" :key="landmark.id" class="card">
        <img :src="landmark.image" :alt="landmark.name" />
        <h2>{{ landmark.name }}</h2>
        <p>{{ landmark.description }}</p>
        <button @click="toggleFavorite(landmark.id)">
          Remove from Favorites
        </button>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      No favorites added yet. Explore landmarks and add some!
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

// Inject State
const landmarks = inject("landmarks");
const toggleFavorite = inject("toggleFavorite");

// Filter Only Favorites
const favorites = computed(() =>
  landmarks.value.filter((landmark) => landmark.isFavorite)
);
</script>
