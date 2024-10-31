import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自己UI组件库
import UI from '@/components/library'
//导入视频css文件
import "video.js/dist/video-js.css";
// 1. 重置样式的库
import 'normalize.css'
// 2. 自己项目的重置样式和公用样式
import '@/assets/styles/common.less'
import './assets/iconfont/iconfont.css'

// 导入ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

createApp(App).use(store).use(router).use(UI).use(ElementPlus).mount('#app')
