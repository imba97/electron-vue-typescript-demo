import Vue from 'vue'

export const $alert = (message: string) => {
  Vue.prototype
    .$alert(message, '提示', {
      confirmButtonText: '确定',
      customClass: 'b-alert',
    })
    .then()
    .catch(() => {})
}
