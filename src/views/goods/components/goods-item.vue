<template>
  <RouterLink v-if="isLink" :to="`/product/${goods.productId}`" class='goods-item'>
    <img v-lazy="goods.productImage" alt="">
    <p class="name ellipsis">{{goods.productName}}</p>
    <p class="desc ellipsis">{{goods.sellingPoint}}</p>
    <!-- <p class="price">&yen;{{goods.price}}</p> -->
  </RouterLink>
  <a v-else href="javascript:;" class='goods-item'>
    <img v-lazy="goods.productImage" alt="">
    <p class="name ellipsis">{{goods.name}}</p>
    <p class="desc ellipsis">{{goods.sellingPoint}}</p>
    <!-- <p class="price">&yen;{{goods.price}}</p> -->
  </a>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    },
    isLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang='less'>
.goods-item {
  display: block;
  width: 370px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 370px;
    height: 200px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>
