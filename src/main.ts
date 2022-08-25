import { createApp } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
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

const firebaseConfig = {
  apiKey: "AIzaSyDB7X4d1b79obqPlnrgkuzSh0hKtiQ8xYw",
  authDomain: "vue-crm-d0d2b.firebaseapp.com",
  projectId: "vue-crm-d0d2b",
  storageBucket: "vue-crm-d0d2b.appspot.com",
  messagingSenderId: "49982493637",
  appId: "1:49982493637:web:548e992e70a5ea892db1ac",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(pinia).use(router).mount("#app");
