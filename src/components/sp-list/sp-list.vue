<template>
  <div class="sp-list">
    <van-nav-bar
      title="商品详情"
      class="title"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="black">
      <van-swipe-item v-for="i in data.banners" :key="i.id">
        <img :src="i.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 详情 -->
    <div class="xq flex">
      <div class="price">
        <div class="now">¥{{ data.newPrice }}</div>
        <div class="old">原价¥{{ data.oldPrice }}</div>
        <div class="tejia">特价</div>
      </div>
      <div class="color flex">
        <div class="left">
          <div
            @click="active($event, i.color)"
            :key="i.color"
            class="imgs"
            v-for="i in data.standardImages"
          >
            <img :src="i.img" :alt="i.color" />
            <span>{{ i.color }}</span>
          </div>
        </div>
        <div class="right">
          <div class="top flex">
            <span class="flex">左眼</span>
            <span class="flex">0.0</span>
          </div>
          <div class="bot flex">
            <span @click="eql" class="flex">-</span>
            <span class="mid flex">{{ num }}</span>
            <span @click="eql" class="flex">+</span>
          </div>
        </div>
      </div>
      <div class="ziying">
        <span class="one">自营</span>
        <span>{{ data.name }}</span>
      </div>
      <div class="desc">
        {{ data.desc }}
      </div>
      <div class="shuoming flex">
        <span class="t">说明</span>
        <span>{{ data.explain }}</span>
        <span class="arrow">></span>
      </div>
    </div>

    <!-- 商品评价 -->
    <goods-pingjia :data="data"></goods-pingjia>

    <!-- 图文详情 -->
    <tuwen-xq :data="data"></tuwen-xq>

    <!-- 结算底部 -->
    <van-goods-action class="jiesuan">
      <van-goods-action-icon
        @click="shoucang = !shoucang"
        :icon="shoucang ? `like` : `like-o`"
        :color="shoucang ? `red` : ``"
        :text="shoucang ? `已收藏` : `收藏`"
      />
      <van-goods-action-icon :badge="shopcar" icon="cart-o" text="购物车" />
      <van-goods-action-button
        @click="addShop"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button @click="buyNow" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { getGoodsDetail } from "@/api";
import pingjia from "./pingjia";
import tuwen from "./tu-xq";
export default {
  name: "sp-list",
  data() {
    return {
      data: [],
      num: 0,
      color: "",
      shoucang: false
    };
  },
  components: {
    "goods-pingjia": pingjia,
    "tuwen-xq": tuwen
  },
  computed: {
    shopcar() {
      return this.$store.state.shopcar;
    }
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.back();
    },
    //计算数量
    eql(e) {
      if (e.target.innerText === "+") {
        this.num++;
      } else {
        if (this.num > 0) {
          this.num--;
        }
      }
    },
    //选中颜色
    active(e, color) {
      let list = e.currentTarget.classList;
      if (list.contains("active")) {
        list.remove("active");
        this.color = "";
        return;
      }
      let a = document.querySelectorAll(".imgs");
      for (const i of a) {
        i.className = "imgs";
      }
      list.toggle("active");
      this.color = color;
    },
    //加入购物车
    addShop() {
      if (!this.color) {
        this.$toast("请先选择颜色");
        return;
      }
      this.$store.commit("addshopcar");
    },
    //购买按钮
    buyNow() {
      //跳转到购物车
      console.log(2);
    }
  },
  created() {
    getGoodsDetail().then(e => (this.data = e.data));
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar__title.van-ellipsis {
  color: white;
}
.sp-list {
  width: 100%;
  height: 100px;
  .title {
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
    background: red;
  }
  .my-swipe {
    height: 675px;
  }
}
//选中颜色样式
.active {
  border: 3px solid #c40000 !important;
}
//详情表
.xq {
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  height: 512px;
  .price {
    height: 90px;
    display: flex;
    align-items: center;

    .now {
      margin-left: 30px;
      color: red;
      font-size: 42px;
      font-weight: 700;
    }
    .old {
      margin-left: 40px;
      font-size: 24px;
      color: #808080;
      text-decoration: line-through;
    }
    .tejia {
      margin-left: 40px;
      font-size: 24px;
      padding: 10px;
      height: 36px;
      line-height: 2.467vw;
      color: white;
      background: red;
    }
  }
  .color {
    justify-content: start;
    .left {
      display: flex;
      width: 412px;
      margin-left: 30px;
    }
    .imgs {
      position: relative;
      width: 122px;
      height: 122px;
      border: 3px solid #999;
      margin-right: 20px;
      span {
        position: absolute;
        bottom: 0;
        left: 0px;
        text-align: right;
        background: #999999;
        width: 100%;
        font-size: 10px;
      }
    }
    .right {
      .top {
        text-align-last: justify;
        span {
          border: 1px solid #bbb;
          margin-left: 30px;
          height: 50px;
          padding: 10px;
          width: 97px;
          border-radius: 10px;
        }
      }
      .bot {
        margin-top: 30px;
        margin-left: 30px;
        justify-content: start;
        span {
          flex-grow: 0;
          border-radius: 10px;
          padding: 10px;
          border: 1px solid #bbb;
          height: 48px;
        }
        .mid {
          flex: 1;
          align-items: center;
          border-radius: 0;
          width: 120px;
        }
      }
    }
  }
  .ziying {
    margin: 30px 0;
    display: flex;
    align-items: center;
    margin-left: 40px;
    height: 42px;
    font-size: 30px;
    .one {
      padding: 0 5px;
      color: red;
      border: 1px solid red;
      margin-right: 25px;
    }
  }
  .desc {
    margin-left: 40px;
    color: #7c7c7c;
    font-size: 24px;
    margin-bottom: 18px;
  }
  .shuoming {
    position: relative;
    height: 80px;
    padding-left: 46px;
    justify-content: start;
    border-top: 1px solid #e8e8e8;
    .t {
      font-size: 40px;
      color: black;
      font-weight: 700;
      margin-right: 20px;
    }
    span {
      color: #7c7c7c;
      font-size: 30px;
    }
    .arrow {
      position: absolute;
      right: 56px;
      font-size: 40px;
    }
  }
}

//过渡动画
.v-enter {
  opacity: 0.3;
}
.v-enter-active {
  transition: all 0.8s ease;
}
.v-enter-to {
  opacity: 1;
}
</style>
