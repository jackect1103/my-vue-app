<template>
  <div class="login-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>注册账号</span>
          <router-link to="/login">已有账号</router-link>
        </div>
      </template>
      <!-- 表身 -->
      <el-form ref="ruleFormRef" label-width="100px" :rules="registerRule" :model="loginForm" style="max-width: 460px">
        <el-form-item label="用户名:" prop="userName">
          <el-input v-model="loginForm.userName" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="loginForm.password" type="password" />
        </el-form-item>
        <el-form-item label="重复密码:" prop="rePassword">
          <el-input v-model="loginForm.rePassword" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">注册用户</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance } from 'element-plus'
import { register } from '@/api/common-api'
import { useRouter } from 'vue-router'

let router = useRouter()
let ruleFormRef = ref<FormInstance>(null)
// 自定义校验规则
let checkoutPassword = (rule,value,callback) => {
  if (loginForm.password == value) {
    callback()
  } else {
    callback('密码不一致')
  }
}
let registerRule = reactive({
  userName: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
  password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }],
  rePassword: [
    { required: true, message: '请输入用户重复密码', trigger: 'blur' },
    { validator:checkoutPassword, trigger: 'change' }
  ],
})
let loginForm = reactive({
  userName: '',
  password: '',
  rePassword: ''
})

//注册账号
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    console.log('valid', valid)
    if (valid) {
      let res = await register(loginForm)
      if (res.code == 0) {

        localStorage.setItem('token', JSON.stringify(res.data))
        router.push('/login')
      }
    }
  })

}

// 重置
const resetForm = () => {
  loginForm.userName = ''
  loginForm.password = ''
  loginForm.rePassword = ''
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  // background-image:url('../../../public/loginBG.webp') ;
  background-color: #ccc;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-card {
    width: 25%;
  }
}
</style>