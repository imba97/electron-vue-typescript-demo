<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1"
            ><router-link to="/login/qrcode"
              >二维码登录</router-link
            ></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link to="/login/password"
              >密码登录</router-link
            ></el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
    <div class="b-login">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Utils from 'utils/index'
import qs from 'querystring'
import { Vue, Component } from 'vue-property-decorator'

export default class Login extends Vue {
  created() {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';

.b-login {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
}

.el-menu-item {
  padding: 0;

  a {
    padding: 0 20px;
    width: calc(100% - 40px);
    height: 100%;
    display: block;
  }
}
</style>
