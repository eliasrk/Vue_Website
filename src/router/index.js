import { createWebHistory, createRouter } from "vue-router";
import Rick from '@/views/Rick.vue'
import Recipe from '@/views/Recipe.vue'
import Weather from '@/views/Weather.vue'

const routes = [
  {
    path: '/', redirect: '/Weather.vue'
  },
  {
    path: "/Rick.vue",
    name: "Rick",
    component: Rick,
  },
  {
    path: '/Recipe.vue',
    name: "Recipe",
    component: Recipe,
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
