<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
   <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>菜单一</el-breadcrumb-item>
    <el-breadcrumb-item>GM面板</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

import { ArrowRight } from '@element-plus/icons-vue'

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.HeadCrumb {
//   width: 100%;
//   height: 100%;
  background-color:#87ceeb;
}
</style>
