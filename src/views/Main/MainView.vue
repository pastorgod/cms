<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="main">
        <el-container class=".main-container">
            <el-aside :width="(isCollapse ? 60 : 300).toString() + 'px'">
                <div :class="isCollapse ? 'logo-collapse' : 'logo-expand'" @click="changeCollapse">
                    <div>
                        <img src="@img/logo.png" width="48" height="48" alt="牧" />
                    </div>
                    <div class="logo-title" :style="{ width: isCollapse ? '0px' : 'auto' }">
                        <div>{{ isCollapse ? '' : '牧神·工具集合' }}</div>
                    </div>
                </div>
                <div>
                    <el-menu default-active="10001" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
                        <template v-for="item in menuList" :key="item.id">
                            <el-sub-menu :index="item.id.toString()">
                                <!-- 菜单标题 -->
                                <template #title>
                                    <el-icon><component :is="item.icon" /></el-icon>
                                    <span>{{ item.title }}</span>
                                </template>

                                <template v-for="child in item.children" :key="child.id">
                                    <el-menu-item :index="child.id.toString()">
                                        <!-- <el-icon><icon-menu /></el-icon> -->
                                        <template #title>
                                            {{ child.title }}
                                        </template>
                                    </el-menu-item>
                                </template>
                            </el-sub-menu>
                        </template>
                    </el-menu>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <HeadView />
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
//pinia
import type { IMenu } from '@/define/interface'
import useLoginStore from '@/stores/loginStore'
import HeadView from '@/views/Main/HeadView.vue'
const loginStore = useLoginStore()

import { resolveComponent, ref, onMounted } from 'vue'

const isCollapse = ref(false)

function handleOpen(key: string, keyPath: string[]) {}
function handleClose(key: string, keyPath: string[]) {}

function changeCollapse() {
    isCollapse.value = !isCollapse.value
}

const menuList = ref<IMenu[]>([])

onMounted(async () => {
    try {
        const response = await fetch('/src/assets/config/menu.json')
        menuList.value = await response.json()
    } catch (error) {
        console.error('加载菜单配置失败:', error)
    }
})

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
.el-menu {
    border-right: none;
    user-select: none;
}

.el-header {
    --el-header-padding: 0px;
    --el-header-height: 100px;
}

:deep(.el-sub-menu__title) {
    font-size: 16px;
    color: #fff;
    background-color: #000;
}

:deep(.el-sub-menu__title:hover) {
    background-color: #3772f3;
    color: #fff;
}

:deep(.el-menu-item) {
    background-color: #001529;
}

:deep(.el-menu-item:hover) {
    background-color: #3772f3;
}

:deep(.el-menu-item.is-active) {
    background-color: #3772f3;
    border-left: 5px solid #2bf74d;
}

.logo-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;
    transition: width 0.2s ease;
}
.logo-title:hover {
    color: aquamarine;
}

.main {
    height: 100%;

    .el-container {
        height: 100%;

        background-color: #001529;

        .logo-collapse {
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1f8ff8;
            cursor:pointer;
        }

        .logo-expand {
            display: flex;
            align-items: center;
            height: 80px;
            background-color: #1f8ff8;
            cursor:pointer;
        }
        .logo-expand > div:first-child {
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 2;
        }
        .logo-expand > div:last-child {
            margin-right: 10px;
            flex: 5;
        }

        .el-aside {
            transition: width 0.5s ease;
        }

        .el-header {
            background-color: rgb(255, 255, 255);
        }

        .el-main {
            background-color: rgb(255, 255, 255);
        }
    }
}
</style>
