import { BASE_URL, TIME_OUT } from '../config'
import XXRequest from './requestUtil'

const xxRequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default xxRequest
