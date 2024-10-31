<template>
  <footer class="app-footer">
    <!-- 内容 -->
    <div class="container">
      <div class="content">
        <div class="content-header">
          <img class="icon" src="../assets/images/logo_light.png" alt="" />
          <div class="right">
            <RouterLink :to="`/intro`">
              <span>关于我们</span>
            </RouterLink>
            <a href="javascript:;">
              <span>招贤纳士</span>
            </a>
            <a href="javascript:;">
              <span>新闻动态</span>
            </a>
            <a href="javascript:;">
              <span>版权备案号</span>
            </a>
          </div>
        </div>
        <div class="content-footer">
          <div class="container-footer-right">
            <div class="add">
              <span>地址：北京市昌平区新龙大厦8层</span>
            </div>
            <div class="tel">
              <span>电话：010-60606355</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <img src="../assets/images/wx_qrcode.jpg" alt="" />
        <div class="desc">公众号</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped lang="less">
.app-footer {
  overflow: hidden;
  background-color: @baseColor;
  padding-top: 40px;
  color: white;

  .container {
    width: 100%;
    // margin: 0 auto;
    // position: relative;
    display: flex;
  }

  .content {
    margin: 0 80px 50px 0;
    flex: 1;
    .content-header {
      display: flex;
      border-bottom: 1px solid #555;
      .icon {
        width: 180px;
        height: 53px;
        margin: 0 120px 20px 25px;
      }
      .right {
        font-size: 16px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        padding-top: 8px;
      }
    }

    .content-footer {
      margin-top: 20px;
      .container-footer-right {
        line-height: 25px;
        font-size: 16px;
        text-align: right;
      }
    }
  }
  .footer-right {
    width: 100px;
    margin-top: 20px;
    margin-right: 80px;
    img {
      width: 100px;
      min-width: 100px;
      height: 100px;
      border-radius: 6px;
      margin-bottom: 10px;
    }
    text-align: center;
  }
}

a {
  color: white;
}
</style>
