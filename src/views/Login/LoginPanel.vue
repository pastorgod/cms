<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="LoginPanel">
    <div>
      <el-tabs type="border-card" stretch v-model="activeName">

        <!-- 账号登录面板 -->
        <el-tab-pane name="account">
          <template #label>
            <TabSlot label="账号登录" icon="UserFilled" :size="16" />
          </template>
          <AcountPanel />
        </el-tab-pane>

        <!-- 二维码登录面板 -->
        <el-tab-pane name="qrcode" class="qrcode-panel">
          <template #label>
            <TabSlot label="二维码登录" icon="Platform" :size="16" />
          </template>
          <img  src="@img/qrcode.png" alt="二维码" />
        </el-tab-pane>

      </el-tabs>
    </div>

    <div class="options">
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
import AcountPanel from './AcountPanel.vue'
import TabSlot from './TabSlot.vue'

const activeName = ref('account')

let isSavePassword = ref(false)

function loginHanle() {}
</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .options {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    --el-button-size: 50px;
  }
  .qrcode-panel{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
