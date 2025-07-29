import { defineStore } from 'pinia'

/**
 * 登录状态管理
 *
 */
const useLoginStore = defineStore('login', {
  state: () => ({
    username: '',
    password: '',
  }),
  getters: {
    displayUserName(state){
      return state.username + "lxx"
    }
  },
  actions: {
    setUsername(username: string) {
      this.username = username
    },
    setPassword(password: string) {
      this.password = password
    },
  },
})

export default useLoginStore
