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
                    <AcountPanel ref="formRef" />
                </el-tab-pane>

                <!-- 二维码登录面板 -->
                <el-tab-pane name="qrcode" class="qrcode-panel">
                    <template #label>
                        <TabSlot label="二维码登录" icon="Platform" :size="16" />
                    </template>
                    <img src="@img/qrcode.png" alt="二维码" />
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="options">
            <el-checkbox id="" v-model="isSaveRecord" label="记住账号和项目" size="large" />
        </div>

        <el-button class="login-btn" type="primary" size="large" @click="loginHanle">立即登录</el-button>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { SetLocalCache,RemoveLocalCache,GetLocalBoolean,} from '@/utils/cacheUtils'
import { ElMessage } from 'element-plus'
import {ref,watch} from 'vue'
import constDefine from '@/define/constDefine'
import {IsNullOrEmpty} from '@/utils/stringUtils'
import {useRouter} from 'vue-router'
import AcountPanel from './AcountPanel.vue'
import TabSlot from './TabSlot.vue'
import useLoginStore from '@/stores/loginStore'

const loginStore = useLoginStore()
const router = useRouter()

// 标签页相关数据
const activeName = ref('account')

// 表单相关数据
const formRef = ref<InstanceType<typeof AcountPanel>>()

// 复选框相关数据
const isSaveRecord = ref(GetLocalBoolean(constDefine.IS_SAVE_RECORD))

// 监听引用值变化
watch(isSaveRecord, (newValue) => {
    SetLocalCache(constDefine.IS_SAVE_RECORD, newValue ? 1 : 0)
})

//点击登录按钮
function loginHanle() {
    
    if (activeName.value === 'qrcode') {
        ElMessage.error('暂不支持这种登录方式')
        return
    }

    const projectId = loginStore.projectId

    if (projectId === undefined || projectId === null || projectId === 0) {
        ElMessage.error('请选择项目先')
        return
    }

    //获取子组件实例
    let username = formRef.value?.GetUserName()
    if (IsNullOrEmpty(username)) {
        ElMessage.error('用户名输入不合法')
        return
    }

    //确认字符串不为空
    username = username as string

    //后续其他界面需要用到，所以内存必须存一份
    loginStore.SetLoginInfo(username, projectId)

    //根据是否保存记录，对本地缓存进行操作
    if (isSaveRecord.value) {
        SetLocalCache(constDefine.USER_NAME, username)
        SetLocalCache(constDefine.PROJECT_ID, projectId)
    } else {
        RemoveLocalCache(constDefine.USER_NAME)
        RemoveLocalCache(constDefine.PROJECT_ID)
    }

    router.push('/main')
}
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

    .qrcode-panel {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
