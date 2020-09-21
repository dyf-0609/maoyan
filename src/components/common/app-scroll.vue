<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap" :style="{width:wrapWidth}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    change: Function,
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    //接收滚动视图的宽度
    width: {
      type: [String, Number], //可以是string也可以是number
      default: "100%",
    },
  },
  computed: {
    //计算最终宽度的样式
    wrapWidth() {
      if (typeof this.width === "string") {
        return this.width;
      } else {
        return this.width + "px";
      }
    },
  },
  mounted() {
    const scroll = new IScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType: 3,
      bounce:false,
      scrollX: this.scrollX,
      scrollY: this.scrollY,
    });
    scroll.on("beforeScrollStart", () => {
      scroll.refresh();
    });
    //外部需要scroll的状态就执行监听
    this.change &&
      scroll.on("scroll", () => {
        if (scroll.y >= 0) {
          this.change(true);
        } else {
          this.change(false);
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.scroll-view {
  overflow: hidden;
}
</style>>
