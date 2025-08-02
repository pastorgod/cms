<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>

  <div class = "LoginPanel">
    <div class="tabs"></div>
    <div class="controls">
      <el-checkbox v-model="isSavePassword" label="记住密码" size="large" />
      <el-link href="#" type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="loginHanle">立即登录</el-button>

    <!-- <div class="loginBtn">立即登录</div> -->
  </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

//#region 引入模块
import { ref, computed, watch, onMounted } from 'vue'
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

let isSavePassword = ref(false)

function loginHanle()
{

}

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    .text{
      margin-left: 5px;
    }
  }
  .controls{
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn{
    margin-top: 10px;
    width: 100%;
  }

  // display: flex;
  // align-items: center;
  // justify-content: center;
  background-color:#0bd30b;
}
</style>
