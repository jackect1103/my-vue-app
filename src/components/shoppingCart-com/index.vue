<template>
  <div class="bottom">
    购物车
  </div>
  <el-card class="box-card">
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="250"
    >
      <el-table-column
        v-for="item in shopListColumn"
        :key="item.id"
        fixed
        :prop="item.type"
        :label="item.label"
        :width="item.width"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
      >
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click.prevent="deleteRowHandle(scope.$index)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="mt-4"
      style="width: 100%"
      @click="onAddItemHandle"
    >
      Add Item
    </el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, reactive, Ref} from 'vue'
import useBaseType from '@/hooks/useBaseType'

const {
  shopListColumn,
  getTableListHandle,
  onAddItemHandle,
  deleteRowHandle
} = useBaseType()

const total: Ref<number> = ref(0)
let tableData = reactive([])
const res = await  getTableListHandle()
total.value = res.data.total
tableData = res.data.data


</script>

<style lang="scss" scoped></style>