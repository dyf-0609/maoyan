<template>
  <header class="header" :style="{background:bgcolor}">
    <i class="iconfont" :class="icon" @click="backAction"></i>
    <span>{{ tit }}</span>
    <i class="iconfont" :class="icon1"></i>
  </header>
</template>

<script>
export default {
  props: {
    tit: { type: String, default: "猫眼电影" },
    icon: String,
    bgcolor: { type: String, default: "#e54847" },
    icon1: { type: String, default: "icon-caidan" },
  },
  methods: {
    backAction() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 44px;
  // background: #e54847;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
  padding: 8px;
  i {
    font-size: 22px;
  }
}
</style>
