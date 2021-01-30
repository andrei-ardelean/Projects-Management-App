import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Project from "@/pages/Project";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/project/",
    name: "NewProject",
    component: Project,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
