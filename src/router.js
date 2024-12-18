import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import FavoritesView from "./components/FavoritesView.vue";
import AboutView from "./components/AboutView.vue";
import LandmarkDetails from "./components/LandmarkDetails.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/favorites", name: "Favorites", component: FavoritesView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/landmark/:id", name: "LandmarkDetails", component: LandmarkDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;