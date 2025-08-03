import type { App } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'

//vue注册所有图标
function registerIcons(app:App){

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export {ElementPlus,registerIcons}
