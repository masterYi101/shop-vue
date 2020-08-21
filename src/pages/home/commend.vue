<template>
  <div class="commend-list" @click="jumpGoods">
    <div class="item flex" v-for="i in list" :key="i.img">
      <div class="top flex">
        <div class="img">
          <img :src="i.img" />
        </div>
        <div class="miaoshu">
          <h2 class="title">{{ i.title }}</h2>
          <p class="desc">{{ i.desc }}</p>
          <div class="keyword">
            <span>{{ i.keyword1 }}</span>
            <span>{{ i.keyword2 }}</span>
          </div>
          <div class="price">¥{{ i.price }}</div>
        </div>
      </div>
      <div class="bottom flex">
        <span class="brand">{{ i.brand }}</span>
        <span class="standard">{{ i.standard }}</span>
        <span class="xs">找相似</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCommendList } from "@/api";
export default {
  name: "commend-list",
  data() {
    return {
      list: []
    };
  },
  created() {
    getCommendList().then(e => (this.list = e.data));
  },
  methods: {
    jumpGoods(){
    this.$router.push("/splist/*")
    }
  },
};
</script>

<style lang="scss" scoped>

.item {
  background: white;

  flex-direction: column;
  margin-bottom: 10px;
  height: 444px;
  .top {
    padding-top: 18px;
    height: 360px;
    align-items: flex-start;
    flex-grow: 0;
  }
  .bottom {
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    flex-grow: 1;
    position: relative;
    .brand {
      position: absolute;
      left: 32px;
      font-size: 28px;
    }
    .standard {
      position: absolute;
      left: 286px;
      font-size: 28px;
    }
    .xs {
      font-size: 28px;
      width: 114px;
      height: 44px;
      position: absolute;
      text-align: center;
      right: 32px;
      border: 2px solid #808080;
      border-radius: 20px;
    }
  }
}

.img {
  flex-shrink: 0;
  width: 330px;
  height: 100%;
}
.miaoshu {
  padding-right: 20px;
  .title {
    font-size: 32px;
  }
  .desc {
    font-size: 26px;
    color: #737373;
    margin: 10px 0;
  }
  .keyword {
    color: #d5b085;
    width: 232px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f2f2f2;
    font-size: 26px;
    padding: 15px;
  }
  .price {
    color: red;
    font-weight: 700;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
</style>
