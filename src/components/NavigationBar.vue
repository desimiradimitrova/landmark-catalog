<template>
  <nav class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold">GoCheckThis</h1>
      <ul class="flex space-x-6">
        <li>
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="/favorites" class="hover:text-gray-300"
            >Favorites</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-300"
            >About</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav a {
  text-decoration: none;
  font-size: 1rem;
}
</style>
