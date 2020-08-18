<template functional>
  <div class="cati flex">
    <dl>
      <dt></dt>
      <dd>框架</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>框架</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>框架</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>框架</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>框架</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "cati",
  functional:true
};
</script>

<style lang="scss" scoped>
.cati {
  height: 170px;
  justify-content: space-between;
  dl {
    height: 100%;
    flex: 1;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    dt {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: rgb(0, 217, 255);
      margin-bottom: 10px;
    }
    dd {
      font-size: 30px;
    }
  }
}
</style>
