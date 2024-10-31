<template>
  <div class="base-bread-item">
    <RouterLink v-if="to" :to="to"><slot /></RouterLink>
    <span v-else><slot /></span>
  </div>
</template>
<script>
export default {
  name: "BaseBreadItem",
  props: {
    to: {
      type: [String, Object],
      default: ""
    }
  }
};
</script>
<style scoped lang="less">
.base-bread-item {
  font-size: 18px;
}
</style>
