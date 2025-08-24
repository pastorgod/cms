eslint-disable vue/multi-word-component-names
<!-- =============================模板============================ -->
<template>
    <div class="AcountPanel">
        <el-form :model="form" label-width="auto" style="max-width: 600px" :rules="accountRules" status-icon ref="accountFormRef" label-position="left">
            <el-form-item label="帐  号" prop="username">
                <el-input v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
        </el-form>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import {  type FormRules, type FormInstance } from 'element-plus'
import { ref, reactive} from 'vue'

const accountFormRef = ref<FormInstance>()

//绑定表单对象
const form = reactive({
    username: '',
    password: '',
})

const accountRules: FormRules = {
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 1, max: 20, message: '6-20位的字符', trigger: 'blur' },
    ],
    password: [],
}

//执行登录逻辑
function GetUserName(): string {
    if (accountFormRef.value?.validate()) {
        return form.username
    }
    return ''
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
