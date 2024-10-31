<template>
  <p class="g-name">{{goods.productName}}</p>
  <p class="g-desc">产品型号：{{goods.productNo}}</p>
  <p class="g-price">
    <span>价格：{{goods.productPrice}}</span>
  </p>
  <div class="g-service">
    <dl>
      <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{goods.sellingPoint}} </dd>
    </dl>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GoodName',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    // 提供给后台的四项数据 (没登录)
    const provinceCode = ref('110000')
    const cityCode = ref('119900')
    const countyCode = ref('110101')
    const fullLocation = ref('北京市 市辖区 东城区')
    // 取出用户收货地址中默认的地址给四个数据赋值 (已登录)
    if (props.goods.userAddresses) {
      const defaultAddresss = props.goods.userAddresses.find(item => item.isDefualt === 1)
      if (defaultAddresss) {
        provinceCode.value = defaultAddresss.provinceCode
        cityCode.value = defaultAddresss.cityCode
        countyCode.value = defaultAddresss.countyCode
        fullLocation.value = defaultAddresss.fullLocation
      }
    }
    // 城市选中事件处理函数
    const changeCity = (result) => {
      provinceCode.value = result.provinceCode
      cityCode.value = result.cityCode
      countyCode.value = result.countyCode
      fullLocation.value = result.fullLocation
    }
    return { fullLocation, changeCity }
  }
}
</script>

<style lang="less" scoped>
.base-city {
  vertical-align: middle;
}
.g-name {
  font-size: 28px;
  font-weight: bold;
  padding: 10px 0 10px 50px;
}
.g-desc {
  color: #999;
  margin-top: 10px;
  padding: 0 0 0 50px;
}
.g-price {
  margin-top: 10px;
  padding: 0 0 0 50px;
  span {
    &::before {
      content: "¥";
      font-size: 14px;
    }
    &:first-child {
      color: @priceColor;
      margin-right: 10px;
      font-size: 16px;
    }
    // &:last-child {
    //   color: #999;
    //   text-decoration: line-through;
    //   font-size: 16px;
    // }
  }
}
.g-service {
  background: #f5f5f5;
  margin-left: 50px;
  line-height: 30px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
  dl {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      color: #666;
      &:last-child {
        span {
          margin-right: 10px;
          &::before {
            content: "•";
            color: @baseColor;
            margin-right: 2px;
          }
        }
        a {
          color: @baseColor;
        }
      }
    }
  }
}
</style>
