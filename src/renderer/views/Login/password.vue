<template>
  <el-form ref="form" :model="form" label-width="80px" class="b-form">
    <el-form-item label="用户名">
      <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Utils from 'utils/index'
import qs from 'querystring'
import { Vue, Component } from 'vue-property-decorator'

interface LoginForm {
  username: string
  password: string
}

@Component
export default class LoginPassword extends Vue {
  form: LoginForm = {
    username: '',
    password: ''
  }

  created() {}

  onSubmit() {
    console.log(this.form.username, this.form.password)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';

.b-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
