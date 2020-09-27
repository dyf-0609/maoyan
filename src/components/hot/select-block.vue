<template>
  <div class="select-block">
      <div class="hall-name-wrapper">
        <span class="hall-name">4号厅</span>
      </div>
      <div class="row-nav">
        <div v-for="(n,i) in data.seat.regions[0].rowSize" :key="i">{{n}}</div>
      </div>
      <div class="seats-block">
        <div class="m-line"></div>
        <div class="seats-wrap">
          <div class="wrap">
            <div class="seat" v-for="(seat,i) in data.seat.regions[0].rows" :key="i" >
              <div class="seat-item" v-for="(item,j) in seat.seats" :key="j" >
                 <img :row="j" :col="i" :src="selectedSeats.some((item) => {
                      return item[`${j - 0}.${i - 0}`];
                    })
                      ? '/image/xuanzhong.png'
                      : isSelectImg
                    " alt="" v-if="item.seatStatus===1" @click="choseSeatAction(item.rowId,item.columnId,i,j)">
                 <img src="/image/bukexuan.png" alt="" v-else-if="item.seatStatus===4">
                 <img src="/image/yixuan.png" alt="" v-else-if="item.seatStatus===3">
                 <p v-else-if="item.seatStatus===0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    data:Object,
    selectSeat:Function
  },
  data(){
    return{
      selectedSeats:[],
      isSelectImg:'/image/kexuan.png'
    }
  },
  methods:{
    choseSeatAction(rowId,columnId,i,j){
      if(this.selectedSeats.some((item,index)=>{
        return item[j+'.'+i]
      })){
        this.selectedSeats.forEach((item,index)=>{
          if(item[j+'.'+i]){
            this.selectedSeats.splice(index,1);
          }
        }) 
      }else{
        this.selectedSeats.push({
        [j+'.'+i]:{rowId,columnId}
      });
      }
      console.log(this.selectedSeats);
      this.selectSeat(this.selectedSeats);
    }
  }

}
</script>

<style lang="scss" scoped>
.select-block{
  width: 100%;
  height: 415px;
  background-color: #f2f1f6;
  overflow: hidden;
  position: relative;
  .hall-name-wrapper{
    position: absolute;
    width: 200px;
    text-align: center;
    z-index: 10;
    transform:  translate3d(87.5px, 0px, 0px) scale(1, 1) rotate3d(0, 0, 0, 0deg);
    .hall-name{
      display: inline-block;
      width: 200px;
      height: 18px;
      color: #777;
      line-height: 18px;
      font-size: 14px;
      background-color: #e3e3e3;
      border-radius: 0 0 30px 30px;
      z-index: 99;
    }
  }
  .row-nav{
    position: absolute;
    z-index: 2;
    width: 16px;
    text-align: center;
    top: 38%;
    margin-top: -85px;
    background-color:rgba(0,0,0,.05) ;
    div{
      height: 29px;
      line-height: 29px;
      color:#777; 
      font-size: 13px;
    }
  }
  .seats-block{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .m-line{
      position: absolute;
      left: 50%;
      height: 60%;
      z-index: 1;
      border: 1Px dashed #c3c3c3;
      margin-left: 14px;
    }
    .seats-wrap{
      text-align: center;
      .wrap{
        display: inline-block;
        .seat{
          display: inline-block;
          .seat-item{
            padding: 3px 3px;
            float: left;
            img,p{
              width: 22px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>