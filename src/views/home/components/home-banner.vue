<template>
  <div class="home-banner">
    <BaseCarousel auto-play :sliders="sliders" style="width: 100%;" />
  </div>
</template>
<script>
import { ref } from "vue";
// import { findAd } from "@/api/home";
import img1 from "./assets/banner/banner1.jpg";
import img2 from "./assets/banner/banner2.png";
import img3 from "./assets/banner/banner3.png";
import img4 from "./assets/banner/banner4.png";
import img5 from "./assets/banner/banner5.png";
export default {
  name: "HomeBanner",
  setup() {
    // 获取轮播图数据
    const sliders = ref([]);
    // findAd("homeCarousel").then(data => {
    //   sliders.value = data.data.list;
    // });
    sliders.value = [
      {
        adId: 1,
        title: "",
        filePath: img1,
        linkUrl: "/",
        status: null
      },
      {
        adId: 2,
        title: "",
        filePath: img2,
        linkUrl: "/",
        status: null
      },
      {
        adId: 3,
        title: "",
        filePath: img3,
        linkUrl: "/",
        status: null
      },
      {
        adId: 4,
        title: "",
        filePath: img4,
        linkUrl: "/",
        status: null
      },
      {
        adId: 5,
        title: "",
        filePath: img5,
        linkUrl: "/",
        status: null
      }
    ];
    return { sliders };
  }
};
</script>
<style scoped lang="less">
.home-banner {
  min-width: 1440px;
  min-height: 558px;
  width: 100%;
  height: 45vw;
  // position: absolute;
  // left: 0;
  // top: 0;
  // z-index: 98;
}
</style>
