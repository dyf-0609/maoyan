<template>
<div id="camera" class="page subpage">
  <div class="nav-wrap line">
      <div class="item">
          全城 <span class="iconfont icon-xiajiantou"></span>   
      </div>
      <div class="item">
          品牌 <span class="iconfont icon-xiajiantou"></span>   
      </div>
      <div class="item">
          特色 <span class="iconfont icon-xiajiantou"></span>   
      </div>
  </div>
  <app-scroll class="content">
  <CinemaList :data="cinema"/>
  </app-scroll>
</div>
  
</template>

<script>
import CinemaList from '../../components/cinema/cinema-list'
import {mapState} from 'vuex'
export default {
  components:{
    CinemaList
  },
  computed:{
      ...mapState({
          cinema:state=>state.movie.cinema
      })
  },
  created(){
      this.$store.dispatch("movie/requsetCinema")
  }
}
</script>

<style lang="scss" scoped>
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.nav-wrap{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    .item{
        flex: 1;
        line-height: 20px;
        text-align: center;
        font-size: 13px;
        color: #777;
        background: url(/image/dian.png) 0 0 repeat-y;
        .iconfont{
            font-size: 8px;
        }
    }
}
.content{
     width: 100%;
     height:93%;
     overflow: hidden;  
     touch-action: none; 
}
</style>