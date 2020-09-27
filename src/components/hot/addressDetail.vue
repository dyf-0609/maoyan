<template>
  <div class="addressDetail">
      <div class="crumbs-nav">
          <span>猫眼电影&nbsp;&gt;</span> 
          <span>{{data.nm}}</span>
      </div>
      <div class="cinema-info">
          <div class="title line-ellipsis">{{data.nm}}</div>
          <div class="location line-ellipsis ">{{data.addr}}</div>
          <div class="location-icon">
              <span class="iconfont icon-png"></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        data:{Array,Object},
    }
}
</script>

<style lang="scss" scoped>
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.addressDetail{
    width: 100%;
    background-color: #fff;
    .crumbs-nav{
        padding: 10px 0 0 15px;
        span{
            font-size: 14px;
            color: #777;
            display: inline-block;
            margin: 0 5px;
        }
    }
    .cinema-info{
        padding: 15px;
        padding-right: 100px;
        position: relative;
        .title{
            font-size: 17px;
            line-height: 24px;
            font-weight: 700;
            color: #333;
        }
        .location{
            font-size: 13px;
            line-height: 18px;
            margin-top: 2px;
            color: #999;
        }
        .location-icon{
            position: absolute;
            right: 0;top: 50%;
            transform: translateY(-50%);
            width: 70px;height: 31px;
            border-left: 1px solid #d8d8d8;
            text-align: center;
            .iconfont{
                font-size: 30px;
                color: #73B8FF;
            }
        }
    }
}
</style>