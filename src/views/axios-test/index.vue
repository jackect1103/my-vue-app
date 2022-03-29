<template>
  <div>axios</div>
</template>


<script lang="ts" setup>
import request from '@/utils/request'

request({
  url: '/card',
  methon: 'get',
  data: {},
}).then( res => {
  console.log('card', res)
})

request({
  url: '/order-times',
  methon: 'get',
  data: {},
}).then( res => {
  console.log('order-times', res)
})
</script>


<style lang="scss" scoped></style>