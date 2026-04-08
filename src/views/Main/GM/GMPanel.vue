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

        <!-- WebSocket 错误模态窗 -->
        <div v-if="showErrorModal" class="ws-error-modal">
            <div class="modal-content">
                <h3>WebSocket 连接错误</h3>
                <p>{{ errorMessage }}</p>
                <button @click="closeErrorModal">关闭</button>
            </div>
        </div>
    </div>
</template>

<!-- =============================代码============================ -->
<script setup lang="ts">
import GMPanelHead from '@/views/Main/GM/GMPanelHead.vue'
import GMTreePanel from '@/views/Main/GM/GMTreePanel.vue'
import GMRecent from '@/views/Main/GM/GMRecent.vue'
import GMItemList from '@/views/Main/GM/GMItemList.vue'
import { ref, provide, onMounted, onUnmounted } from 'vue'
import type { IGMmenu } from '@/define/interface'
import emitter, { WsEventType } from '@/utils/eventBus'
import type { WebSocketError,WebSocketMessage } from '@/define/websocket'

// 定义响应式变量存储当前选中的菜单项
const currentItem = ref<IGMmenu | null>(null)

// WebSocket 错误处理相关
const showErrorModal = ref(false)
const errorMessage = ref('')

const handleWsError = (error: WebSocketError) => {
    console.error('GMPanel 收到 WebSocket 错误:', error)
    errorMessage.value = error.message || '未知错误'
    showErrorModal.value = true
}

const handleWsMessage = (message: WebSocketMessage) => {
    console.log('GMPanel 收到 WebSocket 消息:', message)
}

const closeErrorModal = () => {
    showErrorModal.value = false
}

// 提供数据和更新方法给子组件
// 子组件可以通过 inject 获取 currentMenuItem 和 updateCurrentItem
provide('currentMenuItem', currentItem)

provide('updateCurrentItem', (item: IGMmenu) => {
    currentItem.value = item
    console.log('GMPanel: 菜单项已更新', item)
})

// 监听 WebSocket 事件
onMounted(() => {
    emitter.on(WsEventType.ERROR, handleWsError)
    emitter.on(WsEventType.MESSAGE, handleWsMessage)
})

// 移除监听，防止内存泄漏
onUnmounted(() => {
    emitter.off(WsEventType.ERROR, handleWsError)
    emitter.off(WsEventType.MESSAGE, handleWsMessage)
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
    position: relative; /* 为模态窗定位做准备 */
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

/* WebSocket 错误模态窗样式 */
.ws-error-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        min-width: 300px;

        h3 {
            margin-top: 0;
            color: #e74c3c;
        }

        p {
            margin: 15px 0;
            color: #333;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;

            &:hover {
                background-color: #2980b9;
            }
        }
    }
}
</style>
