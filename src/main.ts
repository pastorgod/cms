import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 重置样式
import 'normalize.css'
//导入通用样式
import './assets/css/index.less'

import App from './App.vue'
import router from './router/router'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
