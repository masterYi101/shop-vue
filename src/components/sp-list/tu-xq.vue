<template>
  <div class="info">
    <div class="tuwen">
      <div class="title">图文详情</div>
      <h2 class="info">产品信息</h2>
      <table class="table ww">
        <tr class="tr" :key="i.key" v-for="i in data.productMessage">
          <td class="lf">{{ i.key }}</td>
          <td class="rf">{{ i.value }}</td>
        </tr>
      </table>
    </div>
    <div class="yinhua flex-c">
      <div class="title">产品印花</div>
      <div :key="i.img" class="zixi" v-for="i in data.productStamp">
        <h3 class="top">{{ i.stamp }}</h3>
        <p class="text">{{ i.text }}</p>
        <img :src="i.img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tuwen",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.title {
  background-color: #000;
  color: white;
  border-radius: 10px;
  margin-bottom: 30px;
  height: 60px;
  text-align: center;
  line-height: 60px;

  font-size: 28px;
}
.tuwen {
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;

  margin-top: 20px;
  padding: 30px 20px 30px;

  .info {
    height: 72px;
    font-size: 32px;
    padding: 20px 0;
  }
  .table {
    margin-top: 30px;
    padding-bottom: 30px;
    border-collapse: collapse;
    font-size: 24px;
    .tr {
      border: 1px solid #bbb;
      height: 76px;
      td {
        border: 1px solid #bbb;
      }
      .lf {
        color: #707070;
        padding-left: 34px;
      }
      .rf {
        padding-left: 34px;
        color: black;
      }
    }
  }
}
.yinhua {
  padding: 30px 20px 30px;
  .zixi {
    margin-bottom: 20px;
    border-bottom: 1px solid silver;
    .text {
      margin: 30px 0;
    }
  }
}
</style>
