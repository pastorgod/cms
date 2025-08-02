<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
   <div class = "MainView">
       <h2>MainView</h2>
   </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

//方法委托类Action-Action6
//import { type Action } from '@/config/delegate'

//定义参数
const props = defineProps<{
  //foo: string
  //func: Aciton
}>()

//定义事件
const emit = defineEmits<{
  //change: [id: number] // 具名元组语法
}>()

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.MainView {
  width: 100%;
  height: 100%;
  background-color:#cae9f5;
}
</style>
