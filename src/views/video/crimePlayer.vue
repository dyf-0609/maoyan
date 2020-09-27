<template>
  <div class="page cover">
      <div class="video-container">
          <div class="videoPlayer">
              <video :src="video.video"></video>
              <div class="loadingImage">
              <img :src="video.imgUrl" alt="">
              <div class="pauseIcon"></div>
          </div>
          </div>
          
          <div class="info">
            <div class="info-title">{{video.title}}</div>
            <div class="info-content">
                <div class="content-left">
                    <img :src="video.avatarurl" alt="">
                    <div class="text">{{video.nickName}}</div>
                </div>
                <div class="content-right">0次播放</div>
            </div>
      </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            video:{}
        }
    },
    methods:{
        crimePlayer(){
            const video=  this.crime.filter((item)=>{
                return item.id==this.$route.params.id
            })
            this.video=video[0];
            // console.log(this.video);
        }
    },
    watch:{
        crime:{
            handler(n){
                if(n[0]){
                    this.crimePlayer();
                }    
            },
            immediate:true
        }
    },
    computed:{
        ...mapState({
            crime:state=>state.video.crime
        })
    },
    created() {
        // console.log(this.$route);
    this.$store.dispatch("video/requestCrime",{id:this.$route.params.id});
    
  },
}
</script>

<style lang="scss" scoped>
.video-container{
    width: 100%;
    background-color: #fff;
    position: relative;
    .videoPlayer{
        width: 100%;
        position: relative;
        video{
            width:100%
        }
    }
    .loadingImage{
        position: absolute;
        top: 0;left: 0;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
        .pauseIcon{
            position: absolute;
            top: 50%;left: 50%;
            width: 42px;
            height: 42px;
            margin-left: -21px;
            margin-top: -21px;
            background: url(/image/btn.png) no-repeat;
            background-size: contain;
            z-index: 10;
        }
    }
    .info{
        padding: 14px 15px 15px;
        .info-title{
            font-size: 15px;
            color: #333;
            line-height: 22px;
        }
        .info-content{
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .content-left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width: 23px;
                    height: 23px;
                    border-radius: 50%;
                }
                .text{
                    font-size: 13px;
                    color: #333;
                    margin: 0 4px 0 8px;
                }
            }
            .content-right{
                font-size: 12px;
                color:#999;
            }
        }
    }
}

</style>