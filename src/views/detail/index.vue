<template>
  <div class="body">
    <div v-if="pageId == 1">
      <Sub1 />
    </div>
    <div v-else-if="pageId == 2">
      <Sub2 />
    </div>
    <div v-else-if="pageId == 3">
      <Sub3 />
    </div>
    <div v-else-if="pageId == 4">
      <Sub4 />
    </div>
    <div v-else-if="pageId == 5">
      <Sub5 />
    </div>
    <div v-else-if="pageId == 6">
      <Sub6 />
    </div>
    <div v-else-if="pageId == 7">
      <Sub7 />
    </div>
    <div v-else-if="pageId == 8">
      <Sub8 />
    </div>
    <div v-else-if="pageId == 9">
      <Sub9 />
    </div>
    <div v-else-if="pageId == 10">
      <Sub10 />
    </div>
    <div v-else-if="pageId == 11">
      <Sub11 />
    </div>
    <div v-else-if="pageId == 12">
      <Sub12 />
    </div>
    <div v-else-if="pageId == 13">
      <Sub13 />
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import Sub1 from './sub/sub1'
import Sub2 from './sub/sub2'
import Sub3 from './sub/sub3'
import Sub4 from './sub/sub4'
import Sub5 from './sub/sub5'
import Sub6 from './sub/sub6'
import Sub7 from './sub/sub7'
import Sub8 from './sub/sub8'
import Sub9 from './sub/sub9'
import Sub10 from './sub/sub10'
import Sub11 from './sub/sub11'
import Sub12 from './sub/sub12'
import Sub13 from './sub/sub13'
export default {
  name: "CaseDetail",
  components: {
    Sub1,
    Sub2,
    Sub3,
    Sub4,
    Sub5,
    Sub6,
    Sub7,
    Sub8,
    Sub9,
    Sub10,
    Sub11,
    Sub12,
    Sub13
  },
  setup() {

    const route = useRoute()
    const pageId = route.params.id;
    return { pageId };
  }
};
</script>

<style scoped lang="less">

</style>