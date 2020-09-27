<template>
    <div class="cinemas-list">
        <ul class="list-wrap">
            <li class="item line"  v-for="item in data" :key="item.id" @click="goCinemasDetailAction(item.id)">
                <div class="title line-ellipsis">
                    <span class="shop">{{item.nm}}</span>
                    <span class="price">{{item.sellPrice}}<span class="q">元起</span></span>
                </div>
                <div class="location">
                    <div class="address line-ellipsis">{{item.addr}}</div>
                    <div class="length">{{item.distance}}</div>
                </div>
                <div class="lable">
                    <span v-if="item.tag.allowRefund===1" class="tab">退</span>
                    <!-- <span v-if="item.tag.buyout===1" class="tab">退</span> -->
                    <!-- <span v-if="item.tag.cityCardTag===1" class="tab">退</span> -->
                    <!-- <span v-if="item.tag.deal===1" class="tab">退</span> -->
                    <span v-if="item.tag.endorse===1" class="tab">改签</span>
                    <!-- <span v-if="item.tag.giftTag===1" class="tab">退</span> -->
                    <!-- <span v-if="item.tag.sell===1" class="tab">退</span> -->
                    <span v-if="item.tag.snack===1" class="tab1">小吃</span>
                    <span v-if="item.tag.vipTag===1" class="tab1">折扣卡</span>
                    <span class="tab" v-for="tab in (item.tag.hallType)" :key="tab.id">{{tab}}</span>
                </div>
                <div class="discount" v-if="item.promotion.cardPromotionTag">
                    <img src="/image/card.png" alt="">
                    <span>{{item.promotion.cardPromotionTag}}</span>
                </div>
                <div class="show">
                    近期场次: <span>{{item.showTimes}}</span>
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
        goCinemasDetailAction(cinemaId){
            // console.log(this.$router);
            this.$router.push({path:'cinemasDetail',query:{cinemaId,movieId:this.$route.params.id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.line-ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinemas-list{
    width: 100%;
    .list-wrap{
        width: 100%;
        background-color: #fff;
        .item{
            padding: 13px 15px 13px 0;
            margin-left: 15px;
            .title{
                height: 23px;
                line-height: 23px;
                font-size: 16px;
                .shop{
                    color: #000;
                }
                .price{
                    padding-top:9px;
                    padding-left: 5px;
                    font-size: 18px;
                    color: #f03d37;
                    .q{
                       margin-left: 3px; 
                       font-size: 11px;
                    }
                }
            }
            .location{
                margin-top: 6px;
                font-size: 13px;
                color: #666;
                display: flex;
                .address{
                    flex: 1;
                }
                .length{
                   margin-left: 5px; 
                }
            }
            .lable{
                height: 17px;
                line-height: 17px;
                margin-top: 6px;
                margin-bottom: 4px;
                overflow: hidden;
                display: inline-block;
                .tab,.tab1{
                    display: inline-block;
                    color: #589daf;
                    border: 1Px solid #589daf;
                    padding: 0 3px;
                    height: 15px;
                    line-height: 15px;
                    border-radius: 2px;
                    font-size: 12px;
                    margin-right: 3px;
                }
                .tab1{
                    color: #f90;
                    border: 1px solid #f90;
                }
            }
            .discount{
                line-height: 14px;
                color: #999;
                margin-bottom: 4px;
                font-size: 12px;
                position: relative;
                img{
                    font-size: 14px;
                }
                span{
                    position: absolute;
                    top: 0; left:20px;
                }
            }
            .show{
               font-size: 12px;
               color: #999; 
               span{
                   margin-left: 5px;
               }
            }
        }
    }
}
</style>