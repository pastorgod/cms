import type { App } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//注册element 所有组件
export default {
  install(app: App) {
    console.log('elementPlus111');
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
     app.component(key, component)
    }
  }
}