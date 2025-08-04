<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="TabSlot">
    <span class="tabs-icon">
      <el-icon :size="size">
        <!-- <component :is="icon" /> -->
        <!--  这里是一个动态组件，is绑定已经注册的组件名也是可以的，习惯起见,自己获取组件再传进来吧 -->
        <component :is="resolveComponent(icon)" />
      </el-icon>
    </span>
    <span>{{ label }}</span>
  </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { ref, computed, watch, onMounted, resolveComponent } from 'vue'

//定义参数
defineProps<{
  icon: string
  label: string
  size: number
}>()

</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.TabSlot {
  width: 70%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中（可选） */
}
.TabSlot span:nth-child(1) {
  display: flex;
  flex: 0.3;
}
.TabSlot span:nth-child(2) {
  display: flex;
  flex: 1;
}
</style>
