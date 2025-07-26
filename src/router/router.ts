import Main from '@/views/Main/Main.vue'
import NotFound from '@/views/404/NotFound.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: Main,
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound,
    },
  ],
})

export default router
