<template>
  <div class="showDate">
      <div class="bar line">
        <app-scroll :scrollX="true" :scrollY="false" :width="wrapWidth" class="content">
          <ul class="date-wrap line" ref="wrap">
            <li v-for="(item,index) in value.shows" :key="index" :class="{choosen:index===select}"
              @click="chooseActive(index,item.dateDetail)">
               {{item.dateShow}}
            </li>
          </ul>
        </app-scroll>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    data:Array,
    value:[Array,Object],
    dateIndex:Function

  },
  data() {
    return {
     wrapWidth: 0,
     select: 0,
    };
  },
  methods: {
      chooseActive(index, dateDetail) {
        this.select = index;
        this.dateIndex(index);
      },
  },
  watch: {
    data: {
      handler(n) {
        if (n) {
          this.$nextTick(() => {
            this.wrapWidth = this.$refs.wrap.offsetWidth;
          });
        }
      },
      immediate: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.content {
  width: 100%;
  height: 100%;
}
.bar {
   width: 100%;
  height: 45px;
  background-color: #fff;
  z-index: 99;
}
.date-wrap {
  display: flex;
  width: max-content;
  height: 45px;
  background-color: #fff;
  li {
    //   float: left;
    box-sizing: border-box;
    line-height: 45px;
    text-align: center;
    height: 45px;
    width: 115px;
    color: #666;
    font-size: 14px;
    margin-left: 5px;
    &.choosen {
      border-bottom: 2px solid #f03d37;
      color: #f03d37;
    }
  }
}
</style>