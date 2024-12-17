<template>
  <!-- Hero Section -->
  <div class="hero">
  <div class="hero-overlay">
    <div class="hero-text">
      <h1>GoCheckThis</h1>
      <p>Explore Europe's Most Iconic Landmarks</p>
    </div>
  </div>
</div>
  <!-- Search and Sort Controls -->
  <div class="container">
    <div class="controls my-4 text-center">
      <!-- Search Bar -->
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="Search for landmarks..."
        class="search-bar"
      />

      <!-- Sort Dropdown -->
      <select v-model="selectedCountry" class="sort-dropdown">
        <option value="">All Countries</option>
        <option v-for="country in europeanCountries" :key="country" :value="country">
          {{ country }}
        </option>
      </select>
    </div>

    <!-- Landmark Grid or Empty Message -->
    <div v-if="filteredAndSortedLandmarks.length" class="grid">
      <div v-for="landmark in filteredAndSortedLandmarks" :key="landmark.id" class="card">
        <img :src="landmark.image" :alt="landmark.name" />
        <h2>{{ landmark.name }} - {{ landmark.country }}</h2>
        <p>{{ landmark.description }}</p>
        <button @click="toggleFavorite(landmark.id)">
          {{ landmark.isFavorite ? "Remove from Favorites" : "Add to Favorites" }}
        </button>
      </div>
    </div>

    <!-- Message When No Landmarks -->
    <div v-else class="no-landmarks">
      <p>
        For now, we don't have landmarks in <strong>{{ selectedCountry }}</strong>, but you can
        add one below!
      </p>
      <!-- Add Landmark Form -->
      <form @submit.prevent="addLandmark" class="add-landmark-form">
        <input
          v-model="newLandmark.name"
          type="text"
          placeholder="Landmark Name"
          required
        />
        <select v-model="newLandmark.country" required>
          <option value="" disabled>Choose Country</option>
          <option v-for="country in europeanCountries" :key="country" :value="country">
            {{ country }}
          </option>
        </select>
        <textarea
          v-model="newLandmark.description"
          placeholder="Short Information"
          required
        ></textarea>
        <input type="file" @change="handleFileUpload" required />
        <button type="submit">Add Landmark</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";

// Inject shared state
const landmarks = inject("landmarks");
const toggleFavorite = inject("toggleFavorite");

// Search and Sort State
const searchKeyword = ref("");
const selectedCountry = ref("");

// European Countries
const europeanCountries = [
  "France",
  "Bulgaria",
  "Italy",
  "Germany",
  "Spain",
  "United Kingdom",
  "Greece",
  "Belgium",
  "Netherlands",
  "Austria",
  "Portugal",
  "Sweden",
  "Norway",
  "Switzerland",
  "Denmark",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Ireland",
  "Finland",
  "Romania",
  "Slovakia",
  "Croatia",
];

// Filter and Sort Landmarks
const filteredAndSortedLandmarks = computed(() => {
  let filtered = landmarks.value;

  // Filter landmarks based on search keyword
  if (searchKeyword.value) {
    filtered = filtered.filter((landmark) =>
      landmark.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    );
  }

  // Filter landmarks by selected country
  if (selectedCountry.value) {
    filtered = filtered.filter((landmark) => landmark.country === selectedCountry.value);
  }

  return filtered;
});

// Add Landmark State
const newLandmark = ref({
  name: "",
  country: "",
  description: "",
  image: null,
});

// Handle File Upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newLandmark.value.image = URL.createObjectURL(file);
  }
};

// Add New Landmark
const addLandmark = () => {
  landmarks.value.push({
    id: Date.now(),
    name: newLandmark.value.name,
    country: newLandmark.value.country,
    description: newLandmark.value.description,
    image: newLandmark.value.image,
    isFavorite: false,
  });

  // Reset Form
  newLandmark.value = {
    name: "",
    country: "",
    description: "",
    image: null,
  };
};
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 400px;
  background: url("/public/images/hero.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

.hero-text p {
  font-size: 1.5rem;
  color: #ddd;
}

/* Add Landmark Form */
.no-landmarks {
  text-align: center;
  margin-top: 2rem;
}

.add-landmark-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.add-landmark-form input,
.add-landmark-form select,
.add-landmark-form textarea {
  width: 50%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-landmark-form button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-landmark-form button:hover {
  background-color:  #1a3e34;;
}
</style>
