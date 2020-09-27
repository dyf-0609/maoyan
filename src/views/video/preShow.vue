<template>
<div class="page subpage">
<app-scroll class="content">
  <div id="preShow"> 
    <VideoList :data="preShow" />
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
      preShow: (state) => state.video.preShow,
    }),
  },
  created() {
    this.$store.dispatch("video/requestPre");
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