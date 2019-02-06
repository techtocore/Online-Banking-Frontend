<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <br>
      <br>
      <h1>Login</h1>
      <br>
      <form v-on:submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            class="form-control"
            name="email"
            v-validate="{ required:true, email: true}"
            placeholder="Email ID"
            v-model="email"
          >
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            class="form-control"
            type="password"
            name="password"
            v-validate="{ required:true,min:8}"
            placeholder="Password"
            v-model="password"
          >
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="col-4"></div>
    <modal name="notifyLog" :height="'auto'" @closed="clearMsg">
      <div class="modalColor">{{msg}}</div>
    </modal>
  </div>
</template> 

<script>
export default {
  name: "app",
  beforeCreate() {
    if (this.$session.exists()) {
      this.$router.push("/DashBoard");
    }
  },
  data() {
    return {
      email: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    login: function() {
      if (this.errors.has("email") || !this.fields.email.dirty) {
        this.msg = "Enter a valid email";
        this.$modal.show("notifyLog");
      } else if (this.errors.has("password") || !this.fields.password.dirty) {
        this.msg = "Password should be entered";
        this.$modal.show("notifyLog");
      } else {
        this.$http
          .post(
            this.$API_LOCATION + "/login",
            {
              email: this.email,
              password: this.password
            },
            {
              emulateJSON: true
            }
          )
          .then(
            response => {
              if (!(response.body.data.role == "p")) {
                this.$session.start();
                this.$session.set("jwt", response.body.data.token);
                this.$session.set("role", response.body.data.role);
                this.$router.push("/home");
              } else {
                this.msg = "You are not authorized";
                this.$modal.show("notifyLog");
              }
            },
            response => {
              if (response.body.error) {
                this.msg = response.body.error;
              } else {
                this.msg = "There has been some error. Please try again later";
              }
              this.$modal.show("notifyLog");
            }
          );
      }
    },
    clearMsg: function() {
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.form-group,h1 {
  color: aliceblue;
}
.modalColor {
  padding: 5%;
  font-weight: bold;
  background-color: #000;
  color: #ef690d;
  height: 100%;
  text-align: center;
  font-size: 20px;
  border: solid 1px #ef690d;
}
</style>
