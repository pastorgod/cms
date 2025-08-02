<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
   <div class = "home">
       <h2>home</h2>
   </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

//传入属性参数
const props = defineProps<{
  //foo: string
  //bar?: number
}>()

//子控件发出事件
const emit = defineEmits<{
  //change: [id: number] // 具名元组语法
}>()

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.home {
  color:red;
}
</style>
