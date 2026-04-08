// stores/websocket.ts
import { defineStore } from 'pinia'
import emitter, { WsEventType } from '@/utils/eventBus' // 引入事件总线和枚举

import type { 
  WebSocketMessage, 
  WebSocketOptions, 
  WebSocketState, 
  WebSocketError 
} from '@/define/websocket'

interface State {
  socket: WebSocket | null
  state: WebSocketState
  messages: WebSocketMessage[]
  reconnectCount: number
  lastMessageTime: number
  heartbeatTimer: number | null
  reconnectTimer: number | null
}

export const useWebSocketStore = defineStore('websocket', {
  state: (): State => ({
    socket: null,
    state: 'CLOSED',
    messages: [],
    reconnectCount: 0,
    lastMessageTime: Date.now(),
    heartbeatTimer: null,
    reconnectTimer: null
  }),

  getters: {
    isConnected: (state): boolean => state.state === 'OPEN',
    connectionState: (state): WebSocketState => state.state,
    messageCount: (state): number => state.messages.length
  },

  actions: {
    /**
     * 初始化WebSocket连接
     * @param url WebSocket服务器地址
     * @param options 配置选项
     */
    initWebSocket(url: string, options: WebSocketOptions = {}) {
      const {
        maxReconnectAttempts = 5,
        heartbeatInterval = 30000,
        heartbeatTimeout = 60000,
        debug = false
      } = options

      // 如果已有连接，先关闭
      if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
        this.closeWebSocket()
      }

      try {
        this.socket = new WebSocket(url)
        this.state = 'CONNECTING'

        if (debug) {
          console.log('[WebSocket] 正在连接...', url)
        }

        // 连接成功
        this.socket.onopen = () => {
          this.state = 'OPEN'
          this.reconnectCount = 0
          this.lastMessageTime = Date.now()

          if (debug) {
            console.log('[WebSocket] 连接成功')
          }

          // 启动心跳检测
          this.startHeartbeat(heartbeatInterval, heartbeatTimeout, debug)
        }

        // 接收消息
        this.socket.onmessage = (event: MessageEvent) => {
          try {
            const message: WebSocketMessage = JSON.parse(event.data)
            this.messages.push(message)
            this.lastMessageTime = Date.now()

            if (debug) {
              console.log('[WebSocket] 收到消息:', message)
            }

            // 触发全局事件
            this.emitMessage(message)
          } catch (error) {
            console.error('[WebSocket] 消息解析失败:', error)
          }
        }

        // 连接关闭
        this.socket.onclose = (event: CloseEvent) => {
          this.state = 'CLOSED'
          this.clearHeartbeat()

          if (debug) {
            console.log('[WebSocket] 连接关闭:', event)
          }

          // 自动重连
          if (this.reconnectCount < maxReconnectAttempts) {
            this.reconnectCount++
            this.scheduleReconnect(url, options)
          } else {
            console.warn('[WebSocket] 已达到最大重连次数')
          }
        }

        // 连接错误
        this.socket.onerror = (event: Event) => {
          const error: WebSocketError = {
            type: 'error',
            event,
            message: 'WebSocket连接错误'
          }

          if (debug) {
            console.error('[WebSocket] 连接错误:', error)
          }

          this.emitError(error)
        }
      } catch (error) {
        console.error('[WebSocket] 初始化失败:', error)
        this.emitError({
          type: 'error',
          message: 'WebSocket初始化失败'
        })
      }
    },

    /**
     * 发送消息
     * @param message 消息对象
     * @returns 是否发送成功
     */
    sendMessage(message: WebSocketMessage): boolean {
      if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
        console.warn('[WebSocket] 连接未建立，无法发送消息')
        return false
      }

      try {
        this.socket.send(JSON.stringify(message))
        return true
      } catch (error) {
        console.error('[WebSocket] 消息发送失败:', error)
        return false
      }
    },

    /**
     * 关闭WebSocket连接
     */
    closeWebSocket() {
      if (this.socket) {
        this.socket.close()
        this.socket = null
      }
      this.state = 'CLOSED'
      this.clearHeartbeat()
      this.clearReconnect()
    },

    /**
     * 启动心跳检测
     */
    startHeartbeat(interval: number, timeout: number, debug: boolean) {
      this.clearHeartbeat()

      // 定时发送心跳
      this.heartbeatTimer = window.setInterval(() => {
        if (this.state === 'OPEN') {
          // 发送心跳消息
          this.sendMessage({ type: 'heartbeat', timestamp: Date.now() })

          // 检查是否超时
          const now = Date.now()
          if (now - this.lastMessageTime > timeout) {
            if (debug) {
              console.warn('[WebSocket] 心跳超时，关闭连接')
            }
            this.closeWebSocket()
          }
        }
      }, interval)
    },

    /**
     * 清除心跳定时器
     */
    clearHeartbeat() {
      if (this.heartbeatTimer !== null) {
        clearInterval(this.heartbeatTimer)
        this.heartbeatTimer = null
      }
    },

    /**
     * 安排重连
     */
    scheduleReconnect(url: string, options: WebSocketOptions) {
      this.clearReconnect()
      this.reconnectTimer = window.setTimeout(() => {
        console.log(`[WebSocket] 尝试重连 (${this.reconnectCount})...`)
        this.initWebSocket(url, options)
      }, options.reconnectDelay || 3000)
    },

    /**
     * 清除重连定时器
     */
    clearReconnect() {
      if (this.reconnectTimer !== null) {
        clearTimeout(this.reconnectTimer)
        this.reconnectTimer = null
      }
    },

    /**
     * 触发消息事件
     */
    emitMessage(message: WebSocketMessage) {
      // 可以在这里触发自定义事件或通知其他模块
      // 例如：使用 mitt 或其他事件总线
      // 使用 mitt 触发事件
      emitter.emit(WsEventType.MESSAGE, message)
    },

    /**
     * 触发错误事件
     */
    emitError(error: WebSocketError) {
      // 使用 mitt 触发事件
      emitter.emit(WsEventType.ERROR, error)
    }
  }
})
