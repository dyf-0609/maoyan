<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  touch-action: none;
}
.page {
  position: absolute;
  top: 50px;
  left: 0;
  bottom:49px;
  width: 100%;
  background-color: #f5f5f5;
  &.full{
    top: 0;
    bottom: 0;
    z-index:5252651659;
    background: #000;
  }
  &.subpage{
    top: 46px;
    left:0;
    bottom: 0;
    background-color: #f5f5f5;
  }
  &.cover{
    position: absolute;
    top: -96px;
    bottom: -49px;
    background-color: #f5f5f5;
  }
}
</style>