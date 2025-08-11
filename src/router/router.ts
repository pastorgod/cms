import NotFound from '@/views/404/NotFound.vue'
import LoginView from '@/views/Login/LoginView.vue'
import Main from '@/views/Main/MainView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import constDefine from '@/define/constDefine'

console.log('111');
import useLoginStore from '@/stores/loginStore'
const loginStore = useLoginStore()


import { stringUtils } from '@utils/stringUtils'
const { IsNullOrEmpty } = stringUtils()

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
            component: LoginView,
        },
        {
            path: '/:pathMatch(.*)',
            component: NotFound,
        },
    ],
})



export default router
