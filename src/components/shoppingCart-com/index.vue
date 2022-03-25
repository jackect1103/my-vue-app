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
        :prop="item.label"
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
            @click.prevent="deleteRow(scope.$index)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="mt-4"
      style="width: 100%"
      @click="onAddItem"
    >
      Add Item
    </el-button>
  </el-card>
</template>

<script lang="ts" setup>
import useBaseType from '@/hooks/useBaseType'
const {
  shopListColumn,
  tableData
} = useBaseType()

</script>

<style lang="scss" scoped></style>