<template>
    <div class="details-container">
      <div class="landmark-details">
        <img :src="landmark.image" :alt="landmark.name" class="landmark-image" />
        <h1 class="landmark-title">{{ landmark.name }}</h1>
        <p class="landmark-country"><strong>Country:</strong> {{ landmark.country }}</p>
        <p class="landmark-description">{{ landmark.description }}</p>
        <p class="landmark-detailed-info">{{ landmark.detailedInfo }}</p>
        <router-link to="/" class="back-link">Back to Home</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { inject } from "vue";
  
  // Inject landmarks from the shared state
  const landmarks = inject("landmarks");
  
  // Get the route parameters
  const route = useRoute();
  
  // Find the landmark by its ID
  const landmark = computed(() =>
    landmarks.value.find((lm) => lm.id === Number(route.params.id))
  );
  </script>
  
  <style scoped>
  .details-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  .landmark-details {
    max-width: 800px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
  }
  
  .landmark-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .landmark-title {
    font-size: 2rem;
    color: #007991;
    margin-bottom: 0.5rem;
  }
  
  .landmark-country {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .landmark-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
  
  .landmark-detailed-info {
    font-size: 1rem;
    line-height: 1.8;
    color: #444;
    margin-top: 1rem;
  }
  
  .back-link {
    display: inline-block;
    margin-top: 1.5rem;
    text-decoration: none;
    color: #22b274;
    font-weight: bold;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>