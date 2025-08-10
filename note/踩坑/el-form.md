# el-form 踩坑

```ts
//绑定表单对象
const form = reactive({
  username: '',
  password: '',
})
const accountRules: FormRules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 1, max: 20, message: '6-20位的字符', trigger: 'blur' },
  ],
  password: [],
}
```

这里的form对象的属性名
和表单验证的prop属性名必须一致
否则会报验证错误
