<template>
  <div id="phone">
      <div class="user">
          <input type="tel" placeholder="请输入手机号" class="username" maxlength="11">
          <button type="button" class="btn-code">发送验证码</button>
      </div>
      <div class="msg">
          <input type="tel" placeholder="请输入短信验证码" class="code" disabled="disabled">
      </div>
      <div class="btn-wrap">
          <button type="submit" class="btn" disabled="disabled">登录</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#phone{
    width: 100%;
    .user,.msg{
        padding: 14px 10px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        .username,.code{
            display: inline-block;
            width: 100%;
            height: 30px;
            font-size: 14px;
            margin: -7px 0;
            border: none;
        }
        .username{
            width: 240px;
            margin-right: 10px;
        }
        .btn-code{
            display: inline-block;
            width: 100px;
            padding: 0 10px;
            height: 30px;
            margin:-7px 0;
            border: none;
            border-radius: 3px;
            background-color: #dcdcdc;
            color: #999;
            font-size: 14px;
            text-align: center;
        }
    }
    .btn-wrap{
        margin:14px 10px;
        .btn{
            width: 100%;
            height: 30px;
            text-align: center;
            border-radius: 3px;
            color: #999;
            background-color: #dcdcdc;
            font-size: 14px;
            line-height: 30px;
            border: none;
        }
    }
}
</style>