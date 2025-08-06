<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="App">
    <div class="pos-notice">
      {{ x }},{{ y }}
    </div>
    <router-view></router-view>
  </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

const update = e => {
  x.value = e.pageX
  y.value = e.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.App {
  width: 100vw;
  height: 100vh;
  // background-color: #87ceeb;
}

.pos-notice{
  position: fixed;
  top: 0px;              /* 距离顶部 20px */
  right: 0px;            /* 距离右侧 20px */
  width: 80px;            //如果 div 没有显式设置 width 或 height，它的尺寸会由 内容（content） 自动撑开,会显示背景色
  height: 25px;
  border-radius: 6px;
  // padding: 0px;         /* 添加内边距 */
  // margin: 0px;         /* 添加外边距 */
  border: 1px solid #3700ff;
  background-color: #00000000;
  color: rgb(0, 4, 255);

  text-align: center;

  //右上对齐
  // display: flex;
  // justify-content: flex-end;  /* 水平右对齐 */
  // align-items: flex-start;    /*垂直顶部对齐*/
  z-index: 9999;              /* 确保显示在最上层 */
  font-family: console;
}
</style>
