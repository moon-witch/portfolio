import { createRouter, createWebHistory } from "vue-router";
import LandingVue from "../views/public/Landing.vue";
import HomeView from "../views/public/Landing.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingVue,
    },
    {
      path: "/touchdown",
      name: "touchdown",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/user/UserProfile.vue"),
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/public/Home.vue"),
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
  ],
});

export default router;
