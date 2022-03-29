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
        label-width="150px"
      >
        <el-form-item
          label="商品名称："
          prop="name"
        >
          <el-input
            v-model="productInfos.name"
            placeholder="商品名称"
          />
        </el-form-item>
        <el-form-item
          label="商品价格："
          prop="price"
        >
          <el-input
            v-model="productInfos.price"
            placeholder="商品价格"
          />
        </el-form-item>
        <el-form-item
          label="商品日期："
          prop="Date"
        >
          <el-date-picker
            v-model="productInfos.Date"
            type="date"
            placeholder="商品生产日期"
          />
        </el-form-item>
        <el-form-item
          label="商品生产地址："
          prop="Address"
        >
          <el-input
            v-model="productInfos.Address"
            placeholder="商品生产地址"
          />
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
            @click="addProduct"
          >确认</el-button>
        </span>
      </template>
    </el-dialog>
  </teleport>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import useBaseType from '@/hooks/useBaseType'
import useElDialog from '@/hooks/useElDialog'
import useProduct from '@/hooks/useProduct'
import {PRODUCT_RULE} from '@/contant-type/index'
// import { ElMessage } from 'element-plus'

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
  ruleFormRef,
  productVisible,
  productInfos,
  productRules,

  closeProductDialog,
  addProductHasndle
} = useProduct({
  name:'',
  price:'',
  Date:'',
  Address:'',
  image:'',
},PRODUCT_RULE)

/**
 * 添加商品信息
 */
const addProductHandle = (e:Event) => {
  productVisible.value = true
}
const addProduct = async () => {
  let res = await addProductHasndle(ruleFormRef.value)
  if (res) {
    await onAddItemHandle(productInfos)
    productVisible.value = false
  }
}


const handleAvatarSuccess= (
  response,
  uploadFile
) => {
  productInfos.image = URL.createObjectURL(uploadFile.raw!)
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
    // ElMessage({
    //   message: res.message,
    //   type: 'warning',
    // })
  }
  
}
</script>


<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
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
/deep/ .el-input,
/deep/ .el-input__inner{
  width:100%;
}
/deep/ .el-upload {
  border:1px solid #ccc;
}
</style>