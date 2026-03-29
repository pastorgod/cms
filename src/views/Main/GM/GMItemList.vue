<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMItemPanel">
        <div class="GMItemContent">
            <!-- 如果没有选中项，显示提示 -->
            <div v-if="!currentItem" class="empty-tip">
                请在左侧选择一个菜单项
            </div>
            <!-- 根据选中的 item 渲染列表，这里假设 item.list 存在且为数组 -->
            <template v-else>
                <div v-if="currentItem.list && currentItem.list.length > 0">
                    <GMItem v-for="(subItem, index) in currentItem.list"  :key="index"  :dataList="subItem.inputList"/>
                </div>
                <div v-else class="empty-tip">
                    当前菜单项 ({{ currentItem.title }}) 下暂无列表数据
                </div>
            </template>
        </div>
    </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">
import GMItem from './GMItem.vue';
import { inject, ref, watch } from 'vue';
import type { IGMmenu } from '@/define/interface';

// 从父组件注入当前的菜单项数据
const currentItem = inject<ReturnType<typeof ref<IGMmenu | null>>>('currentMenuItem')

// 可选：监听变化执行额外逻辑
if (currentItem) {
    watch(currentItem, (newVal) => {
        console.log('GMItemList 监听到菜单项变化:', newVal)
    })
}

</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMItemPanel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .GMItemContent {
        width: 95%;
        
        .empty-tip {
            text-align: center;
            color: #999;
            padding: 20px;
            font-size: 14px;
        }
    }
}
</style>
