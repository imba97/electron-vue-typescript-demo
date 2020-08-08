import Vue from 'vue'

export default class User {
  public static get isLogin(): boolean {
    console.log('set isLogin :', !!Vue.elStore.get('currentUser'))
    return !!Vue.elStore.get('currentUser')
  }
}
