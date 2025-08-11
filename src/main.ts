// ┌────────────────────────────────────────────────────────────────────────────────────┐
//                                       "工具函数"                                      
// └────────────────────────────────────────────────────────────────────────────────────┘

import { stringUtils } from '@utils/stringUtils'
const { IsNullOrEmpty } = stringUtils()

// ┌────────────────────────────────────────────────────────────────────────────────────┐
//                                       "导入各种库"                                      
// └────────────────────────────────────────────────────────────────────────────────────┘

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 重置样式
import 'normalize.css'
//导入通用样式
import './assets/css/index.less'
//element-plus样式
import 'element-plus/dist/index.css'

//element-plus组件和图标
import ElementComp from '@/plugins/ElementComp'
import ElementPlus from 'element-plus'

import App from './App.vue'
const app = createApp(App)

//pinia缓存
const pinia = createPinia()
app.use(pinia)

//路由
import router from './router/router'
app.use(router)

//element-plus
app.use(ElementPlus)
app.use(ElementComp)

//导航守卫
import useLoginStore from '@/stores/loginStore'
const loginStore = useLoginStore()
router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        next()
        return
    }

    //内存中没有登录信息
    if (!IsNullOrEmpty(loginStore.username) || !IsNullOrEmpty(loginStore.projectId)) {
        next({ name: 'login' })
        return
    }

    next()
})

app.mount('#app')
