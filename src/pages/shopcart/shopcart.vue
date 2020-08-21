<template>
  <div class="shopcart">
    <div class="list flex" v-for="i in list" :key="i.id">
      <div class="img">
        <img :src="i.img" />
      </div>
      <div class="text">
        <div class="title"><span class="tejia">特价</span>{{ i.name }}</div>
        <div class="price">¥{{ i.price }}</div>
        <div class="num">X{{ i.num }}</div>
      </div>
    </div>

    <!-- 结算栏 -->
    <van-submit-bar
      class="submit"
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>

    <!-- 地址选择栏 -->
    <van-address-list
      class="address"
      v-if="addDisplay"
      v-model="chosenAddressId"
      :list="address"
      @add="next"
      @edit="edit"
      add-button-text="下一步"
      default-tag-text="默认"
    >
      <div class="but flex">
        <button @click="btn" class="flex">X</button>
      </div>
    </van-address-list>
  </div>
</template>

<script>
import { getCart } from "@/api";
export default {
  name: "shopcart",
  data() {
    return {
      list: [],
      chosenAddressId: 1,
      addDisplay: false,

      checked: true
    };
  },
  methods: {
    btn() {
      this.addDisplay = false;
    },
    next() {
      this.$toast("暂无支付接口");
    },
    edit() {
      console.log(2);
      this.$router.push("/address");
    },
    onSubmit() {
      if (this.price) {
        this.addDisplay = true;
        console.log("提交订单");
      } else {
        this.$toast("请选择商品");
      }
    }
  },
  computed: {
    price() {
      if (!this.checked) {
        return 0;
      }
      let num = 0;
      this.list.map(e => {
        num += e.price * e.num;
      });
      return num * 100;
    },
    address() {
      return this.$store.state.address;
    }
  },
  created() {
    getCart().then(data => (this.list = data.data));
  }
};
</script>

<style lang="scss" scoped>
.submit {
  bottom: 100px;
}
.shopcart {
  margin-top: 100px;
  padding: 20px;
}
.list {
  height: 205px;
  justify-content: start;
  border: 2px solid #777;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px #777;
  .img {
    width: 206px;
    padding: 10px;
  }
  .text {
    .title {
      font-size: 28px;
      .tejia {
        color: red;
        margin-right: 20px;
      }
    }
    .price {
      margin: 15px 0;
      font-size: 22px;
      font-weight: 500;
    }
    .num {
      font-size: 22px;
    }
  }
}

.address {
  position: fixed;
  bottom: 0;
  background-color: #eee;
  height: 550px;
  z-index: 888;
}
.but {
  button {
    margin-top: 15px;
    width: 100px;
    outline: none;
    border: none;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10px 40px;
    background-color: red;
  }
}
</style>
