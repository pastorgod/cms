<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
  <div class="AcountPanel">
    <el-form :model="form" label-width="auto" style="max-width: 600px" :rules="rules" ref="formRef">
      <el-form-item label="帐  号" prop="accountName">
        <el-input v-model="form.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密  码" prop="accountPassword">
        <el-input v-model="form.password" show-password placeholder="******" />
      </el-form-item>
    </el-form>
  </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, resolveComponent } from 'vue'
import { type FormRules, type FormInstance } from 'element-plus'
//方法委托类Action-Action6
//import { type Action } from '@/config/delegate'

//定义参数
const props = defineProps<{
  //foo: string
  //func: Aciton
}>()

const state = reactive({
  //foo: props.foo,
  //func: props.func,
})

//定义事件
const emit = defineEmits<{
  //change: [id: number] // 具名元组语法
}>()

const formRef = ref<FormInstance>()

//绑定表单对象
const form = reactive({
  username: '',
  password: '',
})

const rules: FormRules = {
  accountName: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 6, max: 20, message: '6-20位的字符', trigger: 'change' },
  ],
  accountPassword: [],
}

//执行登录逻辑
function GetUserName():string {
  formRef.value
  if(formRef.value?.validate()){
    return form.username;
  }
  return ""
}

defineExpose({
  GetUserName,
})


</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.AcountPanel {
  width: 100%;
  height: 100%;
  // background-color: #87ceeb;
}
</style>
