
<template>
    <el-sub-menu :index="'/news/' + menu.categoryId" v-if="menu.children">
      <template #title>
        <!-- <el-icon><i-ep-menu /></el-icon> -->
        <span>{{ menu.name }}</span>
      </template>
      <BaseLeftSubMenu
        :menu="menuItem"
        v-for="menuItem in menu.children"
        :key="menuItem.categoryId"
      ></BaseLeftSubMenu>
    </el-sub-menu>
    <el-menu-item :index="'/news/' + menu.categoryId" v-else>
      <!-- <el-icon><i-ep-menu /></el-icon> -->
      <template #title>{{ menu.name }}</template>
    </el-menu-item>
  </template>
  
  <script>
    export default {
    name: 'BaseLeftSubMenu',
    props: {
        menu: {
        type: Object,
        default: () => ({}),
      }
    },
 }
</script>
  