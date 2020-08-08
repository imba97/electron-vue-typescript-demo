<template>
  <div>
    <el-row class="b-drag"></el-row>
    <el-row class="b-logo-bar">
      <i v-html="logoSvg"></i>
      <span>electron-vue-typescript-demo</span>
    </el-row>
    <el-row class="b-button-bar">
      <el-button @click="minimize()" type="info" class="b-minimize"
        ><i class="el-icon-minus"></i
      ></el-button>
      <el-button @click="maximize()" type="info" class="b-maximize"
        ><i class="el-icon-plus"></i
      ></el-button>
      <el-button @click="close()" type="danger" class="b-close"
        ><i class="el-icon-close"></i
      ></el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { ipcRenderer } from 'electron'
import Utils from 'utils/index'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Topbar extends Vue {
  private logoSvg: string = Utils.getLogo()

  created() {}

  // 最小化
  minimize() {
    ipcRenderer.send('minimize')
  }
  // 最大化
  maximize() {
    ipcRenderer.send('maximize')
  }
  // 关闭
  close() {
    ipcRenderer.send('close')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';

.b-drag {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 90px);
  height: 30px;
  -webkit-app-region: drag;
}

.b-logo-bar {
  position: relative;
  padding-left: 10px;
  height: 30px;
  background-color: #fff;

  span {
    position: absolute;
    top: 0;
    left: 40px;
    height: 30px;
    line-height: 36px;
    font-weight: 700;
    color: $mainColor;
  }
}

.b-button-bar {
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 30px;
  background-color: #ff0;
  color: #ccc;

  button {
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: none;
    border-radius: 0;
    float: left;
    cursor: default;
  }

  clear: both;
}
</style>
