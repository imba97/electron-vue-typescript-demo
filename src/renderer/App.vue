<template>
  <div id="app">
    <topbar></topbar>
    <el-row class="b-body">
      <el-col class="b-left"><left-sidebar></left-sidebar></el-col>
      <el-col :span="16" class="b-main">
        <router-view class="b-router-view"></router-view>
      </el-col>
      <el-col :span="4"><right-sidebar></right-sidebar></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import LeftSidebar from 'components/Common/Sidebar/left.vue'
import RightSidebar from 'components/Common/Sidebar/right.vue'
import Topbar from 'components/Common/topbar.vue'

import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'electron-vue-typescript-demo',
  components: {
    LeftSidebar,
    RightSidebar,
    Topbar
  }
})
export default class App extends Vue {
  created() {}
}
</script>

<style lang="scss">
@import './assets/style/common.scss';
/* CSS */

.b-body {
  max-width: 1920px;
  height: 100% !important;

  .b-left {
    width: auto;
    height: 100% !important;

    ul {
      height: 100% !important;
    }
  }

  .b-main,
  .b-router-view {
    padding: 0 !important;
    height: calc(100% - 6px) !important;
    overflow-x: hidden;
  }

  .b-main {
    & main::-webkit-scrollbar {
      width: 5px;
      height: 1px;
    }

    & main::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: mix($mainColor, #fff, 70%);
    }

    & main::-webkit-scrollbar-track {
      border-radius: 4px;
      background: #ccc;
    }
  }
}
</style>
