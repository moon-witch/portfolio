import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/public/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/touchdown",
      name: "landing",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/user/Profile.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/public/About.vue"),
    },
    {
      path: "/code",
      name: "code",
      component: () => import("../views/public/CodeExamples.vue"),
    },
    {
      path: "/other",
      name: "other",
      component: () => import("../views/public/OtherProjects.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/user/Settings.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/user/Dashboard.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/user/Profile.vue"),
    },
  ],
});

export default router;
