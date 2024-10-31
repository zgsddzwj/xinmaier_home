<template>
  <div class="product-info">
   撒
  </div>
</template>

<style scoped lang="less">
.product-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 1440px;
    height: 400px;
    padding: 30px 50px;
    .ad-image {
      width: 480px;
      height: 400px;
    }
  }
}
.product-list {
  width: 1440px;
  background-color: #fff;
}

.product-item {
  margin-bottom: 20px;
  border: 3px solid #f5f5f5;
  .body {
    display: flex;
    align-items: stretch;
    .column {
      border-left: 1px solid #f5f5f5;
      text-align: center;
      padding: 20px;
      &.products {
        flex: 1;
        padding: 0;
        align-self: center;
        ul {
          li {
            border-bottom: 1px solid #f5f5f5;
            padding: 20px;
            display: flex;
            &:last-child {
              border-bottom: none;
            }
            .image {
              width: 320px;
              height: 180px;
              border: 1px solid #f5f5f5;
            }
            .info {
              width: 850px;
              text-align: left;
              padding: 0 20px;
              line-height: 24px;
              p {
                margin-bottom: 5px;
                &.name {
                  height: 50px;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 25px;
                }
                &.attr {
                  color: #999;
                  height: 100px;
                  font-size: 14px;
                  span {
                    margin-right: 5px;
                  }
                }
                &.attr-button {
                  color: #999;
                  font-size: 12px;
                  text-align: right;
                  span {
                    margin-right: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
