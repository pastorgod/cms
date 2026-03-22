<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
   <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

import { ArrowRight } from '@element-plus/icons-vue'

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
.HeadCrumb {
  width: 100%;
  height: 100%;
  background-color:#87ceeb;
}
</style>
