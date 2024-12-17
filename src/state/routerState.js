import { ref } from "vue";

const landmarks = ref([
  {
        id: 1,
        name: "Eiffel Tower",
        image: "https://via.placeholder.com/150",
        description: "Iconic tower in Paris.",
        isFavorite: false,      
  },
  {
    id: 2,
    name: "Colosseum",
    image: "https://via.placeholder.com/150",
    description: "Ancient amphitheater in Rome.",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Neuschwanstein Castle",
    image: "https://via.placeholder.com/150",
    description: "Fairytale castle in Germany.",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Big Ben",
    image: "https://via.placeholder.com/150",
    description: "Famous clock tower in London.",
    isFavorite: false,
  },
]);

export function useRouterState() {
  const toggleFavorite = (id) => {
    const landmark = landmarks.value.find((item) => item.id === id);
    if (landmark) {
      landmark.isFavorite = !landmark.isFavorite;
    }
  };

  return {
    landmarks,
    toggleFavorite,
  };
  
}
