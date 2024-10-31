<template>
  <div class="base-goods-page">
    <div class="container" v-if="!loading && goods">
      <BaseBread>
        <BaseBreadItem to="/">首页</BaseBreadItem>
        <BaseBreadItem>产品中心</BaseBreadItem>
      </BaseBread>
      <div class="goods-info">
        <div class="spec">
          <GoodsName :goods="goods" />
          <div class="media">
            <GoodsImage :images="goods.image" />
          </div>
          <div class="video-play">
            <BaseVideoPlayer :options="videoOption"></BaseVideoPlayer>
          </div>
          <div>
            <div
              v-if="goods.isPicture == 0"
              class="content-box"
              v-html="goods.content"
            ></div>
            <div
              v-if="goods.isPicture == 1"
              class="content-box"
              style="width: 100%;"
            >
              <div
                v-for="(item, index) in goods.contentImage"
                :key="index"
                style="width: 100%;"
              >
                <img :src="item.filePath" style="width: 100%;" />
              </div>
            </div>
          </div>
        </div>
        <div class="goods-footer">
          <div class="goods-aside">
            <GoodsHot />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading"></div>
  </div>
</template>

<script>
import GoodsImage from "./components/goods-image";
import GoodsName from "./components/goods-name";
import GoodsHot from "./components/goods-hot";
import { nextTick, provide, ref, watch, reactive } from "vue";
import { findGoods } from "@/api/product";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Message from "@/components/library/Message";
export default {
  name: "BaseGoodsPage",
  components: { GoodsImage, GoodsName, GoodsHot },
  setup() {
    const { goods, loading, videoOption } = useGoods();
    // 提供goods数据给后代组件使用
    provide("goods", goods);
    // 加入购物车
    const store = useStore();

    return { goods, loading, videoOption };
  }
};
// 获取产品详情
const useGoods = () => {
  // 出现路由地址产品ID发生变化，但是不会重新初始化组件
  const goods = ref(null);
  const route = useRoute();
  const loading = ref(false);
  const videoOption = ref(null);
  watch(
    () => route.params.id,
    newVal => {
      if (newVal && `/product/${newVal}` === route.path) {
        loading.value = true;
        findGoods(route.params.id).then(data => {
          // 让产品数据为null然后使用v-if的组件可以重新销毁和创建
          goods.value = null;
          nextTick(() => {
            goods.value = data.data.detail;
            loading.value = false;
          });
          videoOption.value = {
            autoplay: true,
            controls: true,
            sources: [
              {
                src: data.data.detail.videoFilePath,
                type: "video/mp4"
              }
            ],
            width: "870px",
            height: "490px"
          };
        });
      }
    },
    { immediate: true }
  );
  return { goods, loading, videoOption };
};
</script>

<style scoped lang="less">
.loading {
  height: 580px;
  width: 1440px;
  margin: 72px auto 20px;
  background: rgba(255, 255, 255, 0.9) url(../../assets/images/loading.gif)
    no-repeat center;
}
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 500px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.video-play {
  margin: 50px;
  border: 10px solid #e4e4e4;
}
.content-box {
  width: 100%;
  padding: 50px;
}

// .goods-tabs {
//   min-height: 600px;
//   background: #fff;
// }
// .goods-warn {
//   min-height: 600px;
//   background: #fff;
//   margin-top: 20px;
// }
</style>
