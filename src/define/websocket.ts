// types/websocket.ts

/**
 * WebSocket消息类型
 */
export interface WebSocketMessage {
  type: string
  [key: string]: unknown
}

/**
 * WebSocket配置选项
 */
export interface WebSocketOptions {
  autoConnect?: boolean
  reconnectDelay?: number
  maxReconnectAttempts?: number
  heartbeatInterval?: number
  heartbeatTimeout?: number
  debug?: boolean
}

/**
 * WebSocket状态
 */
export type WebSocketState = 'CONNECTING' | 'OPEN' | 'CLOSING' | 'CLOSED'

/**
 * 监听器回调类型
 */
export type MessageListener = (message: WebSocketMessage) => void

/**
 * WebSocket错误信息
 */
export interface WebSocketError {
  type: 'error' | 'close' | 'timeout'
  event?: Event | CloseEvent
  message?: string
}

