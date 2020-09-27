<template>
<div class="page subpage">
<app-scroll class="content">
  <div id="goodVideo"> 
    <VideoList :data="goodVideo" />
  </div>
  </app-scroll>
    <router-view />
  </div>
</template>

<script>
import VideoList from "../../components/video/video-list";
import { mapState } from "vuex";
export default {
  components: {
    VideoList,
  },
  computed: {
    ...mapState({
     goodVideo: (state) => state.video.goodVideo,
    }),
  },
  created() {
    this.$store.dispatch("video/requestGoodVideo");
  },
};
</script>


<style lang="scss" scoped>
.content{
     width: 100%;
     height: 100%;
     overflow: hidden;  
     touch-action: none; 
}
</style>