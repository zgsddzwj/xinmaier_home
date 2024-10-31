<template>
  <ul class="app-header-nav">
    <li
      :class="{
        active: route.path === item.path
      }"
      v-for="item in list"
      :key="item.menuId"
      @mousemove="show(item)"
      @mouseleave="hide(item)"
    >
      <div class="layer" :class="{ open: item.open }" v-if="item.children">
        <ul style="margin-top: 20px;">
          <li v-for="sub in item.children" :key="sub.menuId">
            <RouterLink @click="hide(item)" :to="sub.path">
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink @click="hide(item)" :to="`${item.path}`">{{
        item.name
      }}</RouterLink>
    </li>
  </ul>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "AppHeaderNav",
  setup() {
    const store = useStore();
    const route = useRoute();
    // 拿到vuex中的分类列表
    const list = computed(() => {
      return store.state.menu.list;
      // return store.state.category.list
    });
    // 跳转的时候不会关闭二级类目，通过数据来控制
    // 1. vuex每个分类加上open数据
    // 2. vuex提供显示和隐藏函数，修改open数据
    // 3. 组件中使用vuex中的函数，使用时间来绑定，提供一个类名显示隐藏的类名
    const show = item => {
      store.commit("menu/show", item.menuId);
    };
    const hide = item => {
      store.commit("menu/hide", item.menuId);
    };
    return { list, show, hide, route };
  }
};
</script>
<style scoped lang="less">
.app-header-nav {

  display: flex;
  flex: 1;
  justify-content: space-between;

  > li {
    width: 88px;
    text-align: center;
    > a {
      font-size: 18px;
      line-height: 80px;
      height: 80px;
      display: inline-block;
      box-sizing: border-box;
    }
    &:hover,
    &.active {
      > a {
        color: @baseColor;
        border-bottom: 3px solid @baseColor;
      }
    }
  }
}
// 二级类名弹层
.layer {
  .icon {
    font-size: 40px;
    color: @baseColor;
  }
  &.open {
    height: 180px;
    opacity: 1;
  }
  width: 150px;
  background-color: #fff;
  position: absolute;
  z-index: 99999;
  left: calc(105px + 40%);
  top: 80px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    li {
      // width: 100%;
      p {
        padding-top: 20px;
        text-align: center;
      }
      &:hover {
        p {
          color: @baseColor;
        }
      }
    }
  }
}
</style>
