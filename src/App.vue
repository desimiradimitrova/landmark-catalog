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
  {
    id: 1,
    name: "Eiffel Tower",
    image: "/images/eiffel.jpg",
    description: "Iconic tower in Paris.",
    detailedInfo:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. Named after the engineer Gustave Eiffel, it was constructed from 1887 to 1889 as the entrance arch for the 1889 World's Fair.",
    country: "France",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Colosseum",
    image: "/images/colosseum.jpg",
    description: "Ancient amphitheater in Rome.",
    detailedInfo:
      "The Colosseum, also known as the Flavian Amphitheatre, is an oval amphitheater in the center of Rome, Italy. Built in 70–80 AD, it is the largest ancient amphitheater ever built and remains a major tourist attraction.",
    country: "Italy",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Neuschwanstein Castle",
    image: "/images/castle.jpg",
    description: "Fairytale castle in Germany.",
    detailedInfo:
      "Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau in southwest Bavaria, Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat and homage to Richard Wagner.",
    country: "Germany",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Big Ben",
    image: "/images/big ben.jpg",
    description: "Famous clock tower in London.",
    detailedInfo:
      "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London. It is one of the most prominent symbols of the United Kingdom and parliamentary democracy.",
    country: "United Kingdom",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Sagrada Familia",
    image: "/images/sagrada familia.jpg",
    description: "Famous basilica in Barcelona.",
    detailedInfo:
      "The Sagrada Familia is a large unfinished Roman Catholic minor basilica in Barcelona, designed by Spanish architect Antoni Gaudí. Construction began in 1882, and it is expected to be completed in 2026.",
    country: "Spain",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Acropolis",
    image: "/images/acropolis.jpg",
    description: "Historic site in Athens.",
    detailedInfo:
      "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens. It contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon.",
    country: "Greece",
    isFavorite: false,
  },
  {
    id: 7,
    name: "Brandenburg Gate",
    image: "/images/brandenburg.jpg",
    description: "Historical landmark in Berlin.",
    detailedInfo:
      "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II. It has become a symbol of German unity and peace.",
    country: "Germany",
    isFavorite: false,
  },
  {
    id: 8,
    name: "Leaning Tower of Pisa",
    image: "/images/pisa.jpg",
    description: "Famous leaning tower in Pisa.",
    detailedInfo:
      "The Leaning Tower of Pisa is a freestanding bell tower of the cathedral of the Italian city of Pisa, known for its unintended tilt. The tilt began during construction, caused by an inadequate foundation on soft ground.",
    country: "Italy",
    isFavorite: false,
  },
  {
    id: 9,
    name: "Mont Saint-Michel",
    image: "/images/mont-saint-michel.jpg",
    description: "Island commune in Normandy.",
    detailedInfo:
      "Mont Saint-Michel is a tidal island and mainland commune in Normandy, France. The island is best known for its medieval abbey and church, attracting millions of tourists annually.",
    country: "France",
    isFavorite: false,
  },
  {
    id: 10,
    name: "Atomium",
    image: "/images/atomium.jpg",
    description: "Unique landmark in Brussels.",
    detailedInfo:
      "The Atomium is a landmark building in Brussels, Belgium, originally constructed for the 1958 Brussels World's Fair. It is shaped like a unit cell of an iron crystal magnified 165 billion times.",
    country: "Belgium",
    isFavorite: false,
  },
  {
    id: 11,
    name: "Palace of Westminster",
    image: "/images/westminster.jpg",
    description: "Iconic palace in London.",
    detailedInfo:
      "The Palace of Westminster serves as the meeting place for the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. It is an iconic structure located on the north bank of the River Thames.",
    country: "United Kingdom",
    isFavorite: false,
  },
  {
    id: 12,
    name: "Vatican City",
    image: "/images/vatican.jpg",
    description: "Famous city-state in Rome.",
    detailedInfo:
      "Vatican City, the smallest country in the world, is a city-state surrounded by Rome, Italy. It is the headquarters of the Roman Catholic Church and home to the Pope, with famous sites such as St. Peter's Basilica and the Sistine Chapel.",
    country: "Vatican City",
    isFavorite: false,
  },
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