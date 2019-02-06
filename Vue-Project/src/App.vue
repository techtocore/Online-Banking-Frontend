<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>


<script>
import footer from "./components/footer";
import navbar from './components/navbar'

export default {
  components: {
    footers: footer,
    navbar: navbar
  },
  name: "app",
  data() {
    return {};
  }
};
</script>
