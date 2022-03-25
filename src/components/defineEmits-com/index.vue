<template>
  <div>defineEmits</div>
  <p class="bottom">
    分为两种类型：基于类型的声明(采用ts的泛型) 和 运行时声明(采用运行的时候校验)
  </p> 
  <button @click="clickEmit">
    点击子组件事件
  </button>
</template>

<script lang="ts" setup>
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于类型
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

const clickEmit = () => {
  emit('change',{
    text:'我触发了子组件事件'
  })
}
</script>