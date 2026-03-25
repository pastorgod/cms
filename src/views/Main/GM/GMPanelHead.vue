<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMPanelHead">
        <el-row :gutter="16">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="4">
                <div class="curentServer">
                    <el-row :guttter="16">
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div>
                                <div class="title">内网测试服</div>
                                <div class="title">s100001</div>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <el-dropdown>
                                <el-button type="primary">
                                    选择服务器<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                </el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-for="(item, index) in dropdownItems" :key="index">
                                            {{ item.label }}
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="20">
                <div class="serverCard">
                    <el-row :gutter="10">
                        <el-col v-for="(item, index) in stats" :key="item.id" :xs="12" :sm="8" :md="6" :lg="4" :xl="3">
                            <div class="card-info">
                                <div class="info-title">{{ item.title }}</div>
                                <div class="info-value">{{ item.value }}</div>
                                <button class="remove-btn" @click="removeStat(index)">×</button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { ref } from 'vue'

const dropdownItems = ref([
    { label: 'Action 1' },
    { label: 'Action 2' },
    { label: 'Action 3' },
    { label: 'Action 4' },
    { label: 'Action 5' },
    { label: 'Action 6' },
    { label: 'Action 7' },
    { label: 'Action 8' },
    { label: 'Action 9' },
])

const stats = ref([
    { id: 1, title: '统计 1', value: '1' },
    { id: 2, title: '统计 2', value: '2' },
    { id: 3, title: '统计 3', value: '3' },
    { id: 4, title: '统计 4', value: '4' },
    { id: 5, title: '统计 5', value: '5' },
    { id: 6, title: '统计 6', value: '6' },
    { id: 7, title: '统计 7', value: '7' },
])

const removeStat = (index: number) => {
    stats.value = stats.value.filter((_, i) => i !== index)
}

import { ArrowDown } from '@element-plus/icons-vue'


</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMPanelHead {
    width: 100%;
    height: auto;
    padding: 16px;
    box-sizing: border-box;
    background-color: rgba(0, 255, 255, 0);
}

.curentServer {
    // width: 100%;
    height: 80%;
    // padding: 20px;
    background-color: rgb(255, 255, 255);
    // display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.serverCard {
    padding: 20px;
    // width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 18px;
    font-weight: 700;
}

.subtitle {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.85);
}

.blue-area-body {}

.card-info {
    background-color: #4b98f1b7; // 设置背景颜色为半透明的蓝色 (#4b98f1 带透明度 b7)，营造卡片底色
    border: 1px solid rgba(255, 255, 255, 0.3); // 设置 1px 宽的实线边框，颜色为半透明白色，增加卡片边缘的层次感
    border-radius: 8px; // 设置边框圆角为 8px，使卡片角落更圆润柔和
    padding: 10px; // 设置内边距为 10px，确保内容与卡片边缘保持适当距离
    display: flex; // 启用 Flexbox 布局模型，便于内部元素的排列
    flex-direction: column; // 设置主轴方向为垂直方向（从上到下），使子元素纵向排列
    justify-content: center; // 设置主轴对齐方式为居中，使内容在垂直方向上居中显示
    align-items: flex-start; // 设置交叉轴对齐方式为起始端（左对齐），使内容在水平方向上靠左排列
    position: relative; // 设置定位模式为相对定位，作为绝对定位子元素（如关闭按钮）的定位参考父级
}

.remove-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 16px;
    line-height: 1;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.remove-btn:hover {
    background: rgba(255, 255, 255, 0.4);
}

.info-title {
    font-size: 12px;
    opacity: 0.88;
}

.info-value {
    font-size: 21px;
    font-weight: 700;
    margin-top: 3px;
}

.el-dropdown+.el-dropdown {
    margin-left: 15px;
}

.el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>
