<template>
  <div class="pingjia flex-c">
    <div class="pj-title ww flex">
      <span class="pj">商品评价({{ data.appraise && data.appraise.num }})</span>
      <span class="hp red"
        >好评度{{ data.appraise && data.appraise.rateScore }}%</span
      >
    </div>
    <div class="pj-body flex">
      <div
        :key="d"
        v-for="(i, d) in data.appraise && data.appraise.list"
        class="card flex"
      >
        <div class="left flex">
          <div class="lt ww flex">
            <img :src="i.userImg" alt="" class="tx" />
            <span class="name">{{ i.name }}</span>
          </div>
          <div class="lb">
            <span class="red">心得</span>
            <span class="text">{{ i.content }}</span>
          </div>
        </div>
        <div class="right hh">
          <img class="hh" :src="i.showImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pingjia",
  data() {
    return {};
  },
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.pingjia {
  overflow: auto;
  height: 365px;
  border-bottom: 1px solid slategrey;
  .pj-title {
    font-size: 28px;
    height: 84px;
    flex-shrink: 0;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 70px;
    .pj {
      font-size: 40px;
      font-weight: 700;
    }
    .hp {
      font-size: 36px;
    }
  }
  .pj-body {
    padding-left: 30px;
    flex-grow: 1;
    justify-content: start;
    align-items: flex-start;
    .card {
      padding: 12px;
      border-radius: 5px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      width: 560px;
      height: 260px;
      margin-right: 20px;
      align-items: flex-start;
    }
    .left {
      flex-direction: column;

      width: 300px;
      .lt {
        height: 66px;
        justify-content: start;
        flex-shrink: 0;
        img {
          height: 100%;
          width: 66px;
          border-radius: 50%;
        }
        .name {
          color: #8c8c8c;
          margin-left: 20px;
        }
      }
      .lb {
        margin-top: 10px;
        .red {
          border: 1px solid red;
        }
        .text {
          font-size: 24px;
          margin-left: 20px;
          color: #aaa;
        }
      }
    }
    .right {
      width: 260px;
    }
  }
}
</style>
