<template>
  <!-- 占位用 -->
  <header class="app-header"></header>
</template>

<script>
import AppHeaderNav from "./app-header-nav";
export default {
  name: "AppHeader",
  components: { AppHeaderNav }
};
</script>

<style scoped lang="less">
.app-header {
  background: #fff;
  height: 80px;
}
</style>
