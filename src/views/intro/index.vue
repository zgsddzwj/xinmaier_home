<template>
  <img
    src="./公司介绍3.jpg"
    style="width: 100%;height: 26vw;object-fit: cover;margin-top: 80px"
    alt=""
  />
  <img src="./公司介绍.jpg" style="width: 100%;" alt="" />
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

export default {
  name: "Intro",
  components: {},
  setup() {
    // const store = useStore()
    // onMounted(() => {
    //   console.log('onMounted')
    //   store.commit("menu/changeMenuList",false)
    // }),
    // onBeforeUnmount(() => {
    //   console.log('onBeforeUnmount')
    //   store.commit("menu/changeMenuList",true)
    // })

    return {};
  }
};
</script>

<style scoped lang="less"></style>
