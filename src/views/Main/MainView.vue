<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="main">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { GetLocalBoolean, RemoveLocalCache, SetLocalCache, router, ref, watch, ElMessage, constDefine, IsNullOrEmpty, loginStore } from '@/utils/Framework'

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
.main {
    height: 100%;
}
// .main-container{
//     height: 100%;
//     background-color: rgb(25, 134, 230);

//     //插件自己带样式了
//     .el-aside{
//         background-color: rgb(210, 233, 106);
//     }

//     .el-header{
//         background-color: rgb(61, 226, 88);
//     }

//     .el-main{
//         background-color: rgb(226, 50, 50);
//     }
// }
</style>
