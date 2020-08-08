/**
 * 自动导出该文件夹下所有函数
 * export xxx 可以直接 Utils.xxx 调用
 * export default yyy 可以使用 Utils.文件名 调用
 */

const files = require.context('.', false, /\.ts$/)
const Utils: { [key: string]: any } = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  const funcs = { ...files(key) }
  for (const name in funcs) {
    if (name === 'default') {
      Utils[key.replace(/(\.\/|\.ts)/g, '')] = funcs.default
      break
    }
    Utils[name.replace(/(\.\/|\.ts)/g, '')] = funcs[name]
  }
})

export default Utils
