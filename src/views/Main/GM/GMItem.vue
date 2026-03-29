<!-- eslint-disable vue/multi-word-component-names -->
<!-- =============================模板============================ -->
<template>
    <div class="GMItem">
        <div class="gm_item_operation">
            <div class="gm_item_desc" v-if="showDesc">{{ showDesc }}</div>
            <div class="gm_item_input" v-if="showSubmit">
                <template v-for="(item, index) in dataList" :key="index">
                    <div class="gm_item_wrapper" v-if="item.type === 1">
                        <el-input :placeholder="item.placeholder"></el-input>
                        <div class="gm_item_select-btn" @click="openDialog" v-show="!IsNullOrEmpty(item.selecter)">选</div>
                    </div>
                </template>
            </div>
        </div>

        <div class="gm_item_button" v-if="showSubmit">
            <el-button type="primary" class="submit-btn">提交</el-button>
        </div>

        <el-dialog v-model="dialogVisible" title="选择项" width="30%">
            <span>这里是模态窗内容，您可以在此进行选择操作。</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="closeDialog">取消</el-button>
                    <el-button type="primary" @click="closeDialog">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<!-- =============================代码============================ -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IGMInputItem } from '@/define/interface'
import { IsNullOrEmpty } from '@/utils/stringUtils';

//定义参数
const props = defineProps<{
    dataList: IGMInputItem[],
}>()

// 修改为计算属性：遍历 dataList，如果有 type == 0 的对象，返回其 desc 字段，否则返回 false
const showDesc = computed(() => {
    if (!props.dataList) return false;
    const targetItem = props.dataList.find(item => item.type === 0);
    return targetItem ? targetItem.desc : false;
});

///有一个大于 0 的，就显示提交按钮
const showSubmit = computed(() => {
    return props.dataList.some(item => item.type > 0);
})

const dialogVisible = ref(false);

const openDialog = () => {
    dialogVisible.value = true;
};

const closeDialog = () => {
    dialogVisible.value = false;
};


</script>


<!-- =============================样式============================ -->
<style lang="less" scoped>
.GMItem {
    width: 100%;
    // height: 100%;
    min-height: 50px;
    padding: 10px;
    box-sizing: border-box; // 确保 padding 计入总宽度

    display: flex;
    align-items: center;
    gap: 5px;

    box-shadow: -4px 0px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;

    border-right: 2px solid #b4b4b4;
}

.gm_item_operation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    width: 100%;
}

.gm_item_input {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px 10px;
    padding-top: 5px;
    box-sizing: border-box;
    align-items: start;

    >.gm_item_wrapper {
        margin-bottom: 8px;
        min-width: 180px;
        display: flex;
        align-items: center;
        gap: 2px;
    }
}

.gm_item_button {
    background-color: yellowgreen;
    flex-shrink: 0;
    display: flex;
    align-self: stretch; // 显式确保拉伸

    .submit-btn {
        height: auto; /* 默认值，可移除 */
        flex: 1;
        white-space: nowrap;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.gm_item_select-btn {
    height: 100%; // 修改为 100% 以自适应父容器高度
    background-color: #409EFF;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    transition: background-color 0.2s;

    width: 50px;
    flex-shrink: 0;

    &:hover {
        background-color: #66b1ff;
    }

    &:active {
        background-color: #3a8ee6;
    }
}
</style>
