<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :style="{
          background: `transparent url(${userInfo.top_photo}) scroll no-repeat 50% 0 / auto auto`
        }"
        class="b-top-ptoto"
        :class="topPhotoIsLoaded"
      ></el-col>
    </el-row>
    <el-row>
      <el-col class="b-userinfo-col"
        ><img :src="userInfo.face" class="b-avatar" :class="faceIsLoaded" />
        <span class="b-name">{{ userInfo.name }}</span>
        <span class="b-sign">{{ userInfo.sign }}</span>
        <div class="b-bg"></div>
      </el-col>
    </el-row>
    <el-row>
      <button @click="logout()">退出</button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Utils from 'utils/index'

const fs = require('fs')
const path = require('path')

@Component
export default class Space extends Vue {
  userInfo: any = {
    face: '',
    top_photo: ''
  }

  @Prop({ default: 0 }) private uid!: number

  created() {
    if (!Utils.User.isLogin || typeof this.uid === 'undefined')
      this.$router.push('/login')

    let spaceInfo: { [key: string]: any } = this.$elStore.get(
      `users.${this.uid}.spaceInfo`
    )

    let request = Utils.Request.instance
    if (typeof spaceInfo !== 'undefined') {
      this.userInfo = spaceInfo
      return true
    }

    request.getUserInfo(this.uid).then((json: { [key: string]: any }) => {
      console.log('json.data', json.data)
      this.userInfo = json.data
      // 获取用户文件存放目录路径 拼接 UID，每个用户一个文件夹
      let userDirPath = path.join(
        this.$appSetup.userDataDir,
        this.userInfo.mid.toString()
      )
      // 空间信息保存到本地
      this.$elStore.set(`users.${this.uid}.spaceInfo`, this.userInfo)

      // 获取头像，保存到本地，返回头像的本地路径
      request
        .getNetworkImage('face', this.userInfo.face, userDirPath)
        .then((faceLocalPath: string) => {
          // 设置用户头像
          this.userInfo.face = Utils.getLocalFilePath(faceLocalPath)
          this.$elStore.set(
            `users.${this.uid}.spaceInfo.face`,
            this.userInfo.face
          )
        })

      // 获取用户头图
      request
        .getNetworkImage('top_photo', this.userInfo.top_photo, userDirPath)
        .then((topPhotoLocalPath: string) => {
          // 设置用户头图
          this.userInfo.top_photo = Utils.getLocalFilePath(topPhotoLocalPath)
          this.$elStore.set(
            `users.${this.uid}.spaceInfo.top_photo`,
            this.userInfo.top_photo
          )
        })
    })
  }

  public logout() {
    let user = this.$elStore.get(`users.${this.uid}`)
    let request = new Utils.Request()
    request
      .userLogout(user.uid, user.uidMd5, user.SESSDATA, user.bili_jct)
      .then((text: string) => {
        if (/成功退出登录/.test(text)) {
          this.$message({
            type: 'success',
            message: '成功退出登录！'
          })
          this.$router.go(-1)
        }
      })
    this.$elStore.delete('currentUser')
    this.$elStore.delete(`users.${this.uid}.loginInfo`)
    this.$store.commit('uid', 0)
  }

  // Computed

  get faceIsLoaded() {
    return {
      'b-visibility-hidden': this.userInfo.face === ''
    }
  }
  get topPhotoIsLoaded() {
    return {
      'b-visibility-hidden': this.userInfo.top_photo === ''
    }
  }

  btnClick() {}
}
</script>

<style lang="scss">
.b-space-box {
  padding: 20px;
}

.b-userinfo-col {
  $padding: 20px;
  user-select: none;

  position: absolute;
  top: calc(-50px - #{$padding});
  left: 0;
  width: 100% !important;
  height: calc(50px + #{$padding});
  overflow: hidden;
  cursor: default;

  .b-avatar {
    position: absolute;
    top: 50%;
    left: #{$padding / 2};
    width: 50px;
    height: 50px;
    border: 2px #ccc solid;
    border-radius: 100%;
    transform: translate(0, -50%);
    z-index: 10;
  }

  .b-name {
    position: absolute;
    top: 5px;
    left: 80px;
    font-size: 20px;
    color: #fff;
    z-index: 10;
  }

  .b-sign {
    position: absolute;
    top: 40px;
    left: 80px;
    font-size: 16px;
    color: #fff;
    z-index: 10;
  }
}

.b-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 1;
}

.b-top-ptoto {
  height: 13vw;
  max-height: 200px;
}

.b-visibility-hidden {
  visibility: hidden;
}
</style>
