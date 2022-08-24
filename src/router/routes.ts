import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    meta: { layout: "main" },
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    meta: { layout: "empty" },
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/RegistrationView.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    meta: { layout: "empty" },
    component: () => import("../views/NotFoundView.vue"),
  },
];

export default routes;
