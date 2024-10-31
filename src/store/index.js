import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 三个模块
import category from './modules/category'
import menu from './modules/menu'
export default createStore({
  modules: {
    category,
    menu
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
      // 本地存储名字
      key: 'hdcms-store',
      // 指定需要存储的模块
      paths: ['menu']
    })
  ]
})
