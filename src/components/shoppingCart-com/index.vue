<template>
  <div class="bottom">
    购物车
  </div>
  <el-card class="box-card">
    <el-table
      :data="tableData.data"
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
            @click.prevent="openDialog(scope.$index)"
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

  <teleport to="body">
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="closeDialog"
    >
      <span>{{ dialogText }}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog">取消</el-button>
          <el-button
            type="primary"
            @click="removeHasndle"
          >确认</el-button>
        </span>
      </template>
    </el-dialog>
  </teleport>
</template>

<script lang="ts" setup>
import useBaseType from '@/hooks/useBaseType'
import useElDialog from '@/hooks/useElDialog'

const {
  shopListColumn,
  tableData,
  getTableListHandle,
  onAddItemHandle,
  deleteRowHandle
} = useBaseType();

const {
  dialogText,
  dialogVisible,
  curId,

  closeDialog,
  openDialog,
} = useElDialog('是否删除当前该商品信息')
getTableListHandle()



const removeHasndle = async () => {
  let res = await deleteRowHandle(curId.value)
  if (res.message.includes('成功')) {
    closeDialog()
    getTableListHandle()
  } else {
    ElMessage({
      message: res.message,
      type: 'warning',
    })
  }
  
}
</script>

<style lang="scss" scoped></style>