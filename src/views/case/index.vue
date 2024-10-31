<template>
  <div class="body">
    <div class="top">
      <div class="top-content">
        <div class="title">部分产业学院合作案例</div>
      </div>
    </div>
    <div class="list" v-for="item in cases" :key="item.title">

      <RouterLink :to="`${item.path}`">
        <Card :item="item" />
      </RouterLink>
    </div>
  </div>
</template>
<script>
import Card from "./components/card.vue";

import img1 from "./images/image1.png";
import img2 from "./images/image2.png";
import img3 from "./images/image3.png";
import img4 from "./images/image4.png";
import img5 from "./images/image5.png";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.png";
import img8 from "./images/image8.png";
import img9 from "./images/image9.png";
import img10 from "./images/image10.jpg";
import img11 from "./images/image11.png";
import img12 from "./images/image12.png";
import img13 from "./images/image13.png";
import { ref } from "vue";

export default {
  name: "Case",
  components: {
    Card
  },
  setup() {
    const cases = ref([

      {
        icon: img12,
        title: "益阳职业技术学院",
        path: "/detail/1",
        college:"华为云学院",
        subject:"计算机应用技术、计算机网络技术、软件技术"
      },
      {
        icon: img4,
        title: "湖南高速铁路职业技术学院",
        path: "/detail/2",
        college:"智能技术产业学院",
        subject:"物联网应用技术、人工智能技术应用、软件技术"
      },
      {
        icon: img5,
        title: "湖南幼儿师范高等专科学校",
        path: "/detail/3",
        college:"现代信息技术产业学院",
        subject:"计算机应用技术、软件技术专业"
      },
      {
        icon: img13,
        title: "郑州信息科技职业学院",
        path: "/detail/4",
        college:"凯文-新迈尔数字产业学院",
        subject:"视觉传达艺术设计、数字媒体艺术设计、室内艺术设计专业"
      },
      {
        icon: img9,
        title: "山东艺术设计职业学院",
        path: "/detail/5",
        college:"凯文新迈尔数字艺术学院",
        subject:"工业设计 (UI设计方向)、 软件技术 (大数据 Python方向)、 虚拟现实技术应用、全媒体广告策划与营销"
      },
      {
        icon: img8,
        title: "泸州职业技术学院",
        path: "/detail/6",
        college:"凯文-新迈尔数字产业学院",
        subject:"数字媒体技术、动漫制作技术、艺术设计、环境艺术设计专业"
      },
      {
        icon: img11,
        title: "潍坊职业学院",
        path: "/detail/7",
        college:"华为云产业学院",
        subject:"计算机应用技术（UI设计方向）、电子商务（新媒体运营方向）、虚拟现实应用技术（建筑表现方向）、云计算技术应用（大数据运维方向）"
      },
      {
        icon: img10,
        title: "威海海洋职业学院",
        path: "/detail/8",
        college:"凯文新迈尔数字艺术学院",
        subject:"工业设计 (UI设计方向)、 软件技术 (大数据 Python方向)、 虚拟现实技术应用、全媒体广告策划与营销"
      },
      {
        icon: img6,
        title: "济宁职业技术学院",
        path: "/detail/9",
        college:"新迈尔数字媒体学院",
        subject:"环境艺术设计（VR虚拟现实）专业、广告设计与制作（UI前端交互）专业"
      },
      {
        icon: img2,
        title: "宝鸡职业技术学院",
        path: "/detail/10",
        college:"新迈尔电子商务产业学院",
        subject:"电子商务、数字媒体技术专业"
      },
      {
        icon: img1,
        title: "安阳幼儿师范高等专科学校",
        path: "/detail/11",
        college:"数字艺术产业学院",
        subject:"广告艺术设计（ui设计）艺术设计（VR设计）"
      },

      {
        icon: img7,
        title: "聊城职业技术学院",
        path: "/detail/12",
        college:"市场营销（网络营销方向）",
        subject:""
      },
      {
        icon: img3,
        title: "河南艺术职业技术学院",
        path: "/detail/13",
        college:"文化传播学院",
        subject:"虚拟现实应用技、虚拟现实应用技（次世代游戏）、云计算技术应用、云计算技术应用（云安全）、云计算技术应用（系统运维）"
      },
    ]);

    return { cases };
  }
};
</script>

<style scoped lang="less">
.body {
  .top {
    margin-top: 80px;
    background-image: url(./images/banner_case.png);
    background-size: cover;
    height: 284px;

    .top-content {
      width: 1440px;
      height: 284px;
      margin: 0 auto;

      .title {
        font-size: 45px;
        font-weight: 600;
        color: #ffffff;
        line-height: 70px;
        padding-top: 100px;
      }
    }
  }
  .list {
    width: 1440px;
    margin: 0 auto;
  }
}
</style>
