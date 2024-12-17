import { ref } from "vue";

export function useRouterState() {
  const landmarks = ref([
    {
      id: 1,
      name: "Eiffel Tower",
      image: "/images/eiffel.jpg",
      description: "Iconic tower in Paris.",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Colosseum",
      image: "/images/colosseum.jpg",
      description: "Ancient amphitheater in Rome.",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Neuschwanstein Castle",
      image: "/images/castle.jpg",
      description: "Fairytale castle in Germany.",
      isFavorite: false,
    },
    {
      id: 4,
      name: "Big Ben",
      image: "/images/big ben.jpg",
      description: "Famous clock tower in London.",
      isFavorite: false,
    },
  ]);

  // Function to toggle favorite status
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
