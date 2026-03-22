# vue的一些知识点

<!-- 表单元素 -->
<input v-model="message" /> <!-- 等价于 :value="message" + @input="message = $event.target.value" -->

<!-- 自定义组件 -->
<CustomComponent v-model="parentValue" />

v-model 双向绑定（数据可双向流动） 用于表单元素或自定义组件，实现视图和数据的双向同步（用户输入更新数据，数据变化也更新视图）。

:model 单向绑定（数据从父组件到子组件） 仅将父组件的数据传递给子组件，子组件无法直接修改父组件的数据（除非操作引用类型数据）。

⚠️ 注意：
表单组件里面一般用 v-model

v-bind 是绑html元素属性
v-model 是绑定表单元素
