import 'normalize.css' // 重置样式
import './assets/css/index.less' //导入通用样式
import 'element-plus/dist/index.css' //element-plus样式

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// element-plus组件和图标
import ElementComp from '@/plugins/ElementComp'
import ElementPlus from 'element-plus'

import App from './App.vue'
const app = createApp(App)

// pinia缓存
const pinia = createPinia()
app.use(pinia)

import router from '@/router/router'
app.use(router)

// element-plus
app.use(ElementPlus)
app.use(ElementComp)

app.mount('#app')
