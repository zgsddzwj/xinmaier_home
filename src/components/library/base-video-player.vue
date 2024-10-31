<template>
  <video ref="rVideoPlayer" class="video-js vjs-default-skin"></video>
</template>

<script>
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import videoJs from "video.js";

export default {
  name: 'BaseVideoPlayer',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    }
  },
  setup(props) {
    const rVideoPlayer = ref();
    let player = ref();
    onMounted(() => {
      player.value = videoJs(rVideoPlayer.value, props.options);
    });
    onUnmounted(() => {
      if (player.value) {
        player.value.dispose();
      }
    });
    return { player, rVideoPlayer }
  }
}
</script>
