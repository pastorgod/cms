<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="HeadInfo">
        <div class="operation">
            <span>
                <el-icon size="18px"> <Location /> </el-icon>
            </span>
            <span>
                <el-icon size="18px"> <ChatDotRound /> </el-icon>
            </span>
            <span>
                <span class="dot"></span>
                <el-icon size="18px"> <Search /> </el-icon>
            </span>
        </div>
        <div>
            <el-dropdown>
                <span class="user-info">
                    <el-avatar :size="30" scr="https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg" />
                    <span class="name">pastorgod</span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon>
                                <InfoFilled />
                            </el-icon>
                            <span>退出登录</span>
                        </el-dropdown-item>
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item divided>我的收藏</el-dropdown-item>
                        <el-dropdown-item>我的关注</el-dropdown-item>
                        <el-dropdown-item>我的设置</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
//方法委托类Action-Action6
//import { type Action } from '@/config/delegate'

//定义参数
const props = defineProps<{
    //foo: string
    //func: Aciton
}>()

//定义事件
const emit = defineEmits<{
    //change: [id: number] // 具名元组语法
}>()
</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>

/* 移除 el-dropdown 触发器的黑色边框 */
// :deep(.el-dropdown__trigger:focus-visible) {
//   outline: none;
// }


// /* 如果需要移除下拉菜单项的边框 */
// :deep(.el-dropdown-menu__item:focus-visible) {
//   outline: none;
// }

.operation {
    display: inline-flex;
    margin-right: 20px;
    span {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        margin: 2px;
        &:hover {
            // background: #f2f2f2;
            color:blue;
            transform: scale(1.1, 1.1);
        }
    }

    .dot {
        position: absolute;
        top: 3px;
        right: 3px;
        z-index: 1;
        width: 6px;
        height: 6px;
        background: red;
        border-radius: 100%;
    }
}

.HeadInfo {
    width: 100%; 
    height: 100%;
    display: inline-flex;
    align-items: center;
}

.user-info{
    display: flex;
    align-items: center;
    .name{
        margin-left: 10px;
    }
}
:global(.el-dropdown-menu__item) {
        line-height: 66px !important;
        padding: 6px 22px; 
    }
</style>
