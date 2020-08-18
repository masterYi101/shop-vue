<template>
  <div v-if="$route.path === '/home'" class="title-bar">
    <van-nav-bar class="title" title="哈哈眼镜商城" />
  </div>
</template>

<script>
export default {
  name: "title-bar"
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
