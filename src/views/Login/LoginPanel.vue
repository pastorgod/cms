<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="LoginPanel">
    <div class="tabs">
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <div class="tabs-child">
              <span class="tabs-icon">
                <el-icon size="16"><UserFilled /></el-icon>
              </span>
              <span>账号登录</span>
            </div>
          </template>

          <div></div>
          <div></div>
        </el-tab-pane>
        <el-tab-pane label="扫码登录"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox id="" v-model="isSavePassword" label="记住密码" size="large" />
      <el-link href="#" type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" size="large" @click="loginHanle">立即登录</el-button>

    <div class="loginBtn">立即登录</div>
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

function loginHanle() {}
</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .tabs{
    .tabs-child{
      width: 70%;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;      /* 垂直居中（可选） */
    }
    .tabs-child span:nth-child(1){
        display: flex;
        flex:0.3;
      }
      .tabs-child span:nth-child(2){
        display: flex;
        flex:1;
      }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
  .controls {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    --el-button-size: 50px;
  }

  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background-color:#0bd30b;
}
</style>
