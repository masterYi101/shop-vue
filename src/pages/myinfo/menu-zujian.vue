<template>
  <div class="wode-dd ww">
    <div class="top flex">
      {{ list.title }} <span @click="jump">查看全部 ></span>
    </div>
    <div class="xiangqing flex">
      <div v-for="i in list.children" :key="i.text" class="item flex-c">
        <div class="img">
          <van-icon size="20" color="red" :name="i.icon" />
        </div>
        <div class="text">{{ i.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-zujian",
  props: ["list"],
  methods: {
    jump() {
      this.$router.push("/mydingdan");
    }
  }
};
</script>

<style lang="scss" scoped>
.wode-dd {
  span {
    color: #bdbdbd;
  }
  .top {
    justify-content: space-between;
    padding: 20px;
    height: 100px;
    background-color: white;
    width: 100%;
  }
  .xiangqing {
    background: white;
    padding: 0px 20px;
    align-items: stretch;
    justify-content: start;
    flex-wrap: wrap;
    border-top: 1px solid #c5c5c5;
    .item {
      padding: 20px 0;
      align-items: center;
      justify-content: center;
      width: 25%;
    }
    .text {
      font-size: 28px;
    }
  }
}
</style>
