<template>
  <div class="page cover">
    <app-scroll class="content">
      <div class="navbar">
        <span class="iconfont icon-zuojiantou" @click="backAction"></span>
        <div class="title">
          <h1>{{ item.nm }}</h1>
        </div>
        <span class="iconfont icon-caidan"></span>
      </div>
      <div class="movie-detail">
        <div class="movie-filter"></div>
        <div
          class="poster-bg"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
        ></div>
        <div class="detail-box">
          <div class="poster">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <div class="title line-ellipsis">{{ item.nm }}</div>
            <div class="title-eng line-ellipsis">{{ item.enm }}</div>
            <div class="score line-ellipsis" v-if="item.sc">
              {{ item.sc }}
              <span class="snum">({{ item.snum | formatter(1) }}人评)</span>
            </div>
            <div class="score line-ellipsis" v-else>{{ item.wish }}人想看</div>
            <div class="type line-ellipsis">{{ item.cat }}</div>
            <div class="src line-ellipsis">
              {{ item.src }}/{{ item.dur }}分钟
            </div>
            <div class="pubDesc line-ellipsis">{{ item.pubDesc }}</div>
          </div>
        </div>
        <span class="iconfont icon-youjiantou"></span>
      </div>
      <showDays :data="showDays" />
      <nav-list />
      <cinemas-list :data="cinemas" />
    </app-scroll>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowDays from "../../components/hot/showDays";
import NavList from "../../components/hot/nav-list";
import CinemasList from "../../components/hot/cinemas-list";
export default {
  components: {
    ShowDays,
    NavList,
    CinemasList,
  },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    detail() {
      const item = this.hotDetail.filter((item) => {
        return item.id == this.$route.query.id;
      });
      this.item = item[0];
      // console.log(this.item);
    },
    // 返回主页
    backAction() {
      this.$router.push({ path: "/hot" });
    },
  },
  watch: {
    hotDetail: {
      handler(n) {
        if (n[0]) {
          this.detail();
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      hotDetail: (state) => state.movie.hotDetail,
      // hotDetailBottom:state=>state.movie.hotDetailBottom,
      showDays: (state) => state.movie.dates,
      cinemas: (state) => state.movie.cinemas,
    }),
  },
  created() {
    // console.log(this.$route);
    this.$store.dispatch("movie/requestHotDetail", {
      id: this.$route.query.id,
    });
    this.$store.dispatch("movie/requestHotDetailBottom", {
      id: this.$route.query.id,
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none;
}
.navbar {
  width: 100%;
  height: 50px;
  background-color: #e54847;
  border-bottom: 1px solid #e54847;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  .title {
    width: 270px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    h1 {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
    }
  }
  .icon-zuojiantou {
    position: absolute;
    left: 3px;
    top: 0;
    font-size: 30px;
    line-height: 50px;
    color: #fff;
  }
  .icon-caidan {
    position: absolute;
    top: 0;
    right: 10px;
    line-height: 50px;
    font-size: 22px;
    color: #fff;
  }
}
.movie-detail {
  width: 100%;
  height: 188px;
  position: relative;
  .movie-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
  .poster-bg {
    width: 100%;
    height: 100%;
    filter: blur(20px);
    opacity: 0.55;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .detail-box {
    position: absolute;
    top: 0;
    left: 0;
    padding: 19px 30px 19px 15px;
    height: 150px;
    display: flex;
    .poster {
      width: 110px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      margin-left: 12.5px;
      flex: 1;
      line-height: 1;
      color: #fff;
      overflow-x: hidden;
      .line-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .title {
        font-size: 20px;
        margin-top: 2px;
        font-weight: 700;
        overflow: hidden;
      }
      .title-eng,
      .type,
      .src,
      .pubDesc {
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.9;
        font-weight: lighter;
      }
      .score {
        font-size: 18px;
        font-weight: 700;
        color: #fc0;
        margin-top: 11px;
        .snum {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  .iconfont {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 10px;
    color: #fff;
    transform: translateY(-50%);
  }
}
</style>