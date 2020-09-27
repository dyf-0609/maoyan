<template>
  <div>
    <div class="pay-info mb-outline-b">
      <div class="box-flex discount-block">
        <div>活动与抵用券</div>
        <div class="flex"></div>
        <div data-bid="dp_wx_order_coupon">
          <span
            class="blk discount-amount maoyanActivityAndCouponColor"
            data-amount="无可用"
            style="color: #999999"
            >无可用</span
          >
          <span
            class="discount-desc"
            data-content="不与其他优惠活动同享"
          ></span>

          <span class="iconfont icon-xiayiye"></span>
        </div>
      </div>

      <div class="box-flex mb-line-t">
        <div class="flex"></div>
        <div>票价小计</div>
        <div class="red">
          <span class="icon">¥</span
          ><span class="paymoney paymoney-blk">38</span>
        </div>
      </div>
    </div>
    <div class="film-viewer mb-outline-tb">
      <!-- 一单多证 -->

      <!-- 未添加过实名观影人 -->

      <div class="add-new-contanier show-modal">
        <img
          class="icon-add"
          src="http://p0.meituan.net/scarlett/b5dbb10e3f9509e35de36e55bbab5f371103.png"
        />
        <span class="add-text">请添加购票人</span>
      </div>
      <!-- 有实名观影人记录 -->
    </div>

    <div class="discount-card-union-pay mb-outline-tb">
      <div class="card-head box-flex">
        <div class="card-head-title">影城折扣卡</div>
        <div class="flex"></div>

        <div class="card-head-content">
          <u>开卡享优惠，数量有限，先到先得~</u>
        </div>
      </div>
      <div class="discount">
        <div class="box-flex middle discount-bg">
          <div class="icon-column"></div>
          <div class="box-flex flex discount-content">
            <div class="discount-cinema">
              <span class="discount-cinema-title">观影特惠卡</span>

              <a>
                开通后<u>本单立减6元</u><i class="iconfont icon-xiayiye"></i>
                <span class="arrow"></span>
              </a>
            </div>
            <div class="flex"></div>
            <div class="discount-price">
              <div class="discount-price-content">
                <span class="discount-time"></span>

                <div class="discount-text discount-text-d">
                  <div class="discount-price-t">
                    <span>¥15.9/季度</span>
                  </div>

                  <div class="discount-reduced">
                    <div class="discount-reduced-price">
                      <span>¥20/季度</span>
                    </div>
                  </div>
                </div>
                <div class="discount-price-f">
                  <input class="check-item" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-block">
      <div class="box-flex mobile">
        <div class="mobile-t">手机号</div>

        <div>17835691234</div>
      </div>
      <div class="mobile-tips mb-line-t">
        <span>手机号仅用于生成订单，取票码不再以短信发送</span>
      </div>
    </div>

    <div class="price-wrap">
      <div class="price-block mb-outline-t box-flex">
        <div class="total-price">
          <div
            id="priceDetail"
            class="price tips-money"
            style="padding: 12px 0 6px 0; line-height: 0"
          >
            <span class="d">¥</span><span class="last-amount num">38</span
            ><br /><span class="also"></span>
          </div>
        </div>
        <div id="priceDetail" class="price-detail-up font-blk">
          <span>明细</span>
          <span class="arrow up"></span>
        </div>

        <div class="price-btn" data-bid="dp_wx_order_pay_btn">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pay-info {
  background-color: #fff;
  padding: 0 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transform: translateY(-25px);
  -webkit-transform: translateY(-25px);
  margin-bottom: -25px;
  div {
    line-height: 45px;
    font-size: 14px;
    color: #333;
  }

  .red {
    margin-left: 5px;
    font-family: PingFangSC-Medium;
    color: #ef4238;
    font-size: 18px;
  }
}

