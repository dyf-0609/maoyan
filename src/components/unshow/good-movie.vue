<template>
  <div class="good-movie">
      <p class="good-title">近期最受期待</p>
    <app-scroll  :scrollX="true" :scrollY="false" :width="wrapWidth">
        <ul class="good-list" ref="wrap">
            <li class="good-item" v-for="item in data" :key="item.id">
              <div class="img-bg">
                <img :src="item.img" alt="">
                <span class="wish-mask"></span>
                <span class="wish">{{item.wish}}人想看</span>
                <div class="heart">
                <img src="/image/heart.png" alt="">
              </div>
              </div>
              <h3>{{item.name}}</h3>
              <p class="data">{{item.data}}</p>
            </li>
        </ul>
  </app-scroll>
  </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    data(){
        return{
            wrapWidth:0,
        }
    },
    watch:{
        data:{
            handler(newVal){
                this.$nextTick(()=>{
                this.wrapWidth=this.$refs.wrap.offsetWidth;
                });    
            },
            immediate:true,  
        },  
    }

}
</script>

<style lang="scss">
.good-movie{
  padding: 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  .good-title{
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }
  .good-list{
    white-space: nowrap;
    overflow: hidden;
    width: max-content;
    .good-item{
      float: left;
      width: 85px;
      overflow: hidden;
      margin-right: 10px;
      .img-bg{
        width: 100%;
        height: 115px;
        margin-bottom: 10px;
        background-color: #e1e1e1;
        position: relative;
        img{
          width: 100%;
          height:100%;
        }
        .wish-mask{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 35px;
          background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
        }
        .wish{
          position: absolute;
          left: 6px;
          bottom: 4px;
          color: #faaf00;
          font-size: 11px;
          font-weight: 700;
        }
        .heart{
          position: absolute;
          left: 0;
          top: 0;
          width: 28px;
          line-height: 28px;
          text-align: center;
          background: rgba(61,63,71,.6);
          border-bottom-right-radius:10px;
          img{
            width: 10px;
            height: 10px;
          }
        }
      }
      h3{
        font-size: 13px;
        color: #222;
        font-weight: 700;
        margin-bottom: 6px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

      }
      .data{
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>