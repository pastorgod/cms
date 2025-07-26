import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    username: '',
    password: '',
  }),
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
