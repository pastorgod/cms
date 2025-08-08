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
import router from './router/router'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)

//element-plus
app.use(ElementPlus)
app.use(ElementComp)

app.mount('#app')
