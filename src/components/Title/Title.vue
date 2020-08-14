<template>
  <div class="title-bar">
    <van-nav-bar class="title" title="哈哈眼镜商城" />
  </div>
</template>

<script>
export default {
  name: "title-bar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar.van-hairline--bottom {
  background-color: red;
  height: 100px;
}
</style>
<style>
.title .van-nav-bar__title.van-ellipsis {
  color: white;
  font-size: 40px;
  font-weight: 600;
}
</style>
