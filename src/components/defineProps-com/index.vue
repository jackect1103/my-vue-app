<template>
  <div>defineProps</div>
  <p>分为两种类型：基于类型的声明(采用ts的泛型) 和 运行时声明(采用运行的时候校验)</p>
  <p><b>基于类型的声明</b>或者<b>运行时声明</b>都可以使用，但是你不能同时使用两者。</p>
  <b>注意：使用基于类型声明时，将失去了对 prop 定义默认值的能力</b>
  <div>组件props:{{ props_1 }}</div>
</template>

<script lang="ts" setup>

// defineProps() 宏函数支持从它的参数中‘推导类型’
// 这被称之为“运行时声明”，因为传递给 defineProps() 的参数会作为运行时的 props 选项使用。

const props_1 = defineProps({
  foo: { type: String, required: true },
  bar: { type: Number, default:111 }
})


// ‘泛型参数’来定义 prop 的类型通常更直接
// 这被称之为“基于类型的声明”
// 注意：使用基于类型声明时，将失去了对 prop 定义默认值的能力
//const props = defineProps<T>() 

// const props_1 = defineProps<{
//   foo: string
//   bar?: number
// }>()

// 也可以将 prop 的类型移入一个单独的接口中
// interface Props {
//   foo: string
//   bar?: number
// }
// const props_1 = defineProps<Props>()

console.log('props_1', props_1)
</script>