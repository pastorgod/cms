/* eslint-disable @typescript-eslint/no-explicit-any */

// 导入工具库
import type { AxiosResponse, AxiosRequestConfig ,AxiosInstance, InternalAxiosRequestConfig} from 'axios'
import axios from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface InterceptorsExtend<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface AxiosRequestConfigExtend<T = AxiosResponse> extends AxiosRequestConfig { interceptors?: InterceptorsExtend<T>,
}


// import { localCache } from '@/utils/cache'
// import CONST from '@/global/constDefine'

class HYRequest {
  instance: AxiosInstance

  // request实例 => axios的实例
  constructor(config: AxiosRequestConfigExtend) {
    this.instance = axios.create(config)
    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        // loading/token
        // console.log('全局请求成功的拦截')

        // const token = localCache.getItem(CONST.LOGIN_TOKEN)
        // if(config.headers && token)
        // {
        //   config.headers.Authorization = 'Bearer ' + token
        // }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        // ElMessage.error("兄弟，网络请求失败~~" + err)
        return err
      }
    )

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn as (config: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any>,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: AxiosRequestConfigExtend<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config as InternalAxiosRequestConfig<any>)
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfigExtend<T>) {
    return this.request({ ...config, method: 'Get' })
  }
  post<T = any>(config: AxiosRequestConfigExtend<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: AxiosRequestConfigExtend<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: AxiosRequestConfigExtend<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
