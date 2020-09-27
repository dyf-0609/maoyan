<template>
  <div class="videos">
    <ul class="video-list">
      <li class="video-item" v-for="item in data" :key="item.id">
        <div class="videoPlayer">
          <!-- <video :src="item.video.url" controls="controls"></video> -->
          <img :src="item.imgUrl" alt class="img" />
          <div class="video-title">{{item.title}}</div>
          <div class="play-btn" @click="goViedoPlayerAction(item.id)"></div>
          <div class="info-bar">
            <div class="count">
              <span class="iconfont icon-sanjiaoright"></span> 
              <span class="count-num">{{item.viewCount| formatter(1)}}</span>
            </div>
            <div class="time">{{item.onlineTime }}</div>
          </div>
        </div>
        <div class="video-info">
          <div class="img-bg">
            <img :src="item.avatarurl" alt />
            <div class="nickname">{{item.nickName}}</div>
          </div>
          <div class="zan">
            <span class="iconfont icon-dianzan"></span>{{item.upCount}}
            <span class="iconfont icon-liuyan"></span>{{item.commentCount}}
            <span class="iconfont icon-web-icon-"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods:{
    goViedoPlayerAction(id){
      // console.log(this.$route.name);
      if(this.$route.name==='preShow'){
         this.$router.push({name:'videoPlayer',params:{id}});  
      }else if(this.$route.name==='news'){
         this.$router.push({name:'newsPlayer',params:{id}})
      }else if(this.$route.name==='weekly'){
         this.$router.push({name:'weeklyPlayer',params:{id}})
      }else if(this.$route.name==='sayMovie'){
         this.$router.push({name:'sayMoviePlayer',params:{id}})
      }else if(this.$route.name==='goodVideo'){
         this.$router.push({name:'goodVideoPlayer',params:{id}})
      }else if(this.$route.name==='crime'){
         this.$router.push({name:'crimePlayer',params:{id}})
      }else if(this.$route.name==='fantasy'){
         this.$router.push({name:'fantasyPlayer',params:{id}})
      }else{
         this.$router.push({name:'sciencePlayer',params:{id}})
      }
    },
  },
} 
</script>

<style lang="scss" scoped>
.videos {
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
  .video-list {
    width: 100%;
    overflow: hidden;
    .video-item {
      width: 100%;
      margin-bottom: 6px;
      .videoPlayer {
        width: 100%;
        height: 211px;
        overflow: hidden;
        background-color: #000;
        position: relative;
        .img {
          width: 100%;
          height: 100%;
        }
        .video-title {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 17px;
          color: #fff;
          line-height: 24px;
          margin: 9px 15px 19px;
          font-family: PingFangSC-Medium, serif;
          letter-spacing: 0;
          text-overflow: ellipsis;
          word-break: break-all;
          overflow: hidden;
        }
        .play-btn {
          z-index: 10;
          position: absolute;
          left: 50%;
          top: 50%;
          height: 50%;
          width: 58px;
          height: 58px;
          margin-left: -29px;
          margin-top: -29px;
          background-image: url(/image/video-btn-play.png);
          background-size: contain;
        }
        .info-bar {
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 30px;
          line-height: 30px;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
          color: #fff;
          font-size: 12px;
          .count {
            float: left;
            margin-left: 15px;
            padding-left: 11px;
            font-size: 12px;
            position: relative;
            .iconfont {
              position: absolute;
              top: 0;
              left: 0;
              font-size: 12px;
            }
            .count-num{
                margin-left: 5px;
            }
          }
          .time {
            float: right;
            margin-right: 10px;
          }
        }
      }
      .video-info {
        height: 46px;
        background-color: #fff;
        padding-left: 15px;
        display: flex;
        justify-content: space-between;
        .img-bg {
          height: 100%;
          display: flex;
          align-items: center;
          img {
            width: 22px;
            height: 22px;
            border-radius: 11px;
          }
          .nickname {
            margin-left: 8px;
            font-size: 14px;
            color: #666;
          }
        }
        .zan{
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 15px;
            font-size: 12px;
            .iconfont{
                font-size: 24px;
                padding-left: 22px;
                line-height: 35px;
                color: #666666;
            }
        }
      }
    }
  }
}
</style>