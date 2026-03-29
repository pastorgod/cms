<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMPanel">
        <div class="GMPanelHead">
            <GMPanelHead />
        </div>
        <div class="GMPanelBody">
            <div class="GMTreePanel">
                <GMTreePanel />
            </div>
            <div class="GMItemList">
                <GMItemList />
            </div>
            <div class="GMRecent">
                <GMRecent />
            </div>
        </div>
        <div class="GMAnNeng">
            <router-view />
        </div>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import GMPanelHead from '@/views/Main/GM/GMPanelHead.vue'
import GMTreePanel from '@/views/Main/GM/GMTreePanel.vue'
import GMRecent from '@/views/Main/GM/GMRecent.vue'
import GMItemList from '@/views/Main/GM/GMItemList.vue'
import { ref, provide } from 'vue'
import type { IGMmenu } from '@/define/interface'

// 定义响应式变量存储当前选中的菜单项
const currentItem = ref<IGMmenu | null>(null)

// 提供数据和更新方法给子组件
// 子组件可以通过 inject 获取 currentMenuItem 和 updateCurrentItem
provide('currentMenuItem', currentItem)

provide('updateCurrentItem', (item: IGMmenu) => {
    currentItem.value = item
    console.log('GMPanel: 菜单项已更新', item)
})

</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMPanel {
    height: 80px;
    // height: 100%;
    background-color: #ffffff;
    // 新增：启用 Flex 布局，方向为垂直列，使头部固定，身体自适应
    display: flex;
    flex-direction: column;
}


.GMPanelBody {
    padding-top: 30px;
    display: flex;

    .GMTreePanel {
        flex: 1;
    }

    .GMItemList {
        flex: 5;
    }

    .GMRecent {
        flex: 1;
    }

    .GMAnNeng {
        flex: 1;
    }
}
</style>
