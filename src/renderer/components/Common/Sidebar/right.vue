<template>
  <div class="col-2">
    <el-button @click="btnClick()" type="primary">主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import Utils from 'utils/index'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SidebarRight extends Vue {
  created() {}

  btnClick() {
    Utils.$alert('test')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/common.scss';
</style>
