<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  touch-action:none;
}
.page{
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 49px;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}
</style>