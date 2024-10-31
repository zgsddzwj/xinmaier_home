<template>
  <div class="home-partner">
    <HomePanel
      title="战略合作"
      sub-title="我们期待与您一起迈上高质量发展的新台阶"
    >
      <div class="body">
        <div class="content">
          <div class="school">
            <div class="content-title">合作院校</div>
            <div class="school-box">
              <div class="school-content" v-for="item in schools">
                <img :src="item.icon" alt="" />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
          <div class="company">
            <div class="content-title">合作企业</div>
            <div class="company-box">
              <div class="company-content" v-for="item in companies">
                <img
                  :src="item.icon"
                  alt=""
                  :class="item.mode === 2 ? 'cover' : 'normal'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePanel>
  </div>
</template>
<script>
import { ref } from "vue";
import icon1 from "@/views/home/components/assets/schools/icon1.jpg";
import icon2 from "@/views/home/components/assets/schools/icon2.jpeg";
import icon3 from "@/views/home/components/assets/schools/icon3.jpg";
import icon4 from "@/views/home/components/assets/schools/icon4.jpg";
import icon5 from "@/views/home/components/assets/schools/icon5.jpg";
import icon6 from "@/views/home/components/assets/schools/icon6.jpg";
import icon7 from "@/views/home/components/assets/schools/icon7.jpg";
import icon8 from "@/views/home/components/assets/schools/icon8.jpg";
import icon9 from "@/views/home/components/assets/schools/icon9.jpg";
import icon10 from "@/views/home/components/assets/schools/icon10.jpg";
import icon11 from "@/views/home/components/assets/schools/icon11.jpg";
import icon12 from "@/views/home/components/assets/schools/icon12.jpg";
import icon13 from "@/views/home/components/assets/schools/icon13.jpg";
import icon14 from "@/views/home/components/assets/schools/icon14.jpg";

import image1 from "@/views/home/components/assets/companies/icon1.png";
import image2 from "@/views/home/components/assets/companies/icon2.png";
import image3 from "@/views/home/components/assets/companies/icon3.jpg";
import image4 from "@/views/home/components/assets/companies/icon4.jpg";
import image5 from "@/views/home/components/assets/companies/icon5.png";
import image6 from "@/views/home/components/assets/companies/icon6.jpg";
import image7 from "@/views/home/components/assets/companies/icon7.png";
import image8 from "@/views/home/components/assets/companies/icon8.jpg";
import image9 from "@/views/home/components/assets/companies/icon9.jpg";
import image10 from "@/views/home/components/assets/companies/icon10.jpg";
import image11 from "@/views/home/components/assets/companies/icon11.png";
import image12 from "@/views/home/components/assets/companies/icon12.png";
import image13 from "@/views/home/components/assets/companies/icon13.jpg";
import image14 from "@/views/home/components/assets/companies/icon14.jpg";
import image15 from "@/views/home/components/assets/companies/icon15.jpg";
import image16 from "@/views/home/components/assets/companies/icon16.png";
import image17 from "@/views/home/components/assets/companies/icon17.png";
import image18 from "@/views/home/components/assets/companies/icon18.png";
import image19 from "@/views/home/components/assets/companies/icon19.jpg";
import image20 from "@/views/home/components/assets/companies/icon20.png";
import HomePanel from "./home-panel";

export default {
  name: "HomePartner",
  components: { HomePanel },
  setup() {
    const schools = ref([
      {
        name: "河南艺术职业学校",
        icon: icon1
      },
      {
        name: "宝鸡职业技术学院",
        icon: icon2
      },
      {
        name: "岳阳职业技术学院",
        icon: icon3
      },
      {
        name: "益阳职业技术学院",
        icon: icon4
      },
      {
        name: "泸州职业技术学院",
        icon: icon5
      },
      {
        name: "潍坊职业学院",
        icon: icon6
      },
      {
        name: "威海海洋职业学院",
        icon: icon7
      },
      {
        name: "聊城职业技术学院",
        icon: icon8
      },
      {
        name: "济宁职业技术学院",
        icon: icon9
      },
      {
        name: "郑州信息技术职业学院",
        icon: icon10
      },
      {
        name: "山东艺术设计职业学院",
        icon: icon11
      },
      {
        name: "湖南高速铁路职业技术学院",
        icon: icon12
      },
      {
        name: "湖南幼儿师范高等专科学校",
        icon: icon13
      },
      {
        name: "安阳幼儿师范高等专科学校",
        icon: icon14
      }
    ]);

    const companies = ref([
      {
        icon: image1,
        mode: 1
      },
      {
        icon: image2,
        mode: 1
      },
      {
        icon: image3,
        mode: 1
      },
      {
        icon: image8,
        mode: 1
      },
      {
        icon: image9,
        mode: 1
      },
      {
        icon: image10,
        mode: 1
      },
      {
        icon: image11,
        mode: 1
      },
      {
        icon: image12,
        mode: 1
      },
      {
        icon: image14,
        mode: 1
      },
      
     
      {
        icon: image17,
        mode: 1
      },
      {
        icon: image18,
        mode: 1
      },
      {
        icon: image19,
        mode: 1
      },
      {
        icon: image20,
        mode: 1
      },
      {
        icon: image16,
        mode: 1
      },
      {
        icon: image15,
        mode: 2
      },
      {
        icon: image13,
        mode: 1
      },
      {
        icon: image4,
        mode: 2
      },
      {
        icon: image5,
        mode: 2
      },
      {
        icon: image6,
        mode: 1
      },
      {
        icon: image7,
        mode: 1
      }
    ]);

    return { schools, companies };
  }
};
</script>
<style scoped lang="less">
.home-partner {
  // height: 700px;
  .body {
    text-align: center;
    min-width: 1440px;
    .title {
      font-size: 30px;
      font-weight: bold;
      padding-top: 20px;
      margin-bottom: 5px;
    }
    .desc {
      font-size: 18px;
      color: rgb(105, 105, 105);
      margin-bottom: 20px;
    }
    .content {
      margin-bottom: 50px;
      .content-title {
        font-size: 25px;
        margin: 20px;
      }
      .school {
        .school-box {
          margin-top: 50px;
          margin-left: 110px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          .school-content {
            width: 330px;
            height: 100px;
            display: flex;
            img {
              width: 55px;
              height: 55px;
            }
            span {
              color: #333;
              height: 55px;
              line-height: 55px;
              font-size: 19px;
              margin-left: 20px;
            }
          }
        }
      }
      .company {
        .company-box {
          display: flex;
          flex-wrap: wrap;
          margin-left: 20px;
          justify-content: flex-start;
          .company-content {
            // border: 1px solid #333;
            width: 280px;
            height: 120px;
            img {
              object-fit: contain;
            }
            .normal {
              width: 120px;
              height: 120px;
            }
            .cover {
              margin-top: 20px;
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
