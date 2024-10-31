<template>
  <div class="home-intro">
    <HomePanel title="产业基地" sub-title="产业企业实习实训基地">
      <div class="body">
        <RouterLink :to="`/`">
          <img src="./assets/shixishixun.png" alt="" />
        </RouterLink>
      </div>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from "./home-panel";

export default {
  name: "HomeIntro",
  components: { HomePanel },
  setup() {
    return {};
  }
};
</script>
<style scoped lang="less">
.home-intro {
  height: 980px;
  .body {
    width: 1440px;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
    }
  }
}
</style>
