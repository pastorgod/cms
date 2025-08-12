// import NotFound from '@/views/404/NotFound.vue'      这种是立即加载模式，开始就加载所有组件，顺序不太好

import constDefine from '@/define/constDefine';
import { GetLocalCache } from '@/utils/cacheUtils';
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
            component: () => import('@/views/Main/MainView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/LoginView.vue')
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/404/NotFound.vue')
        },
    ],
})

// 在路由守卫中动态导入 Framework
router.beforeEach((to, from, next) => {
    
     console.log('router beforeEach')
    if (to.name === 'login') {
        next()
        return
    }

    // 内存中没有登录信息
    if (GetLocalCache(constDefine.USER_NAME) || GetLocalCache(constDefine.PROJECT_ID)) {
        next({ name: 'login' })
        return
    }
    
    next()
})

// router.afterEach((to, from) => { 
//     console.log('afterEach');
// })

export default router
