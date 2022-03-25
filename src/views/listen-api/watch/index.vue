<template>
  <div>x:{{ x }}</div>
  <div>y:{{ y }}</div>
  <button @click="changeX">
    改变x值
  </button>
</template>

<script lang="ts" setup>
import {ref,watch} from 'vue'
const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
},{ deep: true })

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

const changeX = () => {
  x.value++
}
</script>


<style lang="scss" scoped></style>