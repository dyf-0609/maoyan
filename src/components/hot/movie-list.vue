<template>
  <div class="movie-list-wrap">
      <ul class="movie-list">
          <li class="movie-item" v-for="item in data" :key="item.id" @click="goHotDetailAction(item.id)">
              <div class="item-img">
                  <img :src="item.img" alt="">
              </div>
              <div class="item-content-wrap">
                  <div class="item-content">
                        <div class="item-info">
                            <div class="item-title" >{{item.name}}
                               <img src="/image/version.png" alt="" class="item-version" v-if="item.version"></div>
                            </div>
                        <div class="item-detail" v-if="item.globalReleased&&item.rate">
                            <span class="title">观众评</span>
                            <span class="grade">{{item.rate}}</span>
                        </div>
                        <div class="item-detail" v-if="item.globalReleased&&!item.rate">
                            <span class="title">暂无评分</span> 
                        </div>
                        <div class="item-detail" v-if="!item.globalReleased&&!item.rate">
                            <span class="num">{{item.wish}}</span> 人想看
                        </div>
                        <div class="actor" v-if="item.globalReleased&&!item.rate"></div>
                        <div class="actor" v-else>
                            主演:{{item.star}}
                        </div>
                        <div class="show">{{item.show}}</div>
                  </div>
                  <div class="btn-buy" :class="{'btn-buy1':!item.globalReleased}" >
                      {{item.globalReleased?'购票':'预售'}}
                </div> 
             </div>                    
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    methods:{
        goHotDetailAction(id){
            // console.log(id);
            this.$router.push({path:'hot/hotDetail',query:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.movie-list-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .movie-list{
        width: 100%;
        height: 100%;
        .movie-item{
            padding-left: 15px;
            background-color: #fff;
            overflow: hidden;
            .item-img{
                width: 64px;
                height: 90px;
                margin-top: 12px;
                float: left;
                background-color: #e1e1e1;
                img{
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                }
            }
        }
        .item-content-wrap{
            padding: 12px 14px 12px 0;
            margin-left: 74px;
            height: 90px;
            max-height: 90px;
            position: relative;
            .item-content{
                padding-right: 5px;
                padding-bottom: 10px;
                padding-right: 48px;
                overflow: hidden;
                border-bottom: 1Px solid #e1e1e1;
                .item-info{
                    max-height: 24px;
                    margin-bottom: 7px;
                    line-height: 24px;
                    overflow: hidden;
                    .item-title{
                        font-size: 17px;
                        color: #333;
                        font-weight: 700;
                        padding-right: 5px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .item-version{
                        width: 43px;
                        height: 14px;
                        margin-top: 5px;
                        margin-right: 3px;
                        display: inline-block;
                    }
                }
                .item-detail{
                    overflow: hidden;
                    font-size: 14px;
                    color: #666;
                    .title{
                        margin-right: 4px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .grade,.num{
                        font-size: 16px;
                        font-weight: 700;
                        color: #faaf00;
                    }
                    
                }
                .actor,.show{
                    margin-top: 6px;
                    font-size: 14px;
                    color: #666;
                    line-height: 16px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
            .btn-buy,.btn-buy1{
                position: absolute;
                right: 7%;
                top: 40%;
                width: 47px;
                height: 27px;
                line-height: 28px;
                font-size: 12px;
                text-align: center;
                box-sizing: border-box;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
            }
            .btn-buy1{
                background-color: #3c9fe6;
            }
        }
    }
}
</style>>
