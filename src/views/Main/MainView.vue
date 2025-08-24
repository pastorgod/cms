<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="main">
        <el-container class=".main-container">
            <el-aside :width="(isCollapse ? 60 : 300).toString() + 'px'">
                <div class="logo-expand" :class="{ 'logo-collapse': isCollapse }" @click="clickCollapseHandle">
                    <div>
                        <img src="@img/logo.png" width="48" height="48" alt="牧" />
                    </div>
                    <div class="logo-title" :style="{ width: isCollapse ? '0px' : 'auto' }">
                        <div>{{ isCollapse ? '' : '牧神·工具集合' }}</div>
                    </div>
                </div>
                <div>
                    <el-menu default-active="10001" :collapse="isCollapse">
                        <template v-for="item in menuList" :key="item.id">
                            <el-sub-menu :index="item.id.toString()">
                                <!-- 菜单标题 -->
                                <template #title>
                                    <el-icon><component :is="item.icon" /></el-icon>
                                    <span>{{ item.title }}</span>
                                </template>

                                <template v-for="child in item.children" :key="child.id">
                                    <el-menu-item :index="child.id.toString()" @click="clickItemHandle(child)">
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
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
//pinia
import type { IMenu } from '@/define/interface'
import HeadView from '@/views/Main/HeadView.vue'
import router from '@/router/router'
import { ref, onMounted } from 'vue'
import { createMainRouteNode } from '@/utils/routerUtils'

const isCollapse = ref(false)

//点击折叠按钮
function clickCollapseHandle() {
    isCollapse.value = !isCollapse.value
}
//点击条目，跳转界面
function clickItemHandle(child) {
    router.push(child.url)
}

//菜单数据
const menuList = ref<IMenu[]>([])
onMounted(async () => {
    try {
        const response = await fetch('/src/assets/config/main_menu.json')
        menuList.value = await response.json()
        
        //动态添加路由,通过配置注册路由,不用每次往 rounter里面加了
        for (const menu of menuList.value) {
            for (const child of menu.children) {
                router.addRoute('main',createMainRouteNode(child.url) )
            }
        }
    } catch (error) {
        console.error('加载菜单配置失败:', error)
    }
})
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
            cursor: pointer;
        }

        .logo-expand {
            display: flex;
            align-items: center;
            height: 80px;
            background-color: #1f8ff8;
            cursor: pointer;
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
