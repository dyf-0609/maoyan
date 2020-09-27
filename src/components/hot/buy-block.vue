<template>
  <div class="bot-info">
    <div class="seat-type-info">
      <div v-show="!data[0]">
        <span class="text-middle"
          ><img
            class="icon"
            src="https://p1.meituan.net/movie/9dfff6fd525a7119d44e5734ab0e9fb41244.png"
          /><span class="text">可选</span></span
        >

        <span class="text-middle"
          ><img
            class="icon"
            src="https://p0.meituan.net/moviemachine/2af4c987b1758563e22258c077139cdf842.png"
          /><span class="text">已售</span></span
        >

        <span class="text-middle forbidden-span"
          ><img
            class="icon"
            src="https://p0.meituan.net/moviemachine/4abd89a0c0a864694b27c54d229fa7f41099.png"
          /><span class="text">不可售</span></span
        >
      </div>
      <div class="shade" v-show="data[0]">
        <label for="">已选座位</label>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <div>
              <p>{{ item.rowId }}排{{ item.columnId }}座</p>
              <p class="price">￥28</p>
            </div>

            <i @click="closeAction(index)"></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="submit-block box-flex">
      <div
        class="submit flex"
        data-bid="b_212zq"
        :class="{ selectSeats: data[0] }"
        @click="toPayOrder"
      >
        {{
          data[0]
            ? "￥" + data.length * 38 + "&nbsp;确认选座"
            : "请先选座"
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods: {
    closeAction(index) {
      // console.log(index);
      this.$eventBus.$emit("del", index);
      this.data.splice(index, 1);
    },
    toPayOrder() {
      if (this.data[0]) {
        this.$router.push({
          path: "order",
          query: {
            cinemaId: this.$route.query.cinemaId,
            movieId: this.$route.query.movieId,
          },
        });
      }
    },
  },
};
</script>

<style scopd lang="scss">
.bot-info {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  .seat-type-info {
    width: 100%;
    min-height: 36.4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    color: #777;
    img {
      height: 15px;
      width: 17px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
  .text-middle {
    margin-right: 8px;
  }

  .submit-block {
    padding: 10px;
    height: 45px;
  }
  .submit {
    background-color: #ffddb2;
    width: 355px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .selectSeats {
    background-color: #ff9900;
  }

  .shade {
    width: 100%;
    height: max-content;
    background-color: #fff;
    padding: 4px 10px;
    color: #333;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      li {
        margin: 0 3px 3px 0;
        width: 82.5px;
        height: 37px;
        line-height: 18px;
        text-align: center;
        background-image: url(/image/ticketl.png);
        background-size: 82.5px 37px;
        position: relative;
        .price {
          color: #fa5939;
        }
        i {
          position: absolute;
          top: 15px;
          right: 5px;
          background-image: url(/image/close.png);
          background-size: 7px 7px;
          width: 7px;
          height: 7px;
        }
      }
    }
  }
}
</style>
