
<template>
    <!-- <el-scrollbar class="a"> -->
    <el-menu :default-active="defaultActive" router class="container">
      <BaseLeftSubMenu :menu="menu" v-for="menu in menuList" :key="menu.categoryId"></BaseLeftSubMenu>
    </el-menu>
    <!-- </el-scrollbar> -->
  </template>
  
  <script >
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import BaseLeftSubMenu from "./base-left-sub-menu.vue";
  import { ref, onMounted, onUnmounted, defineProps } from "vue";


  export default {
  name: 'BaseLeftMenu',
  props: {
    menuList: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props) {
    const defaultActive = computed(
    () => useRoute().meta?.parentMenu || useRoute().categoryId
  );
  return { defaultActive }

  }
}
  </script>
  <style lang="less" scoped>
  .container {
    width: 220px;
    margin-right: 20px;
    height: 100%;
    .el-header {
      @include flex(space-between);
      border-bottom: solid 1px var(--el-menu-border-color);
      .float-left {
        @include flex(flex-start);
      }
      .float-right {
        @include flex(flex-end);
      }
    }
    .el-aside {
      width: auto;
    }
  }
  // .a {
  //   width: 220px;
  //   padding-right: 20px;
  // }
  </style>
  