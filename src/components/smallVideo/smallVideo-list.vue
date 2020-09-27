<template>
  <div class="smallVideo-list-wrap">
      <ul class="smallVideo-list">
          <li class="item" v-for="item in data" :key="item.id" @click="goSmallVideoPlayer">
              <div class="item-bg">
                  <img :src="item.imgUrl" alt="">
                  <div class="title">{{item.title}}</div>
                  <div class="info">
                        <img :src="item.avatarurl" alt="">
                        <span class="username">{{item.nickName}}</span>
                        <span class="iconfont icon-dianzan"></span>{{item.upCount}}
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        data:{Array,Object}
    },
    methods:{
        goSmallVideoPlayer(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.smallVideo-list-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .item{
        float: left;
        width: 49.5%;
        height: 300px;
        margin: 0 0.5% 2px 0;
        position: relative;
        overflow: hidden;
        .item-bg,img{
            width: 100%;
            height: 100%;
        }
        .title{
            width: 170px;
            margin: 0 8px;
            color: #fff;
            font-size: 15px;
            line-height: 24px;
            position: absolute;
            bottom: 42px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-shadow: 0 0 3px rgba(0,0,0,.3);
            overflow: hidden;
        }
        .info{
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 14px;
            font-size: 13px;
            color: #fff;
            margin: 0 8px;
            width: 170px;
            line-height: 22px;
            img{
                width: 22px;
                height: 22px;
                border-radius: 50%;
                margin-right: 4px;
            }
            .username{
                display: inline-block;
                height: 22px;
            }
            .iconfont{
                font-size: 18px;
                margin-left: 25px;
            }
        }
    }
}
</style>