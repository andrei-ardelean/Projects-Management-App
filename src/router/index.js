import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import ProjectPageView from "@/views/ProjectPageView";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'ProjectPage',
    component: ProjectPageView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
