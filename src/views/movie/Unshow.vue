<template>
<div id="unshow" class="page subpage">
<app-scroll class="content">
  
    <DoodMovie :data="coming"/>
    <UnshowList :data="unshow"/>

 </app-scroll>
   </div>
</template>

<script>
import DoodMovie from '../../components/unshow/good-movie'
import UnshowList from '../../components/unshow/unshow-list'
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
     height:100%;
     overflow: hidden;  
     touch-action: none; 
}
</style>
