<template>
  <div class="search">
    <!-- 搜索栏 -->
    <van-search
      class="top"
      v-model="value"
      shape="round"
      show-action
      background="white"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <!-- 历史记录 -->
    <div class="text">
      <div class="zuijin flex">
        <span class="hh zuijin-search">最近搜索</span>
        <span @click="clear" class="hh clear"> 清空记录</span>
      </div>
      <div class="list ">
        <span @click="lishijilu" v-for="(i, d) in list" :key="d" class="item">{{
          i
        }}</span>
      </div>
    </div>
    <!-- 搜素结果 -->
    <div class="result ">
      <ul class="items flex-c">
        <li class="item flex" v-for="i in result" :key="i.id">
          <div class="img">
            <img :src="i.img" :alt="i.img" />
          </div>
          <div class="info">
            <p class="title">{{ i.name }}</p>
            <p class="desc">{{ i.keywords }}</p>
            <div class="price">
              <span class="new">¥{{ i.price }}</span>
              <span class="old">¥{{ i.unitPrice }}</span>
            </div>
            <div class="pingjia">
              <span class="tejia">特价</span>
              <span class="pj">{{ i.appraiseNum }}条评价</span>
              <span class="haoping">{{ i.rateScore }}%好评</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- loading效果 -->
    <van-loading
      v-if="loading"
      color="#1989fa"
      class="loading"
      size="44px"
    ></van-loading>
  </div>
</template>

<script>
import { getSearch } from "@/api";
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: new Set(["明月", "海昌", "隐形眼镜"]), //历史记录
      result: [],
      loading: false
    };
  },
  methods: {
    //搜索
    onSearch() {
      if (this.value) {
        this.loading = true;
        this.list.add(this.value);
        getSearch().then(data => {
          setTimeout(() => {
            this.result = data.data.list;
            this.loading = false;
          }, 500);
        });
      }
    },
    lishijilu(e) {
      this.value = e.target.innerText;
      this.onSearch();
    },
    //清空记录
    clear() {
      this.list = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 45%;
  height: 100vh;
  width: 100vw;
}
.search {
  margin-top: 100px;
  min-height: 100%;
  background: #f2f2f2;
}
.top {
  width: 100vw;
  position: fixed;
  top: 0;
}
.text {
  padding-top: 36px;
  .zuijin {
    margin: 0 40px 40px;
    height: 50px;
    span {
      flex: 1;
    }
    .zuijin-search {
      width: 100%;

      font-size: 36px;
      font-weight: 700;
    }
    .clear {
      font-size: 36px;
      color: red;
      font-weight: 700;
      text-align: right;
    }
  }
  .list {
    padding: 0 40px;
    // word-wrap: break-word;
    word-break: break-all;
    span {
      line-height: 60px;
      color: white;
      margin: 0 10px;
      height: 42px;
      background: #969799;
      border-radius: 10px;
      font-size: 26px;
      padding: 5px 10px;
    }
  }
}
.result {
  overflow: auto;
  .item {
    height: 256px;
    background: white;
    margin: 10px 20px;
    padding: 10px;
    border-radius: 20px;
    .img {
      width: 220px;
      flex-shrink: 0;
      padding: 20px;
    }

    .info {
      .title {
        font-size: 28px;
        font-weight: 500;
      }
      .desc {
        font-size: 20px;
        color: #ababab;
        margin: 10px 0;
      }
      .new {
        font-size: 30px;
        color: red;
        margin-right: 42px;
      }
      .old {
        font-size: 28px;
        color: #ababab;
        text-decoration: line-through;
      }
      .pingjia {
        margin-top: 10px;
      }
      .tejia {
        background: red;
        border-radius: 5px;
        padding: 5px;
        color: white;
        font-size: 28px;
        height: 34px;
        margin-right: 22px;
      }
      .pj,
      .haoping {
        color: #ababab;
        margin-right: 22px;
      }
    }
  }
}
</style>
