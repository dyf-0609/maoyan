<template>
  <div class="page cover" v-if="seatingPlan.cinema">
    <div class="navbar" >
        <span class="iconfont icon-zuojiantou" @click="backAction"></span>
        <div class="title"><h1>{{seatingPlan.cinema.cinemaName}}</h1></div>
        <span class="iconfont icon-caidan"></span>
    </div>
    <div class="movie-info">
        <div class="title line-ellipsis">{{seatingPlan.movie.movieName}}</div>
        <div class="info line-ellipsis">
            {{seatingPlan.show.showDate}} 
            {{seatingPlan.show.showTime}}
            {{seatingPlan.show.lang}}{{seatingPlan.show.dim}}
        </div>
    </div>
    <ul class="reminder-list">
        <li class="reminder-item">
            <img src="/image/laba.png" alt="">
            <div class="reminder-info">观影需全程佩戴口罩,电影放映期间影厅内禁止饮食,感谢配合！</div>
            <span class="reminder-num">1个通知
                <i class="fold-down" ></i>
            </span>
        </li>
    </ul>
    
    <select-block :data="seatingPlan" :selectSeat="selectSeat"/>
    <buy-block :data="arr"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SelectBlock from '../../components/hot/select-block'
import BuyBlock from '../../components/hot/buy-block'
export default {
    components:{
        BuyBlock,
        SelectBlock
    },
    data(){
        return{
            arr:[]
        }
    },
    methods:{
        backAction(){
            this.$router.back();
        },
        selectSeat(arr){
            console.log(arr);
            this.arr=arr;
            
        }
    },
    computed:{
        ...mapState({
            seatingPlan:state=>state.movie.seatingPlan
        })
    },
    mounted(){
        this.$store.dispatch('movie/requestSeatingPlan')
    }
}
</script>

<style lang="scss" scoped>
.line-ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
.movie-info{
    padding: 15px;
    background-color: #fff;
    .title{
        width: 300px;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
    }
    .info{
        font-size: 13px;
        padding-top: 2px;
        line-height: 13px;
        color: #777;
    }
}
.reminder-list{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .reminder-item{
        margin:3px 15px;
        height: 20px;
        line-height: 20px;
        float: left;
        &:first-child{
            float: none;
            overflow: visible;
            border-top: 1px solid #e7e7e7;
            padding-top: 5px;
        }
        img{
            float: left;
            width: 17px;
            height: 17px;
            vertical-align: sub;
            margin-right: 2px;
        }
        .reminder-info{
            float: left;
            margin: 0;
            width: 72%;
            line-height: 20px;
            color: #666;
        }
    }
    .reminder-num{
        float: right;
        color: #f90;
        font-size: 12px;
        width: 60px;
        .fold-down{
            background-image: url(/image/xia.png);
            width: 8px;height: 5px;
            background-size: 8px 5px;
            display: inline-block;
            margin-left: 5px;
            vertical-align: middle;
        }
        .fold-up{
            background-image: url(/image/shang.png);
            width: 8px;height: 5px;
            background-size: 8px 5px;
            display: inline-block;
            margin-left: 5px;
            vertical-align: middle;
        }
    }
}
</style>