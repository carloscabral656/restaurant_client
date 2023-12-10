import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue"
import SplashView from "@/views/SplashView.vue"

const routes = [
  {
    path: '/',
    name: 'SplashView',
    component: SplashView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
