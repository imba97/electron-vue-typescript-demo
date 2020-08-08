<template>
  <el-main>
    <el-row class="b-video-box" :gutter="20">
      <el-col
        class="b-video"
        :md="6"
        :sm="8"
        :xs="12"
        v-for="(video, key) in videoData"
        :key="key"
      >
        <img :src="video.cover" />
        <p>{{ video.title }}</p>
      </el-col>
    </el-row>
  </el-main>
</template>

<script lang="ts">
import Utils from 'utils/index'
// import Vue from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

import fs from 'fs'
import path from 'path'

@Component
export default class Index extends Vue {
  videoData = []

  created() {
    let request = new Utils.Request()
    let i = 3
    while (i--) {
      request.getIndexVideo().then((json: { [key: string]: any }) => {
        this.videoData = this.videoData.concat(json.data.items)
      })
    }
  }

  public btnClick() {}
}
</script>

<style lang="scss" scoped>
.b-video-box {
  padding-bottom: 30px;
}

.b-video {
  text-align: center;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  p {
    margin: 0;
    font-size: 14px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
}
</style>
