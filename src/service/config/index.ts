// 2.代码逻辑判断, 判断当前环境
// vite默认提供的环境变量
console.log(import.meta.env.MODE)
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) // 是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染(server side render)

//网络参数
const BASE_URL = 'http://localhost:5254'
const TIME_OUT = 10000
export { BASE_URL,TIME_OUT }
