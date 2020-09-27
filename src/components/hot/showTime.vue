<template>
  <div class="showTime">
      <div class="item-outer line" v-for="(list,index) in data.plist" :key="index">
          <div class="item "  >
                <div class="time">
                    <div class="begin">{{list.tm}}</div>
                    <div class="end">15:45 散场</div>
                </div>
                <div class="info">
                    <div class="lan">{{list.lang}} {{list.tp}}</div>
                    <div class="hall">{{list.th}}</div>
                </div>
                <div class="price">￥<span>38</span></div>
                <div class="btn" @click="goBuyTicketAction(list.id)">购票</div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        data:[Array,Object],
        value:[Array,Object]
    },
    methods:{
        goBuyTicketAction(cinemaId){
        this.$router.push({path:'seatBlock',query:{cinemaId,movieId:this.$route.params.id}})
        }
    }
}
</script>

<style lang="scss" scoped>
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.showTime{
    width: 100%;
    background-color: #fff;
    .item-outer{
        padding: 17px 0;
        margin-left: 12.5px;
        .item{
            padding-right: 12.5px;
            display: flex;
            .time{
                .begin{
                    font-size: 20px;
                    color: #333;
                    line-height: 1;
                    white-space: nowrap;
                }
                .end{
                    margin-top: 10px;
                    color: #999;
                    font-size: 11px;
                    line-height: 1;
                    white-space: nowrap;
                }
            }
            .info{
                margin-left: 17px;
                -webkit-box-flex: 1;
                flex: 1;
                overflow-x: hidden;
                .lan{
                    margin-top: 2px;
                    line-height: 18px;
                    font-size: 13px;
                    color: #333;
                    white-space: normal;
                }
                .hall{
                    margin-top: 7px;
                    font-size: 11px;
                    color: #999;
                    white-space: normal;
                }
            }
            .price{
                width: 130px;
                margin-left: 5px;
                flex: 0 1 auto;
                -webkit-box-flex: 0;
                line-height: 1;
                color: #f03d37;
                font-size: 11px;
                line-height: 40px;
                span{
                    display: inline-block;
                    font-size: 19px;
                }
            }
            .btn{
                width: 45px;
                margin-left: 2px;
                margin-top: 8px;
                height: 27px;
                line-height: 27px;
                font-size: 12px;
                background-color: #f03d37;
                color: #fff;
                border-radius: 4px;
                text-align: center;
            }
        }
    }
}
</style>