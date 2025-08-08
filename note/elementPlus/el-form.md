# element-ui

[el-form](https://element-plus.org/zh-CN/component/form.html)

## 常见用法

```html
<el-form :model="account" label-width="auto" ref="ruleFromRef" :rules="rules">
  <el-form-item label="帐  号" prop="accountName">
    <el-input v-model="account.name" placeholder="请输入账号" />
  </el-form-item>
  <el-form-item label="密  码" prop="accountPassword">
    <el-input v-model="account.password" show-password />
  </el-form-item>
</el-form>
```

双向绑定表单对象

```ts
//校验规则
import { type FormRules } from 'element-plus'

//绑定表单对象
const account = reactive({
  name: '',
  password: '',
})

const rules: FormRules = {
  accountName: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 1, max: 20, message: '1-20位的字符', trigger: 'change' },
  ],
  accountPassword: [],
}
```

## 表单校验

表单校验一般在el-form标签内定义校验规则

### 💛校验设置

> - :rules="rules" 定义rules校验规则，rules是个规则对象
> - prop="accountName" 绑定表单里面的条目,校验规则里面对哪个item做校验

### 💚验证规则

> - required: true 是否必填
> - message: '请输入账号' 提示信息
> - trigger: 'blur' 触发方式(blur:失去焦点,change:输入框内输入)
> - min: 3 最小长度
> - max: 20 最大长度
> - pattern: /^[a-zA-Z0-9_-]{4,16}$/ 正则

## 获取表单数据

拿表单数据，需要先判断是否合法

element-plus 官网是 用的 submit方法，
我们这里 获取 formRef 的 实例，判断formRef.value.validate() 是否成功

⚠⚠⚠ 注意点：

## form的 v-model 和ref="form" 的区别

1. `:model="form"` 的作用
含义：model 是 Element Plus 表单组件的一个属性，用于绑定表单的 数据对象。
绑定对象：form 是一个响应式对象（通常通过 reactive 或 ref 创建），它包含表单字段的值（如 username、password）。
功能：
实现表单字段与数据的双向绑定（通过 v-model）。
支持表单验证规则（通过 rules 属性）。

2. `ref="formRef"` 的作用
含义：ref 是 Vue 的指令，用于 引用组件实例（或 DOM 元素）。
绑定对象：formRef 是一个 ref 对象，指向 `<el-form>` 组件实例本身。
功能：
调用组件实例的方法（如表单验证、重置）。
直接访问组件实例的属性或方法（如 formRef.value.validate()）。
