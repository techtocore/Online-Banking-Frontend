<template>
  <div>
    <center>
      <br>
      <h2 class="head">Transaction History</h2>
    </center>
    <table id="allEvents" class="table table-hover main">
      <thead>
        <tr>
          <th>ID</th>
          <th>From</th>
          <th>To</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Date and Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tList" :key="item.id">
          <td>{{item.id}}</td>
          <td><div v-if=" item.from_account_no != ac ">{{item.from_account_no}}</div></td>
          <td><div v-if=" item.to_account_no != ac ">{{item.to_account_no}}</div></td>
          <td><div v-if=" item.from_account_no === ac ">&#8377; {{item.amount}}</div></td>
          <td><div v-if=" item.to_account_no === ac ">&#8377; {{item.amount}}</div></td>
          <td><div>{{item.updated_at}}</div></td>
        </tr>
      </tbody>
    </table>

    <modal name="tModal" :width="'80%'" :height="'auto'">
      <div class="modalColor">{{msg}}</div>
    </modal>
  </div>
</template>

<script>
export default {
  updated() {
    $(document).ready(function() {
      $("#allEvents").DataTable();
    });
  },
  components: {},
  data() {
    return {
      tList: "",
      msg: "",
      ac: ""
    };
  },

  methods: {
    fetchTransactions: function() {
      this.$http
        .get(this.$API_LOCATION + "/viewtransaction", {
          headers: {
            Authorization: "Bearer " + this.$session.get("jwt")
          }
        })
        .then(
          data => {
            if (data.body.success) {
              //this.userList = data.body.data;
              let list = data.body.Transactions;
              this.ac = data.body.Account_no;
              this.tList = list;
              //console.log(this.userList);
            } else {
              this.msg = "There has been some error. Please try again later.";
              this.$modal.show("tModal");
            }
          },
          data => {
            if (data.body.error) {
              this.msg = data.body.error;
              this.$modal.show("tModal");
            } else {
              this.msg = "There has been some error. Please try again later.";
              this.$modal.show("tModal");
            }
          }
        );
    }
  },

  beforeMount() {
    this.fetchTransactions();
  }
};
</script>

<style scoped>
* {
  color: aliceblue;
}
.main {
  background: #343a40;
  color: rgb(163, 161, 157) !important;
  padding: 2%;
  margin-top: 3%;
  margin-bottom: 5%;
  border-radius: 10px;
}

.head {
  color: white;
}

hr {
  width: 70%;
  background: #42b983;
  height: 4px;
  margin-bottom: 3%;
}

td {
  background: #343a40;
  color: rgb(201, 193, 193);
}

th {
  background: #343a40;
  color: #42b983;
}

.modalColor {
  padding: 5%;
  font-weight: bold;
  background-color: #343a40;
  color: #42b983;
  height: 100%;
  text-align: center;
  font-size: 20px;
  border: solid 1px #42b983;
}
</style>