.mb-line-t {
  border-top: 1px solid #eee;
}
.box-flex {
  display: -webkit-box;
  display: flex;
}
.flex {
  -webkit-box-flex: 1;
  flex: 1;
}
.film-viewer {
  position: relative;
  padding-left: 15px;
  margin-top: 10px;
  background-color: #fff;
  .add-new-contanier {
    width: 150px;
    height: 27px;
    line-height: 27px;
    padding: 9px 0;
    margin: 0 auto;
    .icon-add {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      vertical-align: middle;
    }
    .add-text {
      display: inline-block;
      font-weight: 500;
      font-family: PingFangSC-Medium;
      font-size: 15px;
      color: #f03d37;
      letter-spacing: 0;
      text-align: center;
      vertical-align: middle;
    }
  }
}

.mobile-block {
  height: 87px;
  background: #fff;
  margin: 10px 0 5px;
  padding: 0 15px;
  .mobile {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #333;
    .mobile-t {
      margin-right: 15px;
    }
  }

  .mobile-tips {
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    color: #999;
  }
}

.discount-card-union-pay {
  background-color: #fff;
  padding: 0 15px;
  margin-top: 10px;

  .card-head {
    height: 22.5px;
    padding: 11px 0;
    .card-head-title {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #333;
    }
    .card-head-content {
      line-height: 22.5px;
      font-size: 12px;
      color: #999;
    }
  }

  .discount {
    padding-bottom: 11px;
    .discount-bg {
      position: relative;
      height: 70px;
      background: url(/image/bg.png);
      background-size: 100% 100%;
      .icon-column {
        width: 35px;
        height: 35px;
        position: absolute;
        top: -2px;
        left: -2px;
        background: url(/image/left-top.png);
        background-size: cover;
      }
      .discount-content {
        width: 100%;
        height: 70px;
        padding-left: 15px;
        .discount-cinema {
          padding: 11px 0;
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-pack: center;
          justify-content: center;
          .discount-cinema-title {
            display: inline-block;
            width: 130px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #572c16;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          a {
            display: inline-block;
            font-style: normal;
            font-size: 12px;
            color: #ba8b59;
            u {
              padding-left: 2px;
              color: #ff9800;
              font-style: normal;
              text-decoration: none;
            }
          }
        }
        .flex {
          width: 10px;
        }
        .discount-price {
          display: -webkit-box;
          display: flex;
          .discount-price-content {
            width: 115px;
            position: relative;
            .discount-time {
              position: absolute;
              top: 18px;
              left: -20px;
              display: block;
              width: 16px;
              height: 14px;
              background-image: url(/img/cu.png);
              background-size: cover;
            }
            .discount-text-d {
              margin-top: 14px;
            }
            .discount-price-t {
              font-family: PingFangSC-Medium;
              font-size: 16px;
              color: #572c16;
              .discount-price-t span {
                display: block;
                float: right;
              }
            }

            .discount-reduced-price {
              margin-right:36px;
              height: 14px;
              margin-top: 3px;
              padding: 0 2px;
              border: 1px solid #ba8b59;
              border-radius: 2px;
              line-height: 14px;
              text-align: center;
              color: #ba8b59;
              opacity: 0.7;
              float: right;
              text-decoration: line-through;
              font-size: 10px;
            }
            .check-item {
              display: block;
              -webkit-appearance: none;
              appearance: none;
              outline: none;
              border: none;
              position: absolute;
              top: 26px;
              right: 15px;
              width: 17px;
              height: 17px;
              margin-left: 10px;
              opacity: 0.25;
              background: url(/img/gou.png);
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
u {
  text-decoration: none;
}
.price-wrap {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  .price-block {
    padding: 10px 15px;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    .total-price {
      -webkit-box-flex: 1;
      flex: 1;
      .price {
        font-size: 21px;
        font-family: PingFangSC-Medium, Hiragino Sans GB, sans-serif;
        color: #ef4238;
      }
    }
    .price-detail-up {
      margin-right: 10px;
      font-size: 13px;
      color: #999;
    }
    .price-btn {
      -webkit-box-flex: 1.1;
      flex: 1.1;
      line-height: 45px;
      width: 100%;
      background-color: #ff9e05;
      border-radius: 4px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
