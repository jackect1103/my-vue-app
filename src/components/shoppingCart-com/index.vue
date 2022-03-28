<template>
  <div class="bottom">
    购物车
  </div>
  <el-card class="box-card">
    <!-- 表格信息 -->
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
        label="图片"
        width="160"
      >
        <template #default="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.image"
            fit="contain"
          />
        </template>
      </el-table-column>
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
    <!-- 添加商品信息 -->
    <el-button
      class="mt-4"
      style="width: 100%"
      @click="addProductHandle"
    >
      添加商品信息
    </el-button>
  </el-card>

  <!-- 删除弹出窗 -->
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

  <!-- 添加信息弹出窗 -->
  <teleport to="body">
    <el-dialog
      v-model="productVisible"
      title="添加商品信息"
      width="30%"
      :before-close="closeProductDialog"
    >
      <el-form
        ref="ruleFormRef"
        :model="productInfos"
        :rules="productRules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="商品名称："
          prop="name"
        >
          <el-input v-model="productInfos.name" />
        </el-form-item>
        <el-form-item
          label="商品价格："
          prop="price"
        >
          <el-input v-model="productInfos.price" />
        </el-form-item>
        <el-form-item
          label="商品日期："
          prop="Date"
        >
          <el-date-picker
            v-model="productInfos.Date"
            type="date"
            placeholder="商品日期"
          />
        </el-form-item>
        <el-form-item
          label="商品地址："
          prop="Address"
        >
          <el-input v-model="productInfos.Address" />
        </el-form-item>
        <el-form-item
          label="商品图片："
          prop="image"
        >
          <el-upload
            :action="'/api/shopList/upload'"
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <img
              v-if="productInfos.image"
              :src="productInfos.image"
              class="avatar"
            >
            <el-icon
              v-else
              class="avatar-uploader-icon"
            >
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeProductDialog">取消</el-button>
          <el-button
            type="primary"
            @click="addProductHasndle"
          >确认</el-button>
        </span>
      </template>
    </el-dialog>
  </teleport>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import {ref,Ref} from 'vue'
import useBaseType from '@/hooks/useBaseType'
import useElDialog from '@/hooks/useElDialog'
import useProduct from '@/hooks/useProduct'

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

const {
  productVisible,
  productInfos,
  productRules,

  closeProductDialog,
  addProductHasndle
} = useProduct()

/**
 * 添加商品信息
 */
const addProductHandle = (e:Event) => {
  productVisible.value = true
}


const handleAvatarSuccess= (
  response,
  uploadFile
) => {
  console.log('uploadFile.raw', uploadFile.raw)
  productInfos.image = URL.createObjectURL(uploadFile.raw!)
  console.log('productInfos', productInfos)
}




/**
 * 删除商品事件
 */
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

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>