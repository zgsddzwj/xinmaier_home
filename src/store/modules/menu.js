// 分类模块
import { topMenu } from '@/api/constants'
import { findAllMenu } from '@/api/menu'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合，依赖topMenu重新设置，保证初始化就要数据，不至于白屏
      list: topMenu.map(item => ({ name: item })),
      // 是否显示导航栏
      showMenuList: true
    }
  },
  // 修改分类函数
  mutations: {
    // payload 所有的分类集合
    setList (state, payload) {
      state.list = payload
    },
    // 定义show和hide函数，控制当前分类的二级分类显示和隐藏
    show (state, menuId) {
      const currMenu = state.list.find(item => item.menuId === menuId)
      currMenu.open = true
    },
    hide (state, menuId) {
      const currMenu = state.list.find(item => item.menuId === menuId)
      currMenu.open = false
    },
    changeMenuList (state, payload) {
      state.showMenuList = payload
    }
  },
  // 获取分类函数
  actions: {
    async getList ({ commit }) {
        // 获取分类数据
        const data = await findAllMenu()
        // 修改分类数据
        commit('setList', data.list)
      }
    }
}
