<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>

   <div class = "LoginView">
      <div class="projects">
        <div class="box-container">
          <div 
            class="project-card" 
            :class="{ 'selected': project.id === selectedProjectId }"
            v-for="project in projects" 
            :key="project.id"
            :title="project.desc"
            @click="selectProject(project.id)"
          >
            <img :src="project.icon" :alt="project.name" class="project-icon" />
            <div class="project-name">{{ project.name }}</div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="loginPanel"><LoginPanel /></div>
   </div>
</template>

<!-- #region 代码 -->
<!-- =============================代码============================ -->
<script setup lang="ts">

import {ref, onMounted, GetLocalCache ,constDefine,loginStore,type IProject}  from '@/utils/Framework.ts'

import LoginPanel from '@/views/Login/LoginPanel.vue'

const projects = ref<IProject[]>([])
const selectedProjectId = ref<number>(0)

onMounted(async () => {
  try {
    //读取配置并且加载,生成工程卡片
    const response = await fetch('/src/assets/config/projects.json')
    projects.value = await response.json()

    //工程卡片生成之后,本地判断选中的什么卡片，并且该卡片被选中
    const id = GetLocalCache(constDefine.PROJECT_ID)
    if (id) {
      selectedProjectId.value = id
    }
  } catch (error) {
    console.error('加载项目配置失败:', error)
  }
})

// ┌────────────────────────────────────────────────────────────────────────────────────┐
//                                    "卡片选择处理"                                      
// └────────────────────────────────────────────────────────────────────────────────────┘
const selectProject = (projectId: number) => {
  selectedProjectId.value = projectId
  loginStore.SetProjectId(projectId)
}
</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.LoginView { 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; // 添加背景色使效果更明显
}

.loginPanel {
  width: 600px;
  height: 600px;
  background-color: white; // 添加背景色
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); // 添加阴影效果
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px; // 固定高度，可根据需要调整
}

.projects {
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); // 添加阴影效果
}

.box-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.project-card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(219, 219, 241, 0.137);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &.selected,
  &:hover {
    background-color: #409eff;
    color: white;

    .project-name {
      color: white;
    }
  }

  .project-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 20px;
    object-fit: contain;
  }

  .project-name {
    color: #333333;
    font-size: 18px;
  }
}

.divider {
  margin: 0 100px;
  width: 1px;
  height: 500px;
  background-color: #cccccc;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1);
}
</style>
