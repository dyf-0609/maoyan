<template>
   <div>
    <div class="banner" ref="banner">
      <div class="post-bg" :style="{ backgroundImage: `url(${bgImg})` }"></div>
      <div class="post-bg-filter"></div>
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in data" :key="item.id">
            <div class="image">
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title-wrap">
      <div>
        <span class="nm">{{ selectArr.nm }}</span>
        <p v-if="selectArr.globalReleased">
          <span>{{ selectArr.sc }}</span
          ><span>分</span>
        </p>
        <p v-else-if="!selectArr.globalReleased">
          <span>{{ selectArr.wish }}</span>
          <span>人想看</span>
        </p>
      </div>
      <div class="desc">{{ selectArr.desc }}</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js"
import "swiper/swiper-bundle.css"
export default {
  props:{
    data:Array,
  },
  data(){
    return{
      bgImg:'',
      selectArr:{}
    }
  },
  watch:{
    data: {
      handler(n) {
        if (n[0]) {
          this.$emit("input", n[0]);
          // console.log(n[0]);
          this.selectArr = n[0];
          this.bgImg = n[0].img;
          // console.log(this.bgImg);
          this.$nextTick(() => {
            let _this = this;
            new Swiper(this.$refs.swiper, {
              slidesPerView: 5,
              spaceBetween: 100,
              slideToClickedSlide: true,
              centeredSlides: true,
              loop: false,
              on: {
                slideChangeTransitionStart: function () {
                  _this.bgImg = n[this.activeIndex].img;
                  _this.selectArr = n[this.activeIndex];
                  _this.$emit("input", n[this.activeIndex]);
                  console.log(n[this.activeIndex]);
                },
              },
            });
          });
        }
      },
      immediate: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 140px;
  position: relative;

  .post-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    -webkit-filter: blur(30px);
    filter: blur(30px);
    background-position-y: 40%;
  }

  //   background-color: #333;
  .post-bg-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #40454d;
    opacity: 0.5;
  }
  background-size: cover;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    // background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }

  .image {
    img {
      width: 80px;
      height: 120px;
    }
  }

  .swiper-slide-active {
    position: relative;
    .image {
      border: 3px solid #fff;

      img {
        width: 74.75px;
        height: 109.25px;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 8px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 10px;
        height: 5px;
        background: url(/image/img.png) no-repeat;
        background-size: contain;
      }
    }
  }
}
.title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff;
  padding: 11px 0;
  line-height: 20px;
  border-bottom: 1px solid #f3f3f3;
  // box-shadow: #f3f3f3 5px inset;
  p {
    display: inline-block;
    span {
      font-size: 16px;
      font-weight: bold;
      color: #ffb400;
    }
    span:nth-of-type(2) {
      font-size: 12px;
    }
  }
  .nm {
    color: #333;
    font-size: 17px;
    font-weight: 700;
    margin-right: 5px;
  }
  .desc {
    color: #999;
    font-size: 13px;
  }
}

</style>