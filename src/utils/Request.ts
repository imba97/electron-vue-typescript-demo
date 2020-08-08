import qs from 'querystring'
import request from 'request'
import fs from 'fs'
import { mkdirsSync } from './Common'
import Vue from 'vue'
import { Url } from '@/enums/Url'

export default class Request {
  static options: Record<string, any> = {
    headers: {
      referrer: ''
    }
  }

  // 单例
  private static _instance: Request

  public static get instance(): Request {
    if (typeof this._instance === 'undefined') {
      this._instance = new Request()
    }
    return this._instance
  }

  /**
   * 替换参数
   */
  public replaceUrlParams(
    urlName: string,
    params: { [key: string]: any }
  ): string {
    let url = Request.options.urls[urlName]
    Object.keys(params).forEach(key => {
      url = url.replace(new RegExp(`(${key}=)\\?`), `$1${params[key]}`)
    })

    return url
  }

  /**
   * 获取登录二维码
   * @param {Function} callback
   */
  getLoginQRCode(): Promise<JSON> {
    return Vue.http(Url.LOGIN_QRCODE_URL.url).then((response: Response) =>
      response.json()
    )
  }

  /**
   * 获取二维码登录状态
   * 未成功：
   *   -1：秘钥错误
   *   -2：秘钥超时
   *   -4：未扫描
   *   -5：未确认
   * @param {string} oauthKey
   */
  getLoginQRCodeInfo(oauthKey: string) {
    return Vue.http(
      Url.replaceUrlParams(Url.LOGIN_QRCODE_GET_INFO.url, { oauthKey }),
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ oauthKey })
      }
    ).then((response: Response) => response.json())
  }

  /**
   * 获取当前登录用户信息
   * @param {string} SESSDATA
   */
  getLoggedinUserInfo(SESSDATA: string) {
    return Vue.http(
      Url.replaceUrlParams(Url.USER_LOGGEDIN_INFO.url, { SESSDATA }),
      {
        method: 'GET',
        credentials: 'include',
        referrer: Request.options.headers.referrer
      }
    ).then((response: Response) => response.json())
  }

  /**
   * 获取用户信息
   * @param {number} mid
   */
  public getUserInfo(mid: number) {
    return Vue.http(Url.replaceUrlParams(Url.USER_INFO.url, { mid }), {
      method: 'GET',
      referrer: Request.options.headers.referrer
    }).then((response: Response) => response.json())
  }

  /**
   * 获取用户相关图片 存到本地
   * @param {string} fileName     本地图片名
   * @param {string} url          图片链接
   * @param {string} dirPath      文件夹路径
   */
  public getNetworkImage(
    fileName: string,
    url: string,
    dirPath: string
  ): Promise<string> {
    // 图片格式
    const ext = /\.(jpe?g|png|gif)$/.exec(url)![1]
    // 本地存储地址
    const fileLocalPath = `${dirPath}/${fileName}.${ext}`
    // 头像存在则停止执行 并返回图片本地路径
    if (fs.existsSync(fileLocalPath)) {
      return new Promise(resolve => {
        resolve(fileLocalPath)
      })
    }
    // 判断是否存在用户文件夹 没有则创建
    if (!fs.existsSync(dirPath)) mkdirsSync(dirPath)

    let writeStream = fs.createWriteStream(fileLocalPath)

    return new Promise((resolve, reject) => {
      request(url).pipe(writeStream)
      writeStream.on('finish', () => {
        writeStream.close()
        resolve(fileLocalPath)
      })
      writeStream.on('error', err => {
        reject(err)
      })
    })
  }

  /**
   * 退出帐号
   * @param {string} DedeUserID
   * @param {string} DedeUserID__ckMd5
   * @param {string} SESSDATA
   * @param {string} bili_jct
   */
  public userLogout(
    DedeUserID: string,
    DedeUserID__ckMd5: string,
    SESSDATA: string,
    bili_jct: string
  ) {
    return Vue.http(
      Url.replaceUrlParams(Url.USER_LOGOUT.url, {
        DedeUserID,
        DedeUserID__ckMd5,
        SESSDATA,
        bili_jct
      }),
      {
        method: 'GET',
        credentials: 'include',
        referrer: Request.options.headers.referrer
      }
    ).then((response: Response) => response.text())
  }

  public getIndexVideo() {
    return Vue.http(Url.INDEX_MOBILE_FEED.url, {
      method: 'GET',
      credentials: 'include',
      referrer: Request.options.headers.referrer
    }).then((response: Response) => response.json())
  }

  /**
   * 获取分区视频
   * @param {Number} rid
   * @param {Number} ps
   */
  public getRegionVideo(rid: number, ps: number) {
    return Vue.http(Url.replaceUrlParams(Url.INDEX_REGION.url, { rid, ps }), {
      method: 'GET',
      referrer: Request.options.headers.referrer
    }).then((response: Response) => response.json())
  }

  // ===============================================
}
