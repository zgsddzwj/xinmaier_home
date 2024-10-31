<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <div class="title">{{ title }}</div>
        <div class="line"></div>
        <!-- <div class="head-desc">{{ subTitle }}</div> -->
      </div>
      <!-- 默认插槽，面板内容 -->
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePanel",
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subTitle: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped lang="less">
.home-panel {
  .container {
    width: 100%;
    .head {
      margin: 50px auto;
      padding: 20px 0;
      text-align: center;
      .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .line {
        width: 60px;
        height: 4px;
        background-color: @baseColor;
        margin: 10px auto;
      }

      .head-desc {
        font-size: 18px;
        font-weight: normal;
        color: rgb(105, 105, 105);
      }
    }
  }
}
</style>
