<template>
  <section class="header">
    <nav class="navbar navbar-static-top navbar-expand-md navbar-dark bg-dark">
      <a href="/" class="navbar-brand" style="padding-left:15px;">PBS</a>
      <button
        class="navbar-toggler"
        type="button"
        style="background:transparent;"
        data-toggle="collapse"
        data-target="#navbar7"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse collapse justify-content-stretch"
        id="navbar7"
        style="background:transparent;"
      >
        <ul class="navbar-nav ml-auto" style="background:transparent;">
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item" v-if="this.$session.exists()">
            <a class="nav-link" v-on:click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    logout: function() {
      this.$session.destroy();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  color: #42b983;
  font-weight: bold;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
