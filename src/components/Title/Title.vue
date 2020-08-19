<template>
  <div v-if="xianshi" class="title-bar">
    <van-nav-bar class="title" :title="text" />
  </div>
</template>

<script>
const obj = {
  "/home": "眼镜商城",
  "/cation": "分类",
  "/shopcart": "购物车"
};
export default {
  name: "title-bar",
  computed: {
    //是否显示
    xianshi() {
      return ["/home", "/cation", "/shopcart"].includes(this.$route.path);
    },
    //动态文本
    text() {
      return obj[this.$route.path];
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar.van-hairline--bottom {
  background-color: red;
  height: 100px;
}
.title-bar {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>
<style>
.title .van-nav-bar__title.van-ellipsis {
  color: white;
  font-size: 40px;
  font-weight: 600;
}
</style>
