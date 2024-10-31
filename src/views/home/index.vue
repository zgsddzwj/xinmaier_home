<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <!-- 广告 -->
    <HomeBanner />
    <!-- 产业学院 -->
    <HomeNew />
    <!-- 实训基地 -->
    <HomeIntro />
    <!-- 校企合作 -->
    <HomeBrand />
    <!-- 合作伙伴 -->
    <HomePartner />
  </div>
</template>
<script>
// import HomeCategory from './components/home-category'
import HomeBanner from "./components/home-banner";
import HomeNew from "./components/home-new";
import HomeBrand from "./components/home-brand";
import HomeSpecial from "./components/home-special";
import HomeIntro from "./components/home-intro.vue";
import HomePartner from "./components/home-partner.vue";
export default {
  name: "HomePage",
  components: {
    HomeBanner,
    HomeNew,
    HomeBrand,
    HomeSpecial,
    HomeIntro,
    HomePartner
  }
};
</script>
<style scoped lang="less">
.home-entry {
  background: white;
}

.container {
  width: 1440px;
  margin: 0 auto;
  position: relative;
}
</style>
