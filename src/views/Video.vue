<template>
  <div id="video" class="page">
    <app-scroll  :scrollX="true" :scrollY="false" :width="wrapWidth">
      <div class="switch" ref="wrap">
            <router-link to="preShow" class="switch-item" ><span>预告片</span></router-link>
            <router-link to="news" class="switch-item"><span>新闻看点</span></router-link>
            <router-link to="weekly" class="switch-item"><span>每周必看</span></router-link>
            <router-link to="sayMovie" class="switch-item"><span>说电影</span></router-link>
            <router-link to="goodVideo" class="switch-item" ><span>好片推荐</span></router-link>
            <router-link to="crime" class="switch-item"><span>犯罪</span></router-link>
            <router-link to="fantasy" class="switch-item"><span>奇幻</span></router-link>
            <router-link to="science" class="switch-item"><span>科幻</span></router-link>
        </div>
      </app-scroll>
      <keep-alive>
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
app-scroll{
  background-color: #fff;
}
.switch{
  box-sizing: border-box;
  width: max-content;
  height: 45px;
  background-color: #fff;
  overflow:hidden;
  border-top: 1px solid #e6e6e6;
  .switch-item{
    height: 45px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding:0 12px;
    &.router-link-active{
      span{
        font-size: 17px;
        font-weight: 450;
      }
      &::after{
      content: "";
      display: block;
      position: absolute;
      bottom: 2px;
      width: 20px;
      height: 3px;
      border-radius: 1px;
      background-color: #f03d37;
    }
    }
    span{
      font-size: 15px;
      line-height: 24px;
      font-weight: 400;
    }
  }
}
</style>