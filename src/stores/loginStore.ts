import { defineStore } from 'pinia'
import constDefine from '@constDefine'
import {localCache} from '@utils/cacheUtils.ts'

/**
 * 登录状态管理
 *
 */
const useLoginStore = defineStore('login', {
  
  state: () => ({
    username: GetLocalCache(constDefine.USER_NAME) || '',
    projectId: GetLocalCache(constDefine.PROJECT_ID) || 0,
  }),
  getters: {
    GetUserName(state){
      return state.username
    },
    GetProjectId(state){
      return state.projectId
    },
  },
  actions: {

    //保存内存，其他地方调用
    SetLoginInfo(username: string,projectId: number) {
      this.username = username
      this.projectId = projectId
    },

    //保存项目ID
    SetProjectId(projectId: number) {
      this.projectId = projectId
    }
  }
})

export default useLoginStore
