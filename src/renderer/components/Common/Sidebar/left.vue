<template>
  <el-menu
    class="b-menu"
    :class="menuClass"
    :collapse="collapse"
    :collapse-transition="false"
  >
    <el-menu-item>
      <router-link to="/index" class="b-btn"
        ><i class="el-icon-menu"></i><span>主页</span></router-link
      >
    </el-menu-item>
    <el-menu-item v-if="!isLogin">
      <router-link to="/login" class="b-btn"
        ><i class="el-icon-menu"></i><span>登录</span></router-link
      >
    </el-menu-item>
    <el-menu-item v-if="isLogin">
      <router-link :to="`/space/${getUid}`" class="b-btn" :class="loginClass"
        ><i class="el-icon-user-solid"></i><span>我的</span></router-link
      >
    </el-menu-item>
    <el-button
      @click="changeCollapse()"
      class="b-collapse-btn"
      :class="collapseBtnClass"
      icon="el-icon-upload2"
      circle
    ></el-button>
  </el-menu>
</template>

<script lang="ts">
import Utils from 'utils/index'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State, Getter } from 'vuex-class'

@Component
export default class SidebarLeft extends Vue {
  @State private uid: number | undefined

  private isLogin: boolean = Utils.User.isLogin

  private currentUser?: number = this.$elStore.get('currentUser')

  private loginClass = {
    'router-link-active': false
  }

  private collapse: boolean = false

  private get collapseBtnClass() {
    return this.collapse ? 'b-open' : 'b-close'
  }

  private get menuClass() {
    return !this.collapse ? 'b-menu-open' : 'b-menu-close'
  }

  changeCollapse() {
    this.collapse = !this.collapse
  }

  created() {
    if (this.isLogin) this.$store.commit('uid', this.currentUser)
  }

  get getUid() {
    return this.isLogin ? this.currentUser : this.uid
  }

  @Watch('$store.state.User.uid')
  private onUidChange(val: number) {
    this.isLogin = Utils.User.isLogin
    if (typeof this.uid !== 'undefined')
      this.loginClass['router-link-active'] = this.isLogin
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';

.b-menu {
  &.b-menu-close {
    width: 64px;
  }

  &.b-menu-open {
    width: 160px;
  }
}

.b-btn {
  position: absolute;
  top: 0;
  left: 0;
  color: #666;
  font-size: 20px;
  width: 100%;
  height: 100%;

  &.router-link-active {
    color: $mainColor !important;
  }

  i {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    color: #666;
  }

  span {
    position: absolute;
    top: 50%;
    left: 10%;
    padding-left: 30px;
    transform: translate(0, -50%);
  }
}

.el-menu--collapse > li > .b-btn > i {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.b-collapse-btn {
  position: absolute;
  left: 10px;
  bottom: 50px;

  &.b-close {
    transform: rotateZ(-90deg);
  }

  &.b-open {
    transform: rotateZ(90deg);
  }
}

.b-btn.router-link-active span,
.b-btn.router-link-active i {
  color: $mainColor;
}
</style>
