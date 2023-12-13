import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue"
import SplashView from "@/views/SplashView.vue"
import RegisterUserView from "@/views/RegisterUserView.vue"
import ResetPasswordView from "@/views/ResetPasswordView.vue"
import IndexView from "@/views/IndexView.vue"

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
  },
  {
    path: '/register-user',
    name: 'RegisterUserView',
    component: RegisterUserView
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordView',
    component: ResetPasswordView
  },
  {
    path: '/index',
    name: 'IndexView',
    component: IndexView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
