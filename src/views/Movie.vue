<template>
  <div id="movie" class="page">
    <div class="topbar">
        <div class="city">
            <span class="city-name">深圳</span>
            <span class="iconfont icon-xiajiantou"></span>
        </div>
        <div class="switch">
            <router-link to="hot" class="switch-item" ><span>热映</span></router-link>
            <router-link to="camera" class="switch-item"><span>影院</span></router-link>
            <router-link to="unshow" class="switch-item"><span>待映</span></router-link>
            <router-link to="classic" class="switch-item"><span>经典电影</span></router-link>
        </div>
        <span class="iconfont icon-sousuo"></span>
    </div>
    <keep-alive>
        
          <router-view/>
        
    </keep-alive>
  </div>
</template>

<script>
export default {
   
    data(){
        return{
            
        }
    },

}
</script>

<style lang="scss" scoped>
#movie{
    width: 100%;
    .topbar{
        width: 100%;
        height: 45px;
        background-color: #fff;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .city{
            padding-left: 15px;
            font-size: 15px;
            color: #666;
            display: flex;
            align-items: center;
            .iconfont{
                font-size: 8px;
                margin-left: 4px;
            }
        }
        .switch{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .switch-item{
                line-height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: #666;
                font-weight: 700;
                margin: 0 5px;
                padding: 0 5px;
                position: relative;
                &.router-link-active{
                
                        color: #333;
                        font-size: 17px;
                  
                 &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 1px;
                    width: 20px;
                    height: 3px;
                    border-radius: 1px;
                    background-color: #f03d37;
                    transition: left 0.2s;
                }  
               }
               
            }
        }
        .icon-sousuo{
            font-size: 20px;
            padding: 10px 15px 10px 10px;
            color: #e54847;
        }
    }
}
</style>>
<style lang="scss">
.subpage{
    width: 100%;
    height:100%;
    background-color: #f5f5f5;
    overflow: hidden;
}


</style>