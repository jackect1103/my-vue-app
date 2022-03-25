<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-main>
          <suspense>
            <router-view />
          </suspense>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script  lang="ts" setup>
import Aside from '@/baseUI/aside/index.vue'
import Header from '@/baseUI/header/index.vue'
</script>

<style lang="scss">
  .common-layout{
    height: 100vh;
     .el-container {
      height: 100%;
      .el-header{
        padding: 0;
      }
    }
  }

  
  .bottom{
    margin-bottom: 10px;
  }
</style>