<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
   <div class = "LoginView">
      <LoginPanel />
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
  // background-color:#87ceeb;
}
</style>
