<template>
  <div id="my" class="mypage">
     <div class="login">
       <div class="top">
         <span class="iconfont icon-zuojiantou" @click="backAction"></span>
         <h1>猫眼电影</h1>
       </div>
       <div class="tab">
         <router-link to="meituan" class="tab-item">美团账号登录</router-link>
         <router-link to="phone" class="tab-item">手机验证登录</router-link>
       </div>

       <router-view/>
     
        <ul class="subline">
          <a href="" class="subline-item">立即注册</a>
          <a href="" class="subline-item">找回密码</a>
          <!-- <router-link to="reset" class="subline-item">立即注册</router-link>
          <router-link to="pwd" class="subline-item">找回密码</router-link> -->
        </ul>
        <footer>
          <div class="copyright">
            <span class="copyright">
              © 猫眼电影 客服电话：
              <a href="" class="number">400-670-5335</a>
              </span>
          </div>
        </footer>
     </div>
  </div>
</template>

<script>
export default {
  methods:{
    // 返回主页
    backAction(){
      this.$router.push({path:"/hot"});
    }
  }
}
</script>

<style lang="scss" scoped>
.mypage{
  width: 100%;
  position: absolute;
  top: 0;left: 0;
  bottom: 0;
  background-color: #f5f5f5;
}
.login{
  width: 100%;
  .top{
    width: 100%;
    height: 50px;
    background-color: #df2d2d;
    position: relative;
    .iconfont{
      position: absolute;
      left: 10px;top: 10px;
      width: 40px;
      height: 40px;
      font-size: 30px;
      color: #fff;
    }
    h1{
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      color: #fff;
      font-weight: lighter;
    }
  }
  .tab{
    padding: 0 10px;
    height: 40px;
    border-bottom: 4px solid #d6d6d6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    .tab-item{
      width: 175px;
      height: 43px;
      line-height: 43px;
      text-align: center;
      font-size: 13px;
      color: #222;
      &.router-link-active{
        border-bottom: 4px solid #FFC300;
      }
    }
  }
  .subline{
    margin: 14px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .subline-item{
      font-size: 13px;
      font-family: PingFangSC-Regular;
      color: #FE8C00;
    }
  }
  footer{
    margin-top: 15px;
    padding: 0 10px 20px;
    background-color: #f8f8f8;
    .copyright{
      text-align: center;
      color: #333;
      font-size: 14px;
      .number{
        color: #df2d2d;
      }
    }
  }
}
</style>