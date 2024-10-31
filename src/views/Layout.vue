<template>
  <!-- 吸顶头部 -->
  <AppHeaderSticky v-show="showMenu" />
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <RouterView />
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>
<script>
import AppFooter from "@/components/app-footer";
import AppHeaderSticky from "@/components/app-header-sticky";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Layout",
  components: {
    AppFooter,
    AppHeaderSticky
  },
  // 获取下分类数据
  setup() {
    const store = useStore();
    store.dispatch("menu/getList");
    const showMenu = computed(() => {
      return store.state.menu.showMenuList;
    });
    return { showMenu };
  }
};
</script>
<style scoped lang="less">
.app-body {
  min-height: 100vh;
}
</style>
