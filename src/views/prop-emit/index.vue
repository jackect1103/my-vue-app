<template>
  <el-card>
    <p class="bottom">
      父组件：{{ parentsData }}
    </p>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <p>为组件的 prop 标注类型</p>
        </div>
      </template>
      <definePropsCom :foo="'foo'" />
    </el-card>
    <el-divider />
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <p>为组件的 emit 标注类型</p>
        </div>
      </template>
      <defineEmitsCom @change="change" />
    </el-card>
  </el-card>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import definePropsCom from '@/components/defineProps-com/index.vue'
import defineEmitsCom from '@/components/defineEmits-com/index.vue'

let parentsData = ref('接收子组件数据')
const change = (data:string):void => {
  console.log('data', data)
  parentsData.value = data
}
</script>