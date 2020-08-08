<template>
  <div>
    <div class="qrcode-box">
      <p ref="qrcode" class="qrcode"></p>
      <img class="qrcode-2233" :src="qrcode2233" />
    </div>
    <p class="qrcode-tip">
      请使用客户端扫描二维码登录
    </p>
  </div>
</template>

<script lang="ts">
import Utils from 'utils/index'
import qs from 'querystring'
import path from 'path'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginQrcode extends Vue {
  qrcode2233: string = path.join(__static, 'images/2233login.png')

  mounted() {
    let self: LoginQrcode = this
    let isScan: boolean = false
    let queryLoginInfoTimer: NodeJS.Timeout | null = null
    let queryLoginInfoTimeout: number = 30
    let request = new Utils.Request()
    request.getLoginQRCode().then((json: { [key: string]: any }) => {
      let QRCode = require('qrcodejs2')
      new QRCode(this.$refs.qrcode, {
        text: json.data.url,
        width: 140,
        height: 140,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })

      queryLoginInfoTimer = setInterval(() => {
        request
          .getLoginQRCodeInfo(json.data.oauthKey)
          .then((json: { [key: string]: any }) => {
            queryLoginInfoTimeout--

            if (!isScan && json.data === -5) {
              isScan = true
              self.$message({
                type: 'success',
                message: '扫描成功 √'
              })
            }

            if (queryLoginInfoTimeout <= 0 || json.status) {
              if (typeof json.data.url === 'string') {
                let loginInfo: { [key: string]: any } = qs.parse(
                  json.data.url.split('?')[1]
                )
                self.$elStore.set(`users.${loginInfo.DedeUserID}.loginInfo`, {
                  uid: loginInfo.DedeUserID,
                  uidMd5: loginInfo.DedeUserID__ckMd5,
                  SESSDATA: qs.unescape(loginInfo.SESSDATA),
                  bili_jct: loginInfo.bili_jct,
                  Expires: loginInfo.Expires
                })
                self.$elStore.set('currentUser', loginInfo.DedeUserID)
                self.$store.commit('uid', loginInfo.DedeUserID)
                self.$router.push(`/space/${loginInfo.DedeUserID}`)
              }
              clearInterval(queryLoginInfoTimer!)
            }
          })
      }, 1000)
    })
  }
}
</script>

<style lang="scss" scoped>
.qrcode {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}

.qrcode-box {
  .qrcode-2233 {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.qrcode-tip {
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
