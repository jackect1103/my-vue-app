<template>
  <div class="bottom">
    用处：
    <p>1、解决模板臃肿问题</p>
    <p>2、缓存</p>
  </div>
  <div class="bottom">
    <p>Has published books:</p>
    <p>author.books.length:{{ author.books.length > 0 ? 'Yes' : 'No' }}</p>
    <p>使用了计算属性:{{ publishedBooksMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import {reactive,computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>


<style lang="scss" scoped>
  p{
    line-height: 24px;
  }
</style>