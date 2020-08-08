export enum urlType {
  NETWORK,
  LOCAL
}

export class Url {
  constructor(private _url: string, private _type: urlType) {}

  // 首页
  public static readonly INDEX_MOBILE_FEED = new Url( 'https://app.bilibili.com/x/v2/feed/index', urlType.NETWORK )
  // 分区信息
  public static readonly INDEX_REGION = new Url( 'https://api.bilibili.com/x/web-interface/dynamic/region?ps=?&rid=?', urlType.NETWORK )
  // 获取登录二维码
  public static readonly LOGIN_QRCODE_URL = new Url( 'http://passport.bilibili.com/qrcode/getLoginUrl', urlType.NETWORK )
  // 登录二维码状态
  public static readonly LOGIN_QRCODE_GET_INFO = new Url( 'http://passport.bilibili.com/qrcode/getLoginInfo?oauthKey=?', urlType.NETWORK )
  // 用户信息
  public static readonly USER_INFO = new Url( 'https://api.bilibili.com/x/space/acc/info?mid=?', urlType.NETWORK )
  // 退出登录
  public static readonly USER_LOGOUT = new Url( 'http://passport.bilibili.com/login?act=exit&DedeUserID=?&DedeUserID__ckMd5=?&SESSDATA=?&bili_jct=?', urlType.NETWORK )
  // 登录用户信息
  public static readonly USER_LOGGEDIN_INFO = new Url( 'http://api.bilibili.com/nav?SESSDATA=?', urlType.NETWORK )

  getType(): urlType {
    return this._type
  }

  /**
   * 替换参数
   */
  static replaceUrlParams(
    url: string,
    params: { [key: string]: any }
  ): string {
    Object.keys(params).forEach(key => {
      url = url.replace(new RegExp(`(${key}=)\\?`), `$1${params[key]}`)
    })

    return url
  }


  get url(): string {
    return this.getType() === urlType.LOCAL ? `file:///${this._url}` : this._url
  }

}
