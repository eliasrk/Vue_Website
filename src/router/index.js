import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Weather from '@/views/Weather.vue'

const routes = [
  {
    path: '/', redirect: '/Weather.vue'
  },
  {
    path: "/Home.vue",
    name: "Home",
    component: Home,
  },
  {
    path: '/About',
    name: "About",
    component: About,
  },
  {
    path: '/Weather.vue',
    name: "Weather",
    component: Weather,
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
