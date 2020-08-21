<template>
  <div class="home" ref="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in bannes" :key="i.id">
        <img :src="i.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 框架 -->
    <cati-options></cati-options>
    <!-- 单品热卖 -->
    <remide-title :icon="'star'" :text="'单品热卖'"></remide-title>
    <!-- 单品列表 -->
    <goods-list></goods-list>
    <!-- 精选活动 -->
    <remide-title
      class="jingxuan"
      :icon="'fire'"
      :text="'精选活动'"
    ></remide-title>
    <!-- 大图 -->
    <win-now></win-now>
    <!-- 为您推荐 -->
    <remide-title :icon="'like'" :text="'为您推荐'"></remide-title>
    <!-- 推荐商品 -->
    <commend-list></commend-list>
  </div>
</template>

<script>
import { getBanne } from "@/api";
import Cati from "./cati";
import remind from "@/components/remind/remind.vue";
import GoodsList from "./GoodsList";
import winnow from "./Winnow";
import commend from "./commend";
export default {
  name: "home",
  data() {
    return {
      bannes: []
    };
  },
  mounted() {
    //获取轮播图
    getBanne().then(({ data }) => (this.bannes = data));
  },

  components: {
    "cati-options": Cati,
    "remide-title": remind,
    "goods-list": GoodsList,
    "win-now": winnow,
    "commend-list": commend
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 100px;
}
.my-swipe {
  height: 300px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
