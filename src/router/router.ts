import NotFound from '@/views/404/NotFound.vue'
import LoginView from '@/views/Login/LoginView.vue'
import Main from '@/views/Main/MainView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/login',
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound,
    },
  ],
})

export default router
