<template>
  <div class="page">
    <div class="reset">
      <div class="top">
        <ol class="list">
          <li class="active">输入手机号</li>
          <li>输入验证码</li>
          <li>设置密码</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.reset{
  width: 100%;
  .top{
    height: 42px;
    padding: 14px 10px;
    background-color: #fff;
    border-bottom: 1px solid #d6d6d6;
    .list{
      text-align: center;
      li{
        float: left;
        font-size: 14px;
        color: #333;
        margin-right: 10px;
      }
    }
  }
}
</style>