# element-ui

[el-form](https://element-plus.org/zh-CN/component/form.html)

## 常见用法

```html
<el-form :model="account" label-width="auto" ref="ruleFromRef" :rules="rules">
  <el-form-item label="帐  号" prop="accountName">
    <el-input v-model="account.name" />
  </el-form-item>
  <el-form-item label="密  码" prop="accountPassword">
    <el-input v-model="account.password" show-password />
  </el-form-item>
</el-form>
```

双向绑定表单对象

```ts
//校验规则
import { type FormRules } from 'element-plus';

//绑定表单对象
const account = reactive({
    name: '',
    password: ''
})

const rules: FormRules = {
    accountName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min:1, max:20, message: '1-20位的字符',trigger: 'change'}
    ],
    accountPassword: []
}
```

## 表单校验

表单校验一般在el-form标签内定义校验规则

### 💛校验设置

> - :rules="rules"                      定义rules校验规则，rules是个规则对象
> - prop="accountName"                  绑定表单里面的条目,校验规则里面对哪个item做校验

### 💚验证规则

> - required: true                      是否必填
> - message: '请输入账号'                提示信息
> - trigger: 'blur'                     触发方式(blur:失去焦点,change:输入框内输入)
> - min: 3                              最小长度
> - max: 20                             最大长度
> - pattern: /^[a-zA-Z0-9_-]{4,16}$/    正则
