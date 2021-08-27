import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "/random-generator"
  },
  {
    path: "/random-generator",
    name: "RandomGenerator",
    component: () => import("@/views/RandomGenerator.vue")
  },
  {
    path: "/ruler",
    name: "Ruler",
    component: () => import("@/views/Ruler.vue")
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})