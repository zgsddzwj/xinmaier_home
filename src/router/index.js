import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const Goods = () => import('@/views/goods/index')
// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/intro',   component: () =>import("@/views/intro/index") },
      { path: '/product/:id', component: Goods },
      
      {
        path: "/techplat",
        component: () => import("@/views/techplat/index.vue"),
      },
      {
        path: "/college",
        component: () => import("@/views/college/index.vue"),
      },
      {
        path: "/case",
        component: () => import("@/views/case/index.vue"),
      },
      {    
        path: "/detail/:id",
        component: () => import("@/views/detail/index.vue"),
      },
      {
        path: "/news",
        component: () => import("@/views/news/index.vue"),
      }
    ]
  },
]

// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior () {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 需要登录的路由：地址是以 /member 开头
  // const { profile } = store.state.user
  // if (!profile.token && to.path.startsWith('/member')) {
  //   return next('/login?redirectUrl=' + encodeURIComponent(to.fullPath))
  // }
  // next()

  // // 根据屏幕分辨率执行跳转逻辑
  // const screenWidth = window.screen.width;
  //   if (screenWidth <= 768) {
  //     // 如果分辨率小于等于768，跳转到域名A
  //     //服务器配置
  //     window.location.href = 'http://demo.hyxdsoft.com/web10002/m10002';
  //   }

    next(); // 继续执行路由跳转

});

export default router
