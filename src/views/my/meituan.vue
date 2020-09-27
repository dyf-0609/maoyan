<template>
  <div id="meituan">
      <div class="user">
          <input type="text" placeholder="账户名/手机号/Email" class="username">
      </div>
      <div class="pwd">
          <input type="password" placeholder="请输入您的密码" class="password">
      </div>
      <div class="btn-wrap">
          <button type="submit" class="btn">登录</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#meituan{
    width: 100%;
    .user,.pwd{
        padding: 14px 10px ;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
        .username,.password{
            width: 100%;
            height: 30px;
            font-size: 14px;
            margin: -7px 0;
            border: none;
        }
    }
    .btn-wrap{
        margin:14px 10px;
        .btn{
            width: 100%;
            height: 30px;
            text-align: center;
            border-radius: 3px;
            color: #fff;
            background-color: #df2d2d;
            font-size: 14px;
            line-height: 30px;
            border: none;
        }
    }
}
</style>