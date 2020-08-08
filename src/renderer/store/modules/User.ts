import { MutationTree, GetterTree } from 'vuex'

export interface States {
  uid: number
}

const state: States = {
  uid: 0
}

const getters: GetterTree<States, any> = {}

const mutations: MutationTree<any> = {
  uid(state: States, uid): void {
    console.log('before commit', state.uid)
    state.uid = uid
    console.log('after commit', state.uid)
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions,
  getters
}
