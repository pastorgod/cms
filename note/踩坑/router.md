# 动态路由导入

```ts
// url= /main/systemInfo
// Boolean：这是一个函数，作为 .filter() 的回调函数。.filter() 会遍历数组中的每个元素，并将每个元素传入 Boolean 函数进行真假判断。
// 如果返回 true，该元素会被保留在新数组中。
// 如果返回 false，该元素会被过滤掉。

// filter(Boolean) 避免最后一个是/,拿到空路径
// pop是数组方法，数组有pop和push，pop是删除数组最后一个元素，返回被删除的元素
// /main/systemInfo/  split('/') => ['','main','systemInfo','']

const createMainRouteNode = (url:string) => {

    //url最后一个 是文件名,大小写要保证，因为要放 linux服务器
    const name:string = url.split('/').filter(Boolean).pop() || '';
    
    //## 动态导入，不能是一个变量，直接传给 import ，否则vite无法分析，
    //动静结合，只传一个文件名，vite不报警告
    //
    //以下构想，放弃
    // const filePathSegment = PathToPascalCase(url)
    // console.log(`动态导入 url = ${url}  name = ${name} filePathSegment = ${filePathSegment}`)
    // const filePath = `/src/views/${filePathSegment}.vue`

    return {
        path: url.toLowerCase(),
        name: name.toLowerCase(),
        component: () => import(/* @vite-ignore */`/src/views/${url}.vue`),
    }
}

```

> component: () => import(/*@vite-ignore*/`/src/views/${url}.vue`), 这种写法可以忽略路径的检查，路径靠自己去写。

**如果遇到vue文件被裁剪，就禁用*tree-shaking*

```ts
// vite.config.js
export default defineConfig({
  build: {
    minify: false, // 禁用代码压缩
    terserOptions: {
      compress: false,
      mangle: false
    },
    rollupOptions: {
      treeshake: false // 禁用 Tree-shaking
    }
  }
});
```
