<template>
  <div class="my-dingdan">
    <van-nav-bar
      class="tabbar"
      title="我的订单"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- menu -->
    <div class="body">
      <div class="top-menu flex" @click="select">
        <div
          :class="d === active ? `active` : ``"
          v-for="(i, d) in list"
          :key="i"
          class="itm"
        >
          {{ i }}
        </div>
      </div>
      <div class="order">
        <div class="juti-dingdan" v-for="i in jisuan" :key="i.orderId">
          <div class="top flex">
            <div class="left">{{ i.orderTime }}</div>
            <div class="rigth">{{ list[i.type] }}</div>
          </div>
          <div class="info flex">
            <div class="img"><img :src="i.img" /></div>
            <div class="text">{{ i.desc }}</div>
            <div class="num flex-c">
              <div class="top1">¥{{ i.price }}</div>
              <div class="down">X{{ i.num }}</div>
            </div>
          </div>
          <div class="price flex">
            <div class="zonghe">共{{ i.num }}件</div>
            <div class="pr">
              应付总额: <span>¥{{ i.num * i.price }}</span>
            </div>
          </div>
          <div class="pay">
            <van-button class="btn" plain type="info">{{
              btn1(i.type)
            }}</van-button>
            <van-button class="btn" plain type="info">{{
              btn2(i.type)
            }}</van-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 具体订单 -->
  </div>
</template>

<script>
import { getOrder } from "@/api";
export default {
  name: "my-dingdan",
  data() {
    return {
      list: ["全部", "代付款", "待发货", "待收货", "交易成功"],
      active: 0,
      data: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    select(e) {
      this.active = this.list.indexOf(e.target.innerText);
    },
    btn1(type) {
      if (type === 4) {
        return "交易完成";
      }
      return "取消订单";
    },
    btn2(type) {
      if (type === 4) {
        return "订单完成";
      }
      return "查看状态";
    }
  },
  computed: {
    jisuan() {
      return this.active
        ? this.data.filter(e => e.type === this.active)
        : this.data;
    }
  },
  mounted() {
    getOrder().then(result => (this.data = result.data));
  }
};
</script>

<style lang="scss" scoped>
.tabbar {
  height: 100px;
  width: 100%;
  background: red;
  position: fixed;
  top: 0;
}
.my-dingdan {
  height: 100%;
}
.body {
  min-height: 100vh;
  background: #f2f2f2;
  padding: 10px 0;
}
.active {
  font-weight: 700;
  border-bottom: 3px solid red;
}
.top-menu {
  position: absolute;
  top: 100px;
  z-index: 999;
  width: 100%;
  padding: 0 30px;
  background: white;
  height: 88px;
  justify-content: start;
  .itm {
    padding-bottom: 5px;
    text-align: center;
    flex: 1;
  }
}
// 订单样式
.order {
  margin-top: 100px;
  .juti-dingdan {
    margin-bottom: 20px;
    background: white;
    padding: 0 30px 40px;
  }

  .top {
    height: 80px;
    justify-content: space-between;

    border-bottom: 1px solid #e8e8e8;
  }
  .info {
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    .img {
      width: 160px;
      height: 160px;
      padding: 10px;
    }
    .text {
      flex: 1;
      font-size: 28px;
    }
    .num {
      font-size: 26px;
      color: #777;
      justify-content: center;
      width: 80px;
      text-align: right;
      .top1 {
        margin-bottom: 10px;
      }
    }
  }
  .price {
    justify-content: flex-end;
    height: 78px;
    color: #777;
    .zonghe {
      margin-right: 10px;
    }
    span {
      color: red;
    }
  }
  .pay {
    text-align: right;

    .btn {
      height: 55px;
      margin-left: 15px;
      border-radius: 20px;
    }
  }
}
</style>
