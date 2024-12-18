<template>
  <div class="about-view">
    <div class="about-container">
      <h1 class="about-title">About This Project</h1>
      <p class="about-description">
        <strong>GoCheckThis</strong> is a web application developed as part of the
        <strong>University Web Design</strong> subject.  Nice To Meet You!
      We are Desi and Gabi and we are friends who love to travel and explore foreign countries and cultures.
      With a lot of passion and work we created this page to help people like you learn about different landmarks around the world.
      GoCheckThis helps you explore and track Europe's most iconic landmarks.
      Discover places, add your favorites, and plan your next adventure!
      Enjoy!
      </p>

      <h2 class="authors-title">Authors</h2>
      <ul class="authors-list">
        <li v-for="author in authors" :key="author.name">
          <strong>{{ author.name }}</strong> - 
          <a :href="'mailto:' + author.email">{{ author.email }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Authors data
const authors = ref([
  { name: "Gabriela Stancheva", email: "gstancheva@tu-sofia.bg" },
  { name: "Desimira Dimitrova", email: "dedimitrova@tu-sofia.bg" },
]);
</script>

<style scoped>
.about-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9; /* Light neutral background */
}

.about-container {
  max-width: 800px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
}

.about-title {
  font-size: 2rem;
  font-weight: bold;
  color: #007991;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
}

.authors-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #005f6b;
}

.authors-list {
  list-style: none;
  padding: 0;
}

.authors-list li {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.authors-list a {
  color: #007991;
  text-decoration: none;
}

.authors-list a:hover {
  text-decoration: underline;
}
</style>