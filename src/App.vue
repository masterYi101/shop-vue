<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "title-bar": Title,
    "footer-bar": Footer
  }
};
</script>

<style lang="scss">
.title {
  height: 300px;
}
</style>
