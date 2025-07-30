import { BASE_URL, TIME_OUT } from '../config'
import AxiosUtil from './httpUtil'

const axiosUtil = new AxiosUtil({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default axiosUtil
