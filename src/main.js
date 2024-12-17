import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js"; // Import router if using Vue Router
import "./style.css"; // Import global styles

createApp(App).use(router).mount("#app");
