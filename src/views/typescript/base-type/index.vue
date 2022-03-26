<template>
  <p class="bottom">
    基础类型
  </p>
  <el-card class="box-card">
    <ol>
      <li>布尔值</li>
      <li>数字</li>
      <li>字符串</li>
      <li>Null 和 Undefined</li>
      <el-divider />

      <li>数组：存放相同类型的数组</li>
      <li>元组 Tuple：允许表示一个已知元素数量和类型的数组，<b>各元素的类型不必相同</b></li>
      <el-divider />

      <li>Any</li>
      <li>Never：表示的是那些永不存在的值的类型。</li>
      <li>Void</li>
      <el-divider />

      <li>函数</li>
      <li>接口interface：是 TS 设计出来用于定义对象类型的，可以对<b>对象的形状进行描述</b></li>
      <li>枚举Emun</li>
      <li>Object</li>
      <li>类型断言</li>
    </ol>
  </el-card>
  
  <el-divider />

  <shoppingCart />
</template> 

<script lang="ts" setup>
import shoppingCart from 'components/shoppingCart-com/index.vue'

</script>

<style lang="scss" scoped>
  ol {
    padding-left:15px ;
  }
</style>