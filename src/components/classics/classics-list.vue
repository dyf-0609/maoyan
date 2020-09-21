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
                    {{item.english}}
                </div>
                <div class="actor">
                    {{item.actors}}
                </div>
                <div class="date">{{item.showInfo}}</div>
                 <div class="btn-buy" v-if="item.grade==='暂无评分'">
                     暂无评分  
                </div> 
                <div class="btn-buy" v-else>
                    <span>{{item.grade}}</span>分
                </div> 
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

<style lang="scss" scoped>
 .classics-list-wrap{
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
                                margin-bottom: 4px;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                        }
                        .item-detail,.actor,.date{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            font-size: 13px;
                            line-height: 18px;
                            color: #666;
                            margin-bottom: 4px;
                        }
                        .btn-buy{
                            position: absolute;
                            right: 7%;
                            top: 7%;
                            font-size: 12px;
                            color: #999;
                            line-height: 17px;
                            text-align: center;
                            span{
                                color: #faaf00;
                                font-size: 15px;
                                margin-right:5px;
                            }
                       }
                    }  
            }
        }
    }
}

</style>