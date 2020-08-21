<template>
  <div class="win-now">
    <div><img class="img1" :src="list.bigImg1" /></div>

    <div class="win1" @click="jumpgoods">
      <ul class="flex">
        <li class="li-items" v-for="(i, d) in list.winnowItems1" :key="d">
          <p class="name">{{ i.name }}</p>
          <p class="desc">{{ i.desc }}</p>
          <div class="item-img"><img :src="i.img" /></div>
        </li>
      </ul>
    </div>
    <div><img class="img2" :src="list.bigImg2" /></div>
    <div class="win2 " @click="jumpgoods">
      <ul class="flex">
        <li class="li-items" v-for="(i, d) in list.winnowItems2" :key="d">
          <p class="name">{{ i.name }}</p>
          <p class="desc">{{ i.desc }}</p>
          <div class="item-img"><img :src="i.img" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getWinNow } from "@/api";
export default {
  name: "win-now",
  data() {
    return {
      list: []
    };
  },
  created() {
    getWinNow().then(({ data }) => (this.list = data));
  },
  methods: {
    jumpgoods() {
      this.$router.push("/splist/*");
    }
  }
};
</script>

<style lang="scss" scoped>
.win-now {
  background: white;
}
.img1,
.img2 {
  width: 100%;
  height: 314px;
}
.win1,
.win2 {
  ul {
    padding: 10px;
    height: 230px;
    overflow: scroll;
    justify-content: flex-start;
    align-items: flex-start;
    .li-items {
      border-radius: 5px;
      background: #f6f6f6;
      margin-right: 20px;
      flex-basis: 200px;
      flex-shrink: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      .item-img {
        box-sizing: border-box;
        flex: 1;
        margin-top: 10px;
        width: 100%;
        text-align: center;
        padding: 0 26px;
        img {
          width: 100%;
          height: 80%;
        }
      }
      .name {
        margin-top: 10px;
        font-size: 26px;
        font-weight: 800;
        color: black;
        text-align: center;
      }
      .desc {
        margin-top: 10px;
        text-align: center;
        font-size: 24px;
        color: #4c4c4c;
      }
    }
  }
}
</style>
