<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="HeadView">
        <div class="menu-icon">
            <el-icon size="28px">
                <Fold></Fold>
            </el-icon>
        </div>
        <div class="content">
            <div class="breadcrumb">面包屑</div>
            <div class="info">
                <HeadInfo/>
            </div>
        </div>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import HeadInfo from '@/views/Main/c-comps/HeadInfo.vue'
</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.HeadView {
    height: 80%;
    // background-color: #87ceeb;

    display: flex;
    align-items: center;
    flex: 1;

    box-shadow: 0 4px 12px rgba(0, 42, 133, 0.15); // 添加阴影效果

    .menu-icon {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .content{
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;

        .info{
            width: 300px;
            height: 100%;
        }
    }
}

.HeadView:hover{
    box-shadow: 0 8px 12px rgba(0, 42, 133, 0.2); // 添加阴影效果
}
</style>
