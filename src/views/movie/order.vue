<template>
  <div class="page cover">
    <div class="bg-header">
      <Header :tit="tit" :icon="icon" :icon1="icon1" :bgcolor="bgcolor" />
      <MovieInfoWrapper/>
    </div>
    <OrderDetail/>
  </div>
</template>

<script>
import Header from "../../components/common/header";
import MovieInfoWrapper from "../../components/order/movie-info-wrapper";
import OrderDetail from "../../components/order/order-detail";

export default {
  data() {
    return {
      tit: "支付订单",
      icon: "icon-zuojiantou",
      icon1: "",
      bgcolor: "",
    };
  },
  components: {
    Header,
    MovieInfoWrapper,
    OrderDetail
  },
};
</script>

<style scoped lang="scss">
.show-page {
  z-index: 11;
  background-color: #eee !important;
}
.bg-header {
  height: max-content;
  color: #fff;
  background: linear-gradient(135deg, #88b3ca, #7195a8);
}
</style>
