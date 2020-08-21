<template>
  <div id="app" ref="app">
    <title-bar></title-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
export default {
  components: {
    "title-bar": Title,
    "footer-bar": Footer
  }
};
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
  width: 100%;
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
</style>
