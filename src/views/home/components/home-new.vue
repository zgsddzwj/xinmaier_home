<template>
  <HomePanel title="产业学院" sub-title="新迈尔产业学院建设优势">
    <div>
      <!-- 面板内容 -->
      <ul class="home-college">
        <li v-for="(item, index) in contents" :key="index" class="college-card">
          <RouterLink :to="`/`">
            <i class="icon" :class="item.icon"></i>
            <p class="title">{{ item.title }}</p>
            <ul class="content">
              <li
                class="content-item"
                v-for="(sub, subIdx) in item.list"
                :key="subIdx"
              >
                {{ sub }}
              </li>
            </ul>
          </RouterLink>
        </li>
      </ul>
    </div>
  </HomePanel>
</template>
<script>
import { ref } from "vue";
import HomePanel from "./home-panel";
export default {
  name: "HomeNew",
  components: { HomePanel },
  setup() {
    const contents = ref([
      {
        title: "学科建设做贡献",
        icon: "iconfont icon-xuekejianshe",
        list: [
          "以产业发展、人才需求为导向",
          "基于培养目标，推动“三教改革”",
          "精品教材、在线精品课、教学资源库",
          "共建双师型人才培养基地",
          "以赛促教”“以赛促学”“以赛促改”"
        ]
      },
      {
        title: "学生管理做标杆",
        icon: "iconfont icon-xueshengguanli",
        list: [
          "一个中心：赋能就业",
          "两种爱：温暖的、严厉的",
          "三个行动：每日一运动、一读书、一分享",
          "“准职业人”训练",
          "创新精神培养"
        ]
      },
      {
        title: "引产入校有效果",
        icon: "iconfont icon-chanyejishulianmeng",
        list: [
          "建设校内外产业融合实训基地",
          "建立校内项目交付中心",
          "引入真实、完整实训项目",
          "实现工学交替",
          "技能巩固与产值收入双达标"
        ]
      },
      {
        title: "学生就业有质量",
        icon: "iconfont icon-jiuye",
        list: [
          "企业入驻基地形成产业群",
          "降低企业用人成本",
          "融合教育链、人才链、产业链、创新链",
          "技能补差，技能抽查",
          "学习期间全程就业指导"
        ]
      }
    ]);

    return { contents };
  }
};
</script>
<style scoped lang="less">
.home-college {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 406px;
  background-color: #e9ecf1;
  .college-card {
    background-color: white;
    margin: 20px 0;
    border-radius: 5px;
    &:first-child {
      margin-left: 40px;
    }
    &:last-child {
      margin-right: 40px;
    }
    .icon {
      margin: 40px 0 0 48px;
      padding: 0%;
      font-size: 60px;
      color: @baseColor;
      &:hover {
        color: white;
      }
      display: block;
    }
    .title {
      font-size: 22px;
      margin: 0 48px;
    }
    .hoverShadow();
    .content {
      width: 306px;
      padding: 20px 0 0 40px;
      list-style: disc;
      li {
        margin: 0 10px 5px 10px;
      }
    }
  }
}
</style>
