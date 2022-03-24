<template>
  <div class="bottom">
    reactive返回对象的响应式副本
    <p>const obj = reactive({ count: 0 })</p>
  </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'
const count = ref(1)
const obj = reactive({ count })


// ref 会被解包
console.log(obj.count === count.value) // true

// 它会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 它也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3

</script>

<style lang="scss" scoped></style>