<template>
  <div>
    <div :is="currentComponent"></div>
    <div class="hello" v-show="!currentComponent">
      <br>
      <br>
      <h1>{{ msg }}</h1>
      <br>
      <br>
      <center>
        <button class="btn btn-primary">Signup</button>
        <br>
        <br>
        <br>
        <button @click="swapComponent('login')" class="btn btn-primary">Login</button>
      </center>
    </div>
  </div>
</template>

<script>
import login from "./login.vue";

export default {
  name: "app",
  props: {
    msg: String
  },
  data() {
    return {
      currentComponent: null
    };
  },
  components: {
    login: login
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
