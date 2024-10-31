<template>
  <div class="app-header-sticky">
    <div class="body">
      <h1 class="logo"><RouterLink to="/">新迈尔科技</RouterLink></h1>
      <!-- 使用头部导航组件 -->
      <AppHeaderNav class="nav" />
    </div>
  </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
import { useWindowScroll } from "@vueuse/core";
import AppHeaderNav from "./app-header-nav";
export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },
  setup() {
    const { y } = useWindowScroll();
    return { y };
  }
};
</script>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  // left: calc(50% - 720px);
  top: 0;
  z-index: 999;
  background-color:#fff;
  border-bottom: 1px solid #e4e4e4;
  .body {
    width: 1440px;
    position: fixed;
    left: calc(50% - 750px);
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      min-width: 200px;
      height: 80px;
      padding-bottom: 30px;
      margin-right: 90px;
      a {
        display: block;
        height: 80px;
        width: 100%;
        text-indent: -9999px;
        background: url(../assets/images/logo.png) no-repeat center 3px /
          contain;
      }
    }
  }
}
</style>
