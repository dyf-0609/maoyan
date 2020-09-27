<template>
      <div class="bar">
        <app-scroll :scrollX="true" :scrollY="false" :width="wrapWidth" class="content">
          <ul class="date-wrap line" ref="wrap">
            <li
              v-for="(item,index) in timeArr"
              :key="index"
              :class="{choosen:index===select}"
              @click="chooseActive(index,item.dateDetail)">
              <span> 
                <span>{{item.weeks}}{{item.dateSimple}}</span>
                </span></li>
            
          </ul>
        </app-scroll>
      </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    data:Array,
    dateSelect: Function,
    
  },
  data() {
    return {
      wrapWidth: 0,
      select: 0,
      timeArr:[]
    };
  },
  methods: {
    getDateArr() {
      var now = new Date();
      var today = now.getDate();
      var tomorrow = now.getDate() + 1;
      var aftTomorrow = now.getDate() + 2;
      this.data.forEach(({ date }, i) => {
        // console.log(date);
        let dd = new Date(date);
        // console.log(dd);
        var weekday = "周" + "日一二三四五六".charAt(dd.getDay());
        var year = dd.getFullYear();
        var month = dd.getMonth() + 1;
        month = month >= 10 ? month : "0" + month;
        var day = dd.getDate();
        if (day === today) {
          weekday = "今天";
        } else if (day === tomorrow) {
          weekday = "明天";
        } else if (aftTomorrow === day) {
          weekday = "后天";
        }
        day = day >= 10 ? day : "0" + day;

        this.timeArr.push({
          id: i,
          dateDetail: date,
          weeks: weekday,
          dateSimple: month + "月" + day + "日",
        });
        
      });
    },
    chooseActive(index, dateDetail) {
      this.select = index;
    },
  },


  computed: {
    ...mapState({ 
    }),
  },
  watch: {
    data: {
      handler(n) {
        if (n) {
          this.getDateArr();
          this.$nextTick(() => {
            this.wrapWidth = this.$refs.wrap.offsetWidth;
          });
        }
      },
      immediate: true,
    }
  },
  created() {
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.line{
    background: url(/image/dian.png) 0 bottom repeat-x;
}
.content {
  width: 100%;
  height: 100%;
}
.bar {
  //   width: 100%;
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
<style lang="scss">

</style>

