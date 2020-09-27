<template>
  <div id="small-video" class="page">
    <app-scroll class="content">
     <smallVideo-list :data="smallVideo"/>
     </app-scroll> 
  </div>
</template>

<script>
import SmallVideoList from '../components/smallVideo/smallVideo-list';
import { mapState } from "vuex";
export default {
  components:{
    SmallVideoList
  },
  computed:{
    ...mapState({
      smallVideo:(state)=> state.smallVideo.smallVideo
    })
  },
  created(){
    this.$store.dispatch("smallVideo/requestSmall")
  }
}
</script>

<style>
.content{
     width: 100%;
     height: 100%;
     overflow: hidden;  
     touch-action: none; 
}
</style>