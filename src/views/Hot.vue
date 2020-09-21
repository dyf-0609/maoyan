<template>
<app-scroll class="content">
  <div id="hot" class="subpage">
      <rated-movie :data="rated"/>
      <movie-list :data=" movielist"/>
      <HotMoviePeple/>
      <hot-news/>
  </div>
</app-scroll>

</template>

<script>
import RatedMovie from '../components/hot/rated-movie';
import MovieList from '../components/hot/movie-list';
import HotMoviePeple from '../components/hot/hot-moviePeople';
import HotNews from '../components/hot/hot-news';
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
     height: 91%;
     overflow: hidden;  
     touch-action: none; 
}
</style>>