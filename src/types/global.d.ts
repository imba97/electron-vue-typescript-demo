import Vue from 'vue'
import { RequestInfo, Response } from 'node-fetch'
import { ElMessage } from 'element-ui/types/message'
import { Store } from 'vuex'

// 模块补充
declare module 'vue/types/vue' {
  // 全局
  interface VueConstructor {
    elStore: any
    appSetup: any
    http: any
  }
  // 实例
  interface Vue {
    $elStore: any
    $appSetup: any
    $http: any
  }
}

declare global {
  const __static: string

  interface Object {
    urls: any
    headers: any
  }
}
