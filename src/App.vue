<template>
  <div>
    <NavigationBar />
    <router-view />
    <FooterView />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import NavigationBar from "./components/NavigationBar.vue";

const landmarks = ref([
  { id: 1, name: "Eiffel Tower", image: "/images/eiffel.jpg", description: "Iconic tower in Paris.", country: "France", isFavorite: false },
  { id: 2, name: "Colosseum", image: "/images/colosseum.jpg", description: "Ancient amphitheater in Rome.", country: "Italy", isFavorite: false },
  { id: 3, name: "Neuschwanstein Castle", image: "/images/castle.jpg", description: "Fairytale castle in Germany.", country: "Germany", isFavorite: false },
  { id: 4, name: "Big Ben", image: "/images/big ben.jpg", description: "Famous clock tower in London.", country: "United Kingdom", isFavorite: false },
  { id: 5, name: "Sagrada Familia", image: "/images/sagrada familia.jpg", description: "Famous basilica in Barcelona.", country: "Spain", isFavorite: false },
  { id: 6, name: "Acropolis", image: "/images/acropolis.jpg", description: "Historic site in Athens.", country: "Greece", isFavorite: false },
  { id: 7, name: "Brandenburg Gate", image: "/images/brandenburg.jpg", description: "Historical landmark in Berlin.", country: "Germany", isFavorite: false },
  { id: 8, name: "Leaning Tower of Pisa", image: "/images/pisa.jpg", description: "Famous leaning tower in Pisa.", country: "Italy", isFavorite: false },
  { id: 9, name: "Mont Saint-Michel", image: "/images/mont-saint-michel.jpg", description: "Island commune in Normandy.", country: "France", isFavorite: false },
  { id: 10, name: "Atomium", image: "/images/atomium.jpg", description: "Unique landmark in Brussels.", country: "Belgium", isFavorite: false },
  { id: 11, name: "Palace of Westminster", image: "/images/westminster.jpg", description: "Iconic palace in London.", country: "United Kingdom", isFavorite: false },
  { id: 12, name: "Vatican City", image: "/images/vatican.jpg", description: "Famous city-state in Rome.", country: "Vatican City", isFavorite: false },
]);


const toggleFavorite = (id) => {
  const landmark = landmarks.value.find((item) => item.id === id);
  if (landmark) {
    landmark.isFavorite = !landmark.isFavorite;
  }
};

// Provide State to All Child Components
provide("landmarks", landmarks);
provide("toggleFavorite", toggleFavorite);
import FooterView from "@/components/FooterView.vue";
</script>
