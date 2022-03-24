<template>
  <div>axios</div>
</template>


<script lang="ts" setup>
import request from '@/utils/request.ts'

request({
  url: '/',
  methon: 'get',
  data: {},
}).then( res => {
  console.log('res', res)
})
</script>


<style lang="scss" scoped></style>