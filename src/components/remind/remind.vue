<template functional>
  <div class="remind flex">
    <h3 class="flex">
      <van-icon class="icon" :name="props.icon" />{{ props.text }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "remind",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "star-o"
    },
    text: {
      type: String,
      default: "默认值"
    }
  }
};
</script>

<style lang="scss" scoped>
.remind {
  height: 150px;
  background: #f2f2f2;
  font-size: 36px;
  h3 {
    font-weight: 800;
  }
  .icon {
    margin-right: 10px;
  }
}
</style>
