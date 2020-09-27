<template>
<div class="page subpage">
<app-scroll class="content">
  <div id="hot">
      <rated-movie :data="rated"/>
      <movie-list :data=" movielist"/>
      <HotMoviePeple/>
      <hot-news/>
  </div>
</app-scroll>
<router-view/>
</div>
</template>

<script>
import RatedMovie from '../../components/hot/rated-movie';
import MovieList from '../../components/hot/movie-list';
import HotMoviePeple from '../../components/hot/hot-moviePeople';
import HotNews from '../../components/hot/hot-news';
import {mapState} from 'vuex'

export default {
  components:{
    RatedMovie,
    MovieList,
    HotMoviePeple,
    HotNews
  },
  computed:{
    ...mapState({
      rated:state=>state.movie.rated,
      movielist:state=>state.movie.movieList
      
    })
  },
  created(){
    this.$store.dispatch("movie/requestRated"),
    this.$store.dispatch("movie/requestMovieList")
  }
}
</script>

<style lang="scss">
.content{
     width: 100%;
     height: 100%;
     overflow: hidden;  
     touch-action: none; 
}
.hotpage{
  width: 100%;
  position: absolute;
  top: 46px;bottom: 0;
}
</style>>