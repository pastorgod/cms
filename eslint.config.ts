import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// 允许在.vue文件中使用除ts以外的其他语言，如需启用请取消注释以下行：
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// 更多信息请查看：https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    // 配置名称
    name: 'app/files-to-lint',
    
    // 指定需要检查的文件类型
    files: ['**/*.{ts,mts,tsx,vue}'],
    
    // 自定义规则
    rules: {
      // 设置最多允许10个连续空行，默认值：2
      'no-multiple-empty-lines': ['error', { max: 10 }],
      
      // 要求在代码块（如函数体）的开始和结束处保留空行，默认值：never（不保留空行）
      'padded-blocks': ['error', { blocks: 'always' }]
    },
  },

  // 忽略检查的目录
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  // Vue插件的基础配置
  pluginVue.configs['flat/essential'],
  
  // TypeScript和Vue的推荐配置
  vueTsConfigs.recommended,
  
  // 跳过格式化，使用Prettier处理代码格式
  skipFormatting,
)