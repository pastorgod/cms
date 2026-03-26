<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMPanel">
        <div class="GMPanelHead"><GMPanelHead /></div>
        <div class="GMPanelBody">
            <div class="GMTreePanel"><GMTreePanel /></div>
            <div class="GMRecent"><GMRecent /></div>
        </div>

    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">

import GMPanelHead from '@/views/Main/GM/GMPanelHead.vue'
import GMTreePanel from '@/views/Main/GM/GMTreePanel.vue'
import GMRecent from '@/views/Main/GM/GMRecent.vue'

</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMPanel {
    width: 100%;
    height: 100%;
    background-color: #7c6125ea;
    // 新增：启用 Flex 布局，方向为垂直列，使头部固定，身体自适应
    display: flex;
    flex-direction: column;
}

.GMPanelBody {
    width: 100%;
    display: flex;
    // 新增：使用 flex: 1 占据剩余空间
    flex: 1;
    flex-direction: row;
}

.GMTreePanel {
    // flex: 2;
    width: 100%;
    height: 100%;
}
.GMRecent {
    // flex: 1;
    width: 100%;
    height: 100%;
}
</style>
