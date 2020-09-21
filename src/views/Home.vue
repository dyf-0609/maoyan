<template>
  <div id="home">
        <header class="header">
          <span class="title">猫眼电影</span>
          <span class="iconfont icon-caidan"></span> 
        </header>

        <nav class="menu">
            <router-link to="/movie" class="menu-item">
               <span class="iconfont icon-dianying"></span>
               <span>电影/影院</span>
            </router-link>
            <router-link to="/video" class="menu-item">
                <span class="iconfont icon-shipin1"></span>
                <span>视频</span>
            </router-link>
            <router-link to="/small-video" class="menu-item">
                <span class="iconfont icon-shipin"></span>
                <span>小视频</span>
            </router-link>
            <router-link to="/my" class="menu-item">
                <span class="iconfont icon-dibutubiao_wode"></span>  
                <span>我的</span>
            </router-link>
        </nav>
        <keep-alive>
            <router-view/>
        </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;left: 0;
    background-color: #e54847;
    border-bottom: 1PX solid #e54847;
    position: relative;
    .title{
        display: block;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        line-height: 50px;
        color:#fff ;
    }
    .iconfont{
        position: absolute;
        top: 15px;right: 10px;
        font-size: 20px;
        color: #fff;
    }
}
.menu{
    box-sizing: border-box;
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;bottom: 0;
    background-color: #fff;
    border-top: 1PX solid #d8d8d8;
    display: flex;
    justify-content: space-around;
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
          font-size: 12px;
            color: #696969;
        &.router-link-active{
                color: #f03d37;
            
        }
        .iconfont{
            font-size: 25px;
        }
    }
}
</style>>
<style lang="scss">

</style>