<template>
  <div id="app">
    <router-view></router-view>
    <footer></footer>
  </div>
</template>


<script>
import footer from "./components/footer";

export default {
  components: {
    footer: footer
  },
  name: "app",
  data() {
    return {};
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
