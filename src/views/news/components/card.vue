<template>
  <div class="card">
    <img :src="item.icon" alt="" />
    <div class="left"></div>
    <div class="right">
      <div class="title">{{ item.title }}</div>
      <div class="date">
        {{ item.date }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Case",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped lang="less">
.card {
  width: 100%;
  height: 160px;
  background: #ffffff;
  box-shadow: 0 0 9px 0 #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin: 30px auto;
  display: flex;
  position: relative;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.02);
    transition: all 0.5s;
    .right {
        color: @baseColor;
    }
  }

  img {
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    height: 160px;
    object-fit: fill;
  }

  .left {
    width: 15px;
    height: 15px;
    background-color: rgb(255, 255, 255);
    transform: rotate(45deg);
    position: absolute;
    left: 275px;
    top: 70px;
  }

  .right {
    color: #333;
    padding: 40px;

    .title {
      width: 910px;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;
      padding-bottom: 14px;
    }

    .date {
      margin-top: 20px;
      font-size: 16px;
      line-height: 20px;
      color: @baseColor;
    }
  }
}
</style>
