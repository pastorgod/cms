<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>

   <div class = "LoginView">
      <span class="projects">
        <div class="box-container">
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
          <a class="box-item" href="#"></a>
        </div>
      </span>
      <span class="line"></span>
      <span class="loginPanel"><LoginPanel /></span>
   </div>
</template>


<!-- #region 代码 -->
<!-- =============================代码============================ -->
<script setup lang="ts">


import LoginPanel from '@/views/Login/LoginPanel.vue'

//传入属性参数
//import { type Action } from '@/config/delegate'

const props = defineProps<{
  //foo: string
  //func: Aciton
}>()

//子控件发出事件
const emit = defineEmits<{
  //change: [id: number] // 具名元组语法
}>()

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

.box-item {
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 109, 0.137);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.line {
  margin: 0 100px; // 调整间距
  width: 1px;
  height: 500px;
  background-color: #cccccccc;
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.1); // 为线条添加轻微阴影
}


</style>
