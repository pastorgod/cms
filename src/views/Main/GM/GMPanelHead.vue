-content<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMPanelHead">

        <!-- 左侧区域 -->
        <div class="layout-left">
            <!-- 服务器基本信息 -->
            <div class="server-panel">
                <div class="server-baseinfo">
                    <div class="title">内网测试服</div>
                    <div class="title">s100001</div>
                </div>
                <div class="server-selector">
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
                </div>
            </div>
        </div>

        <!-- 中间区域 -->
        <div class="layout-middle">
            <!-- 最近链接服务器 -->
            <div class="serverCard">
                <div v-for="(item, index) in stats" :key="item.id" class="card-info">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-value">{{ item.value }}</div>
                    <button class="remove-btn" @click="removeStat(index)">×</button>
                </div>
            </div>
        </div>

        <!-- 右侧区域 -->
        <div class="layout-right">
            <!-- 角色信息 -->
            <div class="role-info">
                <div class="role-info-title">角色ID: 123456789</div>
                <div class="role-info-subtitle">角色名: 测试角色</div>
            </div>
        </div>

    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

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
    { id: 1, title: '外网测试服', value: '100000001' },
    { id: 2, title: '质检41服', value: '100000002' },
    { id: 3, title: '压测服', value: '100000003' },
    { id: 4, title: '沈强服', value: '100000004' },
])

const removeStat = (index: number) => {
    stats.value = stats.value.filter((_, i) => i !== index)
}

</script>

<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMPanelHead {
    width: 100%;
    height: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.2);
    transition: background 0.5s;
    &:hover {
        background-color: #f3f2f2;
    }
}

//服务器面板 (服务器基本信息显示 + 服务器选择器)
.layout-left {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #d2e6f8;
    }

    .server-panel {
        height: 100%;
        width: 80%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        .server-baseinfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 0; // 新增：确保内部文本内容也能换行或缩小

            .title {
                font-size: 18px;
                font-weight: 700;
            }
        }

        .server-selector {
            min-width: 0; // 新增：确保下拉框容器能缩小
            max-width: 200px; // 新增：限制选择器最大宽度，防止其撑开面板
        }
    }

}

.layout-middle {
    flex: 5;
    height: 100%;
    display: flex;
    justify-content: center;
    // background-color: #ebebeb6c;


    //最近服务器选择
    .serverCard {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap; // 修改：强制子元素在一行显示
        gap: 5px;
        width: 100%;
        overflow-x: auto; // 可选：如果内容过多超出屏幕，允许横向滚动
        padding: 5px 0px 8px 5px;
        border-left: 1px solid #9696962c;
        border-right: 1px solid #9696962c;

        .info-title {
            font-size: 16px;
            font-weight: 700;
            margin-top: 3px;
        }

        .info-value {
            font-size: 12px;
            opacity: 0.88;
        }
    }
}

.layout-right {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    transition: background 0.5s;
    &:hover {
        background-color: #d2e6f8;
    }

    //角色信息
    .role-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .role-info-title {
            font-size: 28px;
            color: #2b27fa
        }

        .role-info-subtitle {
            font-size: 24px;
            color: #2b27fa;
        }
    }
}



.card-info {
    // 修改：移除固定的百分比计算和媒体查询，改为自动均分宽度
    // 使用 flex: 1 让所有子元素在单行内平均分配剩余空间
    flex: 1;
    min-width: 0; // 允许元素缩小到比内容更小，防止溢出
    max-width: 150px;
    background-color: #fffffffd;

    &:hover {
        background-color: #4193fffd;
    }

    border: 1px solid #d0d6dd70;
    border-radius: 2px;
    padding: 2px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    gap:3px;
    transition: background 0.5s;

    .remove-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 20px;
        height: 20px;
        border: none;
        background: rgba(224, 224, 224, 0.9);
        color: #726f6f;
        font-size: 16px;
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
