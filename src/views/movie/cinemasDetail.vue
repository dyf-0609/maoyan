<template>
    <div class="page cover">
      <app-scroll class="content">
        <div class="navbar">
            <span class="iconfont icon-zuojiantou" @click="backAction"></span>
            <div class="title"><h1>{{cinemaData.nm}}</h1></div>
            <span class="iconfont icon-caidan"></span>
        </div>
        <addressDetail :data="cinemaData"/>
        <movie-banner :data="movies" v-model="activeIndex"/>
        <showDate :data="movies" v-model="activeIndex"  :dateIndex="dateIndex"/>
        <showTime :data="moveTimeList" />
        </app-scroll>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import AddressDetail from '../../components/hot/addressDetail'
import MovieBanner from '../../components/hot/movie-banner'
import ShowDate from '../../components/hot/showDate'
import ShowTime from '../../components/hot/showTime'
export default {
    components:{
        AddressDetail,
        MovieBanner,
        ShowDate,
        ShowTime
    },
    data(){
      return{
        activeIndex:[],
        moveTimeList:[]
      }
    },
    methods:{
        // 返回上一页
        backAction(){
            this.$router.back();
            },
        dateIndex(index){
          // console.log(index);
          this.moveTimeList=this.activeIndex.shows[index];
          // console.log(this.activeIndex);
        }
    },
    watch:{
        activeIndex:{
            handler(n){
              // console.log(n);
              if(n.shows){
                this.moveTimeList=this.activeIndex.shows[0];
              }
                // console.log(n);
                 
            },
            immediate:true,
            },
    },
    computed:{
        ...mapState({
            cinemasDetail:state=>state.movie.cinemasDetail,
            cinemaData:state=>state.movie.cinemaData,
            movies:state=>state.movie.movies
        })
    },
    mounted(){
      this.$store.dispatch("movie/requestCinemasDetail",{id:this.$route.query.id})
    }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.navbar{
  width: 100%;
  height: 50px;
  background-color: #e54847;
  border-bottom: 1px solid #e54847;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  .title{
    width: 270px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    h1{
      color: #fff;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .icon-zuojiantou{
    position: absolute;
    left: 3px;top:0;
    font-size: 30px;
    line-height: 50px;
    color: #fff;
  }
  .icon-caidan{
    position: absolute;
    top: 0;right: 10px;
    line-height: 50px;
    font-size: 22px;
    color: #fff;
  }
}
</style>