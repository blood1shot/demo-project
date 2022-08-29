import { RouteRecordRaw } from "vue-router";
import routerConstants from "@/utils/routerConstants";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: routerConstants.homePage,
    meta: { layout: "main" },
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/login",
    name: routerConstants.loginPage,
    meta: { layout: "empty" },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: routerConstants.registrationPage,
    meta: { layout: "empty" },
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
      ),
  },
  {
    path: "/coming-soon",
    name: routerConstants.comingSoonPage,
    meta: { layout: "main" },
    component: () => import("../views/Coming-soon.vue"),
  },
  {
    path: "/settings",
    name: routerConstants.settingsPage,
    meta: { layout: "main" },
    component: () => import("../views/TheSettings.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: routerConstants.notFoundPage,
    meta: { layout: "empty" },
    component: () => import("../views/NotFoundView.vue"),
  },
];

export default routes;
