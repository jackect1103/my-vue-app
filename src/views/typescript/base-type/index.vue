<template>
  <p class="bottom">
    基础类型
  </p>
  <el-card class="box-card">
    <ol>
      <li>布尔值</li>
      <li>数字</li>
      <li>字符串</li>
      <el-divider />

      <li>数组</li>
      <li>元组 Tuple</li>
      <li>枚举</li>
      <el-divider />

      <li>Any</li>
      <li>Void</li>
      <li>Null 和 Undefined</li>
      <li>Never</li>
      <el-divider />

      <li>Object</li>
      <li>类型断言</li>
    </ol>
  </el-card>
</template>

<script lang="ts" setup>
import useBaseType from '@/hooks/useBaseType/index.ts'
const usebasetype = useBaseType()
console.log('usebasetype', usebasetype)
</script>

<style lang="scss" scoped>
  ol {
    padding-left:15px ;
  }
</style>