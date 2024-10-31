<template>
  <HomePanel title="校企合作">
    <div
      ref="box1Ref"
      class="box1"
      @mouseenter="itementer"
      @mouseleave="itemleave"
    >
      <ul v-if="brands1.length" class="list" ref="list1Ref">
        <li v-for="item in brands1" :key="item.id">
          <a href="javascript:;">
            <img :src="item.picture" alt="" />
            <div class="desc-bg">
              <div class="desc">{{ item.desc }}</div>
            </div>
          </a>
        </li>
      </ul>
      <ul ref="list1Ref2" class="list"></ul>
    </div>
    <div
      ref="box2Ref"
      class="box2"
      @mouseenter="itementer"
      @mouseleave="itemleave"
    >
      <ul v-if="brands2.length" class="list" ref="list2Ref">
        <li v-for="item in brands2" :key="item.id">
          <a href="javascript:;">
            <img :src="item.picture" alt="" />
            <div class="desc-bg">
              <div class="desc">{{ item.desc }}</div>
            </div>
          </a>
        </li>
      </ul>
      <ul ref="list2Ref2" class="list"></ul>
    </div>
  </HomePanel>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import HomePanel from "./home-panel";
import img1 from "@/assets/images/partner_pic/partner_pic1.jpg";
import img2 from "@/assets/images/partner_pic/partner_pic2.jpg";
import img3 from "@/assets/images/partner_pic/partner_pic3.jpg";
import img4 from "@/assets/images/partner_pic/partner_pic4.jpg";
import img5 from "@/assets/images/partner_pic/partner_pic5.png";
import img6 from "@/assets/images/partner_pic/partner_pic6.jpg";
import img7 from "@/assets/images/partner_pic/partner_pic7.jpg";
import img8 from "@/assets/images/partner_pic/partner_pic8.jpg";
import img9 from "@/assets/images/partner_pic/partner_pic9.jpg";
import img10 from "@/assets/images/partner_pic/partner_pic10.jpg";
import img11 from "@/assets/images/partner_pic/partner_pic11.jpg";
import img12 from "@/assets/images/partner_pic/partner_pic12.jpg";
import img13 from "@/assets/images/partner_pic/partner_pic13.jpg";
import img14 from "@/assets/images/partner_pic/partner_pic14.jpg";
import img15 from "@/assets/images/partner_pic/partner_pic15.jpg";
import img16 from "@/assets/images/partner_pic/partner_pic16.jpg";
import img17 from "@/assets/images/partner_pic/partner_pic17.jpg";
import img18 from "@/assets/images/partner_pic/partner_pic18.jpg";
import img19 from "@/assets/images/partner_pic/partner_pic19.png";
import img20 from "@/assets/images/partner_pic/partner_pic20.png";
import img21 from "@/assets/images/partner_pic/partner_pic21.jpg";
import img22 from "@/assets/images/partner_pic/partner_pic22.jpg";
import img23 from "@/assets/images/partner_pic/partner_pic23.png";
import { resultProps } from "element-plus";

export default {
  name: "HomeBrand",
  components: { HomePanel },
  setup() {
    const { target, result } = {
      target: "操作成功",
      result: [
        {
          picture: img1,
          desc: "2015大数据师资培训合影"
        },
        {
          picture: img2,
          desc: "2017年暑期合作院校师资培训"
        },
        {
          picture: img3,
          desc: "2018.2安徽省国培VR师资培训"
        },
        {
          picture: img4,
          desc: "新迈尔教育-XUI师资评级"
        },
        {
          picture: img5,
          desc: "安阳幼儿签约合影"
        },
        {
          picture: img6,
          desc: "宝鸡签约合影"
        },
        {
          picture: img7,
          desc: "湖南高速铁路签约合影"
        },
        {
          picture: img8,
          desc: "湖南幼儿产业学院成立大会合影"
        },
        {
          picture: img9,
          desc: "济宁职院签约合影"
        },
        {
          picture: img10,
          desc: "泸州职院签约合影"
        },
        {
          picture: img11,
          desc: "威海海洋签约合议庭"
        },
        {
          picture: img12,
          desc: "潍坊职业技术学院签约合影"
        },
        {
          picture: img13,
          desc: "岳阳职业技术学院签约"
        },
        {
          picture: img14,
          desc: "郑信科签约合影"
        },
        {
          picture: img15,
          desc: "2023年下学期期中益阳职院表彰大会合影"
        },
        {
          picture: img16,
          desc: "湖南幼儿职业规划大赛"
        },
        {
          picture: img17,
          desc: "华为专家高校行 益阳职院专场"
        },
        {
          picture: img18,
          desc: "山东艺术生日会照片"
        },
        {
          picture: img19,
          desc: "威海海洋户外拓展活动"
        },
        {
          picture: img20,
          desc: "威海海洋篮球赛活动"
        },
        {
          picture: img21,
          desc: "益阳华为云学生干部换届"
        },
        {
          picture: img22,
          desc: "益阳职院授课照片"
        },
        {
          picture: img23,
          desc: "职业素养户外活动照片"
        }
      ]
    };

    const box1Ref = ref(null);
    const list1Ref = ref(null);
    const list1Ref2 = ref(null);

    const box2Ref = ref(null);
    const list2Ref = ref(null);
    const list2Ref2 = ref(null);

    let timer = null;

    const roll = () => {
      list1Ref2.value.innerHTML = list1Ref.value.innerHTML;
      list1Ref.value.scrollTop = 0;
      list2Ref2.value.innerHTML = list2Ref.value.innerHTML;
      list2Ref.value.scrollTop = 0;
      if (timer) clearInterval(timer);
      timer = setInterval(rollStart, 10);
    };

    const rollStart = () => {
      if (box1Ref.value) {
        if (box1Ref.value.scrollLeft >= list1Ref.value.scrollWidth) {
          box1Ref.value.scrollLeft = 0;
        } else {
          box1Ref.value.scrollLeft += 1;
        }
      }
      if (box2Ref.value) {
        if (box2Ref.value.scrollLeft >= list2Ref.value.scrollWidth) {
          box2Ref.value.scrollLeft = 0;
        } else {
          box2Ref.value.scrollLeft += 1;
        }
      }
    };

    const itementer = () => {
      clearInterval(timer);
    };

    const itemleave = () => {
      timer = setInterval(rollStart, 10);
    };

    onMounted(() => {
      roll();
    });

    onUnmounted(() => {});

    return {
      brands1: result.splice(0, 11),
      brands2: result,
      box1Ref,
      list1Ref,
      list1Ref2,
      box2Ref,
      list2Ref,
      list2Ref2,
      itementer,
      itemleave
    };
  }
};
</script>

<style scoped lang="less">
.skeleton {
  .item {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
// .home-panel {
//   background:#f5f5f5
// }
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @baseColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box1,
.box2 {
  display: flex;
  width: 100%;
  height: 240px;
  overflow: hidden;
  .list {
    display: flex;
    position: relative;
    li {
      margin-right: 10px;
      min-width: 360px;
      position: relative;

      img {
        position: absolute;
        width: 360px;
        height: 230px;
      }
      .desc-bg {
        opacity: 0;
        &:hover {
          opacity: 1;
        }
        position: absolute;
        width: 360px;
        height: 230px;
        background-color: rgba(20, 20, 20, 0.8);
        .desc {
          position: absolute;
          color: white;
          top: 105px;
          width: 100%;
          text-align: center;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
