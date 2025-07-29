<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="Main">
    <h2>{{ loginStore.username}} -- {{ loginStore.displayUserName }}</h2>
    <input v-model="loginStore.username" />
    <button @click="changUseName">我的按钮</button>
  </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">

import useLoginStore from '@/stores/loginStore';
const loginStore = useLoginStore();

loginStore.setUsername('admin');
function changUseName() {
  loginStore.setUsername('按钮');
}


</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.Main {
  color: red;
}
</style>
