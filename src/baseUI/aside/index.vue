<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#001529"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
  >
    <template
      v-for="item in asidebar"
      :key="item.id"
    >
      <!-- 含有二级导航 -->
      <el-sub-menu
        v-if="item?.children?.length > 0"
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <Location />
          </el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.id"
          :index="child.path"
          @click="navigateTo(child.path)"
        >
          {{ child.label }}
        </el-menu-item>
      </el-sub-menu>
      <!-- 只有一级 -->
      <el-menu-item
        v-else
        :index="item.path"
        @click="navigateTo(item.path)"
      >
        <el-icon><IconMenu /></el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {useRouter,useRoute} from 'vue-router'
import asidebar from './aside'
import {
  Location, 
  Menu as IconMenu,
} from '@element-plus/icons-vue'
let router = useRouter()
let route = useRoute()

const navigateTo = (path:string) => {
  router.push(path)
}

</script>

<style lang="scss">
.el-aside{
  background-color:#001529 ;
}
</style>