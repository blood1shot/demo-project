import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "@/scss/styles.scss";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { PiniaSharedState } from "pinia-shared-state";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/js/all";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(PiniaSharedState({ enable: true, initialize: true, type: "native" }));

createApp(App).use(pinia).use(router).mount("#app");
