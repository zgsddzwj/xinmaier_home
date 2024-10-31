<template>
  <div class="box">
    <div class="base-oneimage">
      <img :src="dataSource.filePath" :alt="dataSource.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseOneImage',
  props: {
    dataSource: {
      type: Object,
      default: ''
    }
  },
}
</script>

<style scoped lang="less">
.base-oneimage {
  width: 100%;
  height: 100%;
}
</style>
