<template>
  <div class="container" style="padding-top:70px; color:white">
    <!-- TODO: SHOW ONLY IF LOGGED IN -->
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <h2>Menu</h2>
        <br>
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action active" @click="switchTab('test')">
            Dashboard 
          </button>
          <button type="button" class="list-group-item list-group-item-action" @click="switchTab('test')">Test1</button>
          <button type="button" class="list-group-item list-group-item-action">Test2</button>
          <button type="button" class="list-group-item list-group-item-action">Test3</button>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12">
        <div v-if="x=='test'">
          <test></test>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import test from "@/components/test.vue";
  
  export default {
    name: "dashboard",
    components: {
      test
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