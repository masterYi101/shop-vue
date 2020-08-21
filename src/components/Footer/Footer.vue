,<template>
  <div class="footer-bar" v-if="isone">
    <van-tabbar active-color="red" route class="tabbar" v-model="active">
      <van-tabbar-item to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/cation" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜搜</van-tabbar-item>
      <van-tabbar-item to="/shopcart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/myinfo" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footer-bar",
  data() {
    return {
      active: ""
    };
  },
  computed: {
    isone() {
      return ["/home", "/cation", "/search", "/shopcart", "/myinfo"].includes(
        this.$route.path
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-bar {
  width: 100vw;
  height: 100px;
  position: fixed;
  bottom: 0;
}
</style>
<style lang="scss">
.tabbar .van-tabbar-item {
  font-size: 20px;
  .van-tabbar-item__icon {
    font-size: 35px;
  }
}
</style>
