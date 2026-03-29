<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMTreePanel">
        <div class="MenuTree">
            <el-menu :default-active="menuList[0]?.id.toString()" class="full-height-menu" @select="handleSelect">
                <template v-for="item in menuList" :key="item.id">
                    <el-menu-item :index="item.id.toString()">
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
    </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">
import type { IGMmenu } from '@/define/interface';
import { onMounted, ref, inject } from 'vue';

// 从父组件注入更新方法
const updateCurrentItem = inject<(item: IGMmenu) => void>('updateCurrentItem')

//点击条目，跳转界面
function clickItemHandle(item: IGMmenu) {
    if (updateCurrentItem) {
        updateCurrentItem(item)
    } else {
        console.warn('未找到 updateCurrentItem 方法，请检查 GMPanel 是否正确 provide')
    }
}

// 处理菜单选择事件
function handleSelect(index: string) {
    const selectedItem = menuList.value.find(item => item.id.toString() === index);
    if (selectedItem) {
        clickItemHandle(selectedItem);
    }
}

const menuList = ref<IGMmenu[]>([])
onMounted(async () => {

     try {
        const response = await fetch('/src/assets/config/gm_list.json')
        menuList.value = await response.json()

        console.log('加载完菜单数据 %o',menuList.value)
        
    } catch (error) {
        console.error('加载菜单配置失败:', error)
    }

})

// const menuList = [
//     {
//         id: 1001,
//         title: '暗能',
//         initial: 'A',
//         icon: 'Setting',
//         list:[
//             {
//                 id: 1,
//                 type:1,
//                 desc:"暗能描述 1",
//                 param:[
//                     {
//                         key:"参数 1",
//                         select:"select1",
//                     },
//                     {
//                         key:"参数 1",
//                         select:"select1",
//                     },
//                 ]
//             },
//             {
//                 id: 2,
//                 type:1,
//                 param:[
//                     {
//                         key:"参数 1",
//                         select:"select1",
//                     }
//                 ]
//             },
//             {
//                 id: 2,
//                 type:1,
//                 desc:"这一条只有描述",
//             },
//         ]
//     },
//     {
//         id: 2001,
//         title: '赛季',
//         initial: 'S',
//         icon: 'Setting',
//     },
//     {
//         id: 2002,
//         title: '神通',
//         initial: 'S',
//         icon: 'Setting',
//     },
//     {
//         id: 3001,
//         title: '客服',
//         initial: 'K',
//         icon: 'Setting',
//     },
//     {
//         id: 3002,
//         title: '卡牌',
//         initial: 'K',
//         icon: 'Setting',
//     },
//     {
//         id: 4001,
//         title: '副本',
//         initial: 'F',
//         icon: 'Setting',
//     },
//     {
//         id: 5001,
//         title: '组队',
//         initial: 'Z',
//         icon: 'Setting',
//     },
// ]



//方法委托类 Action-Action6
//import { type Action } from '@/config/delegate'

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMTreePanel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-menu {
        height: 100%;
        border-right: none;
        background-color: rgba(231, 255, 122, 0.747);
    }

    .el-menu-item {
        color: #0034dd;
        background-color: #deff65;
        border-bottom: 1px solid #060058;
    }

    .el-menu-item.is-active {
        color: #fff;
        background-color: #3772f3;
        border-left: 5px solid #2bf74d;
    }

    .el-menu-item:hover {
        background-color: rgb(55, 114, 243);
        padding-left: 30px;
         color: #fff;
    }

    .el-menu-item.is-active {
        background-color: #3772f3;
        border-left: 5px solid #2bf74d;
        padding-left: 30px;
    }
}

.MenuTree {
    width: 300px;
    height: 100%;
}

.ContentPanel {
    background-color: blueviolet;
    height: 100%;
    width: 100%;
}
</style>
