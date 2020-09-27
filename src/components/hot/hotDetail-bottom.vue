<template>
  <div class="hotDetail-bottom">
      <app-scroll  :scrollX="true" :scrollY="false" :width="wrapWidth">
      <ul class="timeline"  ref="wrap">
          <li class="data-day"  v-for="item in data" :key="item.id">
              
          </li>
      </ul>
      </app-scroll>
  </div>
</template>

<script>
export default {
    props:{
        data:{}
    },
    data(){
        return{
            wrapWidth:0,
        }
    },
    // methods:{
    //     showDay(){
    //         const day=this.data.map((item)=>({
    //             day:item.showDays
    //         }))
    //         console.log(day);
    //     }
    // },
    watch:{
        data:{
            handler(newVal){
                this.$nextTick(()=>{
                this.wrapWidth=this.$refs.wrap.offsetWidth;
                });    
            },
            immediate:true,  
            // handler(){
            //     this.showDay()
            // }
        },  
    }
}
</script>

<style lang="scss" scoped>
.timeline{
    height: 45px;
    width: max-content;
    white-space: nowrap;
    .data-day{
        float: left;
        width: 115px;
        line-height: 43px;
        margin-left: 5px;
        font-size: 14px;
        text-align: center;
        &:active{
            color: #f03d37;
            border-bottom: 2px solid #f03d37;
        }
    }
}
</style>