// import NotFound from '@/views/404/NotFound.vue'      这种是立即加载模式，开始就加载所有组件，顺序不太好

import { createRouter, createWebHistory } from 'vue-router'
import constDefine from '@constDefine'
import { SetLocalCache } from '@/utils/cacheUtils'

// 抓取所有vue文件，防止动态路由的原因，在打包的时候，vue组件被剔除。此举是为了通知vite
import.meta.glob('/src/views/**/*.vue', { eager: false })

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
            component: () => import('@/views/Main/MainView.vue'),
            
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/LoginView.vue'),
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@/views/404/NotFound.vue'),
        },
    ],
})

//- 路由守卫
router.beforeEach((to, from, next) => {
    console.log('router beforeEach')
    if (to.name === 'login') {
        next()
        return
    }

    //路由为主页某个菜单，存下最近访问的页面
    if (to.fullPath.startsWith('/main')) {
        if (to.fullPath != '/main') {
            SetLocalCache(constDefine.LAST_ACCESS_URL, to.fullPath)
        }
    }

    next()
})

export default router
