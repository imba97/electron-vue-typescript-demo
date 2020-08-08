/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

import { ModuleTree } from 'vuex'

const files = require.context('.', false, /\.ts$/)
const modules: ModuleTree<any> = {}

files.keys().forEach(key => {
  if (key === './index.ts') return
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default modules
