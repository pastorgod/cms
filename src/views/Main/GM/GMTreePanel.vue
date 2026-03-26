<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMTreePanel">

        <div class="MenuTree">
            <el-menu default-active="10001" class="full-height-menu">
                <template v-for="item in menuList" :key="item.id">
                    <el-menu-item :index="item.id.toString()" @click="clickItemHandle(item)">
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <template #title>
                            {{ item.title }}
                        </template>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="ContentPanel">
            dd
        </div>
    </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">

//点击条目，跳转界面
function clickItemHandle(item) {
    console.log(item.title)
    // router.push(item.url.toLowerCase())
}

const menuList = [
    {
        id: 1001,
        title: '暗能',
        initial: 'A',
        icon: 'Setting',
    },
    {
        id: 2001,
        title: '赛季',
        initial: 'S',
        icon: 'Setting',
    },
    {
        id: 2002,
        title: '神通',
        initial: 'S',
        icon: 'Setting',
    },
    {
        id: 3001,
        title: '客服',
        initial: 'K',
        icon: 'Setting',
    },
    {
        id: 3002,
        title: '卡牌',
        initial: 'K',
        icon: 'Setting',
    },
    {
        id: 4001,
        title: '副本',
        initial: 'F',
        icon: 'Setting',
    },
    {
        id: 5001,
        title: '组队',
        initial: 'Z',
        icon: 'Setting',
    },
]



//方法委托类Action-Action6
//import { type Action } from '@/config/delegate'

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMTreePanel {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #def31c;
}

.MenuTree {
    width: 300px;
    height: 100%;
}

// 修改：使用 :deep() 伪类并将选择器限定在 .GMTreePanel 下，防止样式污染全局或其他组件
.GMTreePanel :deep(.el-menu) {
    height: 100%;
    border-right: none;
    background-color: rgba(231, 255, 122, 0.747);
}

:deep(.el-menu-item) {
    background-color: #deff65;
    border-bottom: 1px solid #060058;
}

.ContentPanel {
    background-color: blueviolet;
    height: 100%;
    width: 100%;
}
</style>
