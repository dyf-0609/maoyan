<template>
  <div class="unshow-list-wrap">
    <div v-for="item in data" :key="item.id" class="unshow-list">
      <p class="title">{{item.title}}</p>
      <li class="item">
          <div class="item-img">
             <img :src="item.img" alt="">
          </div>   
           <div class="item-content-wrap">
             <div class="item-content">
               <div class="item-info">
                 <div class="item-title" >{{item.name}}
                   <img src="/image/version.png" alt="" class="item-version" v-if="item.version"></div>
                 </div> 
                 <div class="item-detail" v-if="!item.globalReleased&&!item.rate">
                    <span class="num">{{item.wish}}</span> 人想看
                </div>
                <div class="actor">
                    主演:{{item.star}}
                </div>
                <div class="date">{{item.date}}上映</div>
                 <div class="btn-buy" v-if="item.show===1">想看</div> 
                 <div class="btn-buy1" v-else>预售</div> 
              </div> 
           </div> 
      </li>
     </div> 
  </div>
</template>

<script>
export default {
  props:{
        data:Array
  },
}
</script>

<style lang="scss" scoped>
.unshow-list-wrap{
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    .unshow-list{
      width: 100%;
      .title{
        padding: 12px 15px 0;
        font-size: 14px;
        color: #333;
      }
      .item{
        padding-left: 15px;
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
              font-size: 13px;
              color: #666;
              .num{
                  font-size: 16px;
                  font-weight: 700;
                  color: #faaf00;
              }
           }
           .actor,.date{
              margin-top: 6px;
              font-size: 13px;
              color: #666;
              line-height: 16px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
           }
           .btn-buy,.btn-buy1{
                position: absolute;
                right: 7%;
                top: 40%;
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                box-sizing: border-box;
                background-color: #faaf00;
                color: #fff;
                border-radius: 4px;
            }
            .btn-buy1{
                background-color: #3c9fe6;
            }
          }
        }
      }
    }
}
</style>