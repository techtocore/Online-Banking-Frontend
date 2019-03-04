<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <br>
      <br>
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
            id="loginPassword"
            class="form-control"
            type="password"
            name="password"
            v-validate="{ required:true}"
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
    $("#loginPassword").keypress(function(e) {
      if (e.which == 13) {
        login();
      }
    });
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
              this.$session.start();
              this.$session.set("jwt", response.body.token);
              this.$session.set("role", response.body.role);
              //this.msg = "Logged In";
              //this.$modal.show("notifyLog");
              this.$router.push("/dashboard");
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
.form-group,
h1 {
  color: aliceblue;
}
.modalColor {
  padding: 5%;
  font-weight: bold;
  background-color: #2c3e50;
  color: #42b983;
  height: 100%;
  text-align: center;
  font-size: 20px;
  border: solid 1px #42b983;
}
</style>
