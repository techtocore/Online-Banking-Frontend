<template>
  <div class="container" style="padding-top:70px; color:white;">
    <!-- TODO: SHOW ONLY IF LOGGED IN -->
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <br>
        <h1>Menu</h1>
        <div class="list-group" style="overflow-y: auto; height: 60vh;">
          <div v-if="role === 'superuser'">
            <button
              type="button"
              class="list-group-item list-group-item-action active"
              @click="switchTab('overview')"
            >Account Summary</button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('benificiaries')"
            >Manage Benificiaries</button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('users')"
            >Users</button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('createRole')"
            >Create Role</button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('attachRole')"
            >Attach Role</button>
            <!-- <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('createPermission')"
            >Create Permission</button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('attachPermission')"
            >Attach Permission</button>-->
            <button
              type="button"
              class="list-group-item list-group-item-action"
              @click="switchTab('changePassword')"
            >Change Password</button>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12">
        <div v-if="x=='test'">
          <test></test>
        </div>
        <div v-if="x=='overview'">
          <overview></overview>
        </div>
        <div v-if="x=='benificiaries'">
          <benificiaries></benificiaries>
        </div>
        <div v-if="x=='users'">
          <users></users>
        </div>
        <div v-if="x=='attachRole'">
          <attachRole></attachRole>
        </div>
        <div v-if="x=='attachPermission'">
          <attachPermission></attachPermission>
        </div>
        <div v-if="x=='createRole'">
          <createRole></createRole>
        </div>
        <div v-if="x=='createPermission'">
          <createPermission></createPermission>
        </div>
        <div v-if="x=='changePassword'">
          <changePassword></changePassword>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import test from "@/components/test.vue";
import attachRole from "@/components/attachRole.vue";
import attachPermission from "@/components/attachPermission.vue";
import createRole from "@/components/createRole.vue";
import createPermission from "@/components/createPermission.vue";
import changePassword from "@/components/changePassword.vue";
import users from "@/components/users.vue";
import overview from "@/components/overview.vue";
import addBenificiary from "@/components/addBenificiary.vue";
import viewBenificiary from "@/components/viewBenificiary.vue";
import deleteBenificiary from "@/components/deleteBenificiary.vue";
import benificiaries from "@/components/benificiaries.vue";

export default {
  name: "dashboard",
  components: {
    test,
    attachRole,
    attachPermission,
    createRole,
    createPermission,
    changePassword,
    users,
    overview,
    addBenificiary,
    benificiaries,
    viewBenificiary,
    deleteBenificiary
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  created() {
    this.role = this.$session.get("role");
    this.x = "overview";
  },
  data() {
    return {
      x: "",
      role: ""
    };
  },
  methods: {
    switchTab: function(tabName) {
      this.x = tabName;
    }
  }
};
</script>
<style scoped>
h1 {
  color: #42b983;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>