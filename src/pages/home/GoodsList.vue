<template>
  <div class="GoodsList">
    <router-link
      class="item"
      v-for="i in list"
      :key="i.id"
      :to="{ name: `splist`, params: { id: i.id } }"
      tag="div"
    >
      <div class="img"><img :src="i.img" /></div>
      <h3 class="title">{{ i.title }}</h3>
      <p class="desc">{{ i.desc }}</p>
      <div class="price ">
        <span class="np">{{ `¥${i.nowPrice}` }}</span>
        <span class="op">{{ `¥${i.oldPrice}` }}</span>
        <span class="re">{{ i.rebate + "折" }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { getGoodsList } from "@/api";
export default {
  name: "GoodsList",
  data() {
    return {
      list: []
    };
  },
  created() {
    getGoodsList().then(({ data }) => (this.list = data));
  }
};
</script>

<style lang="scss" scoped>
.GoodsList .item {
  background: white;
  width: 50%;
  text-align: center;
  display: inline-block;
  height: 444px;
  border-top: 1px solid #bbb;
  border-right: 1px solid #bbb;
  &:nth-child(2n) {
    border-right: none;
  }
  & {
    border-bottom: 1px solid #bbb;
  }
  .img {
    text-align: center;
    height: 300px;
    padding: 10px;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    font-size: 26px;
    margin-bottom: 5px;
  }
  .desc {
    font-size: 20px;
    color: #b4b4b4;
    margin-bottom: 10px;
  }
  .price {
    .np {
      font-size: 30px;
      color: red;
      margin-right: 16px;
      font-weight: 700;
      vertical-align: bottom;
    }
    .op {
      font-size: 28px;
      margin-right: 16px;
      color: #b4b4b4;
      vertical-align: bottom;

      text-decoration: line-through;
    }
    .re {
      vertical-align: bottom;

      background: red;
      font-size: 24px;
      margin-right: 16px;
      color: white;
      border-radius: 5px;
    }
  }
}
</style>
