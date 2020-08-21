<template>
  <div class="myinfo">
    <div class="title">
      <div class="bg"></div>

      <!-- 我的信息 -->
      <div class="my-mes flex-c">
        <div class="top flex">
          <img :src="`/img/atom.png`" />
          <div class="name">机器猫</div>
        </div>
        <div class="info flex">
          <div v-for="i in topMenu" :key="i.text" class="item flex-c">
            <span class="num">{{ i.num }}</span>
            <span class="text">{{ i.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="dingdan">
      <!-- 我的订单 -->

      <menu-list class="list1" :list="list1"></menu-list>
      <!-- 我的服务 -->
      <menu-list class="list2" :list="list2"></menu-list>
    </div>

    <!-- 退出按钮 -->
    <div class="btn">
      <van-button class="children" plain type="danger">退出</van-button>
    </div>
  </div>
</template>

<script>
import menu from "./menu-zujian";
export default {
  name: "myinfo",
  data() {
    return {
      topMenu: [
        { num: 3, text: "收藏" },
        { num: 2, text: "关注" },
        { num: 22, text: "足迹" },
        { num: 3, text: "心得" }
      ],
      list1: {
        title: "我的订单",
        children: [
          { icon: "comment-circle", text: "代付款" },
          { icon: "shop-collect", text: "代发货" },
          { icon: "phone-circle", text: "代收货" },
          { icon: "alipay", text: "退款退货" }
        ]
      },
      list2: {
        title: "我的服务",
        children: [
          { icon: "manager", text: "邀请好友" },
          { icon: "gem", text: "签到赢红包" },
          { icon: "checked", text: "优惠券" },
          { icon: "thumb-circle", text: "限时购" },
          { icon: "manager", text: "我的收藏" },
          { icon: "manager", text: "收获地址" },
          { icon: "manager", text: "客户中心" },
          { icon: "manager", text: "充值中心" },
          { icon: "manager", text: "我的问答" },
          { icon: "manager", text: "领券中心" },
          { icon: "manager", text: "验光单" },
          { icon: "manager", text: "试用中心" }
        ]
      }
    };
  },
  components: {
    "menu-list": menu
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  height: 62vw;
  .bg {
    background-color: red;
    height: 320px;
    width: 100vw;
  }
  .my-mes {
    position: absolute;
    top: 200px;
    width: 622px;
    padding: 10px 0 20px;
    background-color: white;
    border-radius: 20px;
    .top {
      height: 100px;
      img {
        margin-left: 50px;
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
      .name {
        font-weight: 700;
        font-size: 36px;
        margin-left: 100px;
      }
      justify-content: start;
    }
    .info {
      flex-grow: 1;
      align-items: stretch;
      justify-content: start;
    }
    .item {
      &:nth-child(1n) {
        border-right: 1px solid silver;
      }
      &:last-child {
        border-right: none;
      }
      align-items: center;
      justify-content: center;
      flex: 1;
      .num {
        color: #7e7e7e;
        font-size: 30px;
      }
      .text {
        color: #bdbdbd;
      }
    }
    height: 246px;
    margin: 0 64px;
  }
}

.list2 {
  margin-top: 20px;
}
.btn {
  padding: 20px;
  .children {
    width: 100%;
  }
}

</style>
