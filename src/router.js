import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./components/HomeView.vue";
import FavoritesView from "./components/FavoritesView.vue";
import AboutView from "./components/AboutView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/favorites", name: "Favorites", component: FavoritesView },
  { path: "/about", name: "About", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
