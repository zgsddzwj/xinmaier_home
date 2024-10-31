<template>
  <div class="goods-hot">
    <h3>推荐产品</h3>
    <div v-if="goodsList">
      <GoodsItem v-for="item in goodsList" :key="item.id" :goods="item" />
    </div>
  </div>
</template>
<script>
import GoodsItem from "@/views/goods/components/goods-item";
import { computed, ref } from "vue";
import { findGoodsHot } from "@/api/product";
import { useRoute } from "vue-router";
export default {
  name: "GoodsHot",
  components: { GoodsItem },
  props: {
    // 热榜类型
    type: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    // 发请求获取数据
    const route = useRoute();
    const goodsList = ref([]);
    let location = 10;
    findGoodsHot(location).then(data => {
      goodsList.value = data.data.list;
    });
    return { goodsList };
  }
};
</script>
<style scoped lang="less">
.goods-hot {
  h3 {
    height: 70px;
    background: #036e99;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  :deep(.goods-item) {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 200px;
      height: 200px;
    }
    p {
      margin: 0 10px;
    }
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>
