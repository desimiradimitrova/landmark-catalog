<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/favorites">Favorites</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>


<script setup></script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

a:hover {
  color: #93c5fd;
}
</style>
