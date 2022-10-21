import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OblastRadaView from "../views/OblastRadaView.vue";
import NasTimView from "../views/NasTimView.vue";
import KontaktView from "../views/KontaktView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/oblast-rada",
    name: "oblastRada",
    component: OblastRadaView,
  },
  {
    path: "/nas-tim",
    name: "nasTim",
    component: NasTimView,
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: KontaktView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
