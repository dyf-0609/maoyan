<template>
  <div class="classics-list-wrap">
      <ul class="classics-list">
          <li class="item" v-for="item in data" :key="item.id">
            <div class="item-img">
             <img :src="item.img" alt="">
            </div>   
           <div class="item-content-wrap">
             <div class="item-content">
               <div class="item-info">
                 <div class="item-title" >{{item.title}}</div>
               </div> 
                 <div class="item-detail" >
                    <span class="num">{{item.english}}</span> 
                </div>
                <div class="actor">
                    主演:{{item.actors}}
                </div>
                <div class="date">{{item.showInfo}}</div>
                 <div class="btn-buy" >{{item.grade}}</div> 
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
}
</script>

<style scoped>
/* .classics-list-wrap{
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    .classics-list{
        width: 100%;
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
                .btn-buy{
                    position: absolute;
                    right: 7%;
                    top: 40%;
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    color: #fff;
                }
            }
            }
        } 
    }  
} */
</style>