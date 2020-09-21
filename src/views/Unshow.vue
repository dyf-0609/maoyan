<template>
<app-scroll class="content">
  <div id="unshow" class="subpage">
    <DoodMovie :data="coming"/>
    <UnshowList :data="unshow"/>
  </div>
 </app-scroll>
</template>

<script>
import DoodMovie from '../components/unshow/good-movie'
import UnshowList from '../components/unshow/unshow-list'
import {mapState} from 'vuex'

export default {
  components:{
    DoodMovie,
    UnshowList
  },
  computed:{
    ...mapState({
      coming:state=>state.movie.coming,
      unshow:state=>state.movie.unshow
    
    })
  },
  created(){
    this.$store.dispatch("movie/requestComing")
    this.$store.dispatch("movie/requestUnshowList")
  }
}

</script>
<style lang="scss">
.content{
     width: 100%;
     height: 91%;
     overflow: hidden;  
     touch-action: none; 
}
</style>
