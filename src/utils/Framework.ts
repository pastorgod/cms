import { ref, reactive, computed, watch, onMounted, onUnmounted, resolveComponent } from 'vue'
import { 
  SetLocalCache,
  GetLocalCache,
  RemoveLocalCache,
  ClearLocalCache,
  GetLocalBoolean,
  SetSessionCache,
  GetSessionCache,
  RemoveSessionCache,
  ClearSessionCache,
  GetSessionBoolean
} from '@/utils/cacheUtils'

//工具类
import constDefine from '@/define/constDefine'
import { stringUtils } from '@/utils/stringUtils'
const { IsNullOrEmpty } = stringUtils()

//element-plus
import { ElMessage, type FormRules, type FormInstance } from 'element-plus'

//router
import router from '@/router/router'

//pinia
import useLoginStore from '@/stores/loginStore'
const loginStore = useLoginStore()

//接口或者类型
import type { IProject } from '@/define/interface'

// ┌────────────────────────────────────────────────────────────────────────────────────┐
//                                       "常用类或方法"                                      
// └────────────────────────────────────────────────────────────────────────────────────┘
export {

  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onUnmounted,
  resolveComponent,

  IsNullOrEmpty,        //判断对象是否为空

  SetLocalCache,        //设置本地存储
  GetLocalCache,        //获取本地存储
  RemoveLocalCache,     //删除本地存储
  ClearLocalCache,      //清空本地存储
  GetLocalBoolean,      //获取本地存储的布尔值
  
  SetSessionCache,      //设置会话存储
  GetSessionCache,      //获取会话存储
  RemoveSessionCache,   //删除会话存储
  ClearSessionCache,    //清空会话存储
  GetSessionBoolean,    //获取会话存储的布尔值

  ElMessage,
  router,
  loginStore,
  constDefine,
}

// ┌────────────────────────────────────────────────────────────────────────────────────┐
//                                   类型或接口                                      
// └────────────────────────────────────────────────────────────────────────────────────┘
export type { IProject, FormRules, FormInstance }
