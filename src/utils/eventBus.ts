import mitt from 'mitt'
import type { WebSocketError, WebSocketMessage } from '@/define/websocket'

// 定义 WebSocket 事件类型枚举
export enum WsEventType {
  ERROR = 'ws:error',
  MESSAGE = 'ws:message'
}

// 定义事件类型映射
type Events = {
  [WsEventType.ERROR]: WebSocketError
  [WsEventType.MESSAGE]: WebSocketMessage // 修正：消息类型应为 WebSocketMessage 而不是 WebSocketError
}

// 创建 emitter 实例
const emitter = mitt<Events>()

export default emitter