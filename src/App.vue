<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="App">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
  </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts"></script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.App {
  color: red;
}
</style>
