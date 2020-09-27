<template>
<div class="rated-wrap">
    <!-- <p class="rated-title">{{title}}</p>
    <app-scroll  :scrollX="true" :scrollY="false" :width="wrapWidth">
        <div class="top-rated" v-html="data" ref="wrap">    
        </div>
  </app-scroll> -->
</div>

</template>

<script>
//export default {
//     props:{
//         data:String
//     },
//     data(){
//         return{
//             wrapWidth:0,
//             title:''
//         }
//     },
//     mounted(){
         
        
//     },
//     watch:{
//         data:{
//             handler(newVal){
//                 this.$nextTick(()=>{
//                 this.wrapWidth=this.$refs.wrap.offsetWidth;
//                 const parent=this.$refs.wrap.querySelector('.top-rated');
//                 const title=this.$refs.wrap.querySelector('.title');
//                     if(title){
//                         this.title=title.innerText;
//                         parent.removeChild(title);
//                     }
//                 });    
//             },
//             immediate:true,
            
//         },
        
//     }
// }
</script>

<style lang="scss" >
.rated-wrap{
    padding-right:15px ;
    background-color: #fff;
    margin-bottom: 10px;
}
.rated-title{
    padding: 12px 15px;
    font-size: 14px;
    color:#333;    
}
.top-rated{
    padding: 0 0 6px 7px;
    width: max-content;
    .top-rated-list{
        white-space: nowrap;
        .top-rated-item{
            float: left;
            width: 85px;
            overflow: hidden;
            margin-right: 10px;
            .poster{
                width: 85px;
                height: 115px;
                position: relative;
                margin-bottom: 6px;
                img{
                    height: 100%;
                    width: 100%;
                }
                .wish-bg{
                    display: inline-block;
                    width: 100%;
                    height: 35px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
                }
                .score{
                    position: absolute;
                    left: 4px;
                    bottom: 4px;
                    color: #faaf00;
                    font-size: 12px;
                    font-weight: 600;
                }
                .wish{
                    position: absolute;
                    left: 4px;
                    bottom: 4px;
                    color: #faaf00;
                    font-size: 12px;
                    font-weight: 600;
                }
            }
            .name{
                font-size: 14px;
                font-weight: bold;
                color: #222;
                margin-bottom: 3px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
}
</style>