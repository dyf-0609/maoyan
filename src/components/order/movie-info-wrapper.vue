<template>
  <div>
    <div class="movie-info-wrapper">
      <div class="movie-img">
        <img
          src="//p1.meituan.net/148.208/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg"
        />
      </div>
      <div class="movie-details">
        <div class="box-flex">
          <div class="title">八佰</div>
          <div class="flex"></div>
          <div class="price">
            <span>1张</span>
            <span class="price-num">原价¥38</span>
          </div>
        </div>
        <div class="date">9月26日 09:10 (国语2D)</div>
        <div class="local">传奇影城（后瑞店）</div>
        <div class="seats">
          4号厅

          <div class="seat">5排7座</div>
        </div>
      </div>
    </div>
    <div class="ticket-changes">
      <div class="ticket-changes-block box-flex">
        <div class="changes-bubble">
          <span class="bubble-text"
            >购票前请务必关注影院的退改签信息，及自己剩余的退改签次数。</span
          >
        </div>
        <div class="changes">
          <span class="retreat">
            <i class="changes-icon disable-img"></i>
            <i class="changes-t">不支持退票</i>
          </span>
          <span class="retreat">
            <i class="retreat-icon disable-img"></i>
            <i class="retreat-t">不支持改签</i>
          </span>
        </div>
        <div class="flex"></div>
        <div
          id="refundmigrateDetail"
          class="changes-detail refundmigrateDetail support"
          style="display: none"
        >
          <span class="detail-word">退改签须知</span>
          <span class="arrow right"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang=scss>
.movie-info-wrapper {
  font-size: 16px;
  display: flex;
  padding: 12.5px;
  width: 100%;
  justify-content: space-between;
  .movie-img {
    img {
      height: 105px;
      width: 82px;
    }
  }
  .movie-details {
    width: 100%;
    margin-left: 10px;
    .box-flex {
      display: flex;
      .title {
        width: 41.2vw;
        max-width: 162px;
        font-family: PingFangSC-Medium, Hiragino Sans GB, sans-serif;
        font-size: 20px;
        line-height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        height: 25px;
        line-height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .date {
      line-height: 18px;
      margin-top: 10px;
    }
    .local {
      line-height: 18px;
      margin-top: 5px;
    }
    .seats {
      line-height: 18px;
      margin-top: 5px;
      font-size: 13px;
      .seat {
        display: inline-block;
      }
    }
  }
}
.ticket-changes {
  width: 100%;
  height: 65.5px;
  .ticket-changes-block {
    position: relative;
    height: 65.5px;
    padding: 0 15px;
    background: rgba(0, 0, 0, 0.12);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    font-size: 13px;
  }
  .changes-bubble {
    display: none;
    position: absolute;
    max-width: 195px;
    top: 50px;
    left: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: justify;
    z-index: 1;
    background: #000;
    opacity: 0.7;
  }
  .changes {
    display: inline-block;
    line-height: 42.5px;
    color: hsla(0, 0%, 100%, 0.8);
    .retreat {
      display: inline-block;
      margin-right: 10px;
      .disable-img {
        display: inline-block;
        width: 13px;
        height: 13px;
        background: url(/image/cha.png);
        background-position: 50%;
        background-size: cover;
        vertical-align: middle;
      }
    }
  }
}
</style>
