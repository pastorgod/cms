# pinia

## 声明数据仓库

```ts
import { defineStore } from 'pinia'
const useLoginStore = defineStore('login', {
})
export default useLoginStore
```

vue 中的使用

```html
<template>
  <div class="Main">
    <h2>{{ loginStore.username}} -- {{ loginStore.displayUserName }}</h2>
    <input v-model="loginStore.username" />
    <button @click="changUseName">我的按钮</button>
  </div>
</template>
```

```ts
import useLoginStore from '@/stores/loginStore';
const loginStore = useLoginStore();

loginStore.setUsername('admin');
function changUseName() {
  loginStore.setUsername('按钮');
}
```
