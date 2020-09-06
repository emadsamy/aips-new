<template>
  <!-- For Loop -->
  <div
    v-for="i in row.key"
    :key="i"
    :class="i == 0 ? 'hidden' : ''"
    :id="'frm_' + i"
  >
    <!-- Remove -->
    <div class="pull-right ui-mt-10">
      <button
        v-if="i != 0"
        type="button"
        class="btn btn-danger"
        @click="removeItem(i)"
      >
        <span class="btn-icon ti-close font-bold">X</span>
      </button>
    </div>
    <!-- End Remove -->

    <!-- your code goes here -->

    <!--  example -->
    <div class="form-group">
      <label :for="'iInput' + i">Price Name</label>
      <input
        class="form-control"
        :id="'iInput' + i"
        type="text"
        v-model="row.price_names[i]"
      />
    </div>
  </div>

  <!-- Add more -->
  <div class="row pull-right">
    <button
      type="button"
      class="btn btn-dark btn-circle btn-with-icon"
      @click="addMore()"
    >
      <span class="btn-icon ti-plus font-bold"> Add More</span>
    </button>
  </div>
  <!-- End more -->
</template>

<script>
export default {
  name: "Create",
  components: {},
  data() {
    return {
      row: {
        key: 0,
        price_names: [],
      },
      btnLoading: false,
    };
  },
  mounted() {},
  computed: {},
  created() {},
  methods: {
    // Add New
    addNew() {
      this.btnLoading = true;
      this.axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
        Authorization: `Bearer ` + this.auth.access_token,
      };

      // prices
      for (let i = 1; i < this.row.price_names.length; i++) {
        this.row.prices[i] = {
          price_name: this.row.price_names[i],
        };
      }
      const options = {
        url: window.baseURL + "/packages",
        method: "POST",
        data: {
          // prices
          prices: this.row.prices,
        },
      };
    },

    // items add more
    addMore() {
      this.row.key++;
    },
    removeItem(i) {
      document.querySelector("#frm_" + i).remove();
      this.row.price_names[i] = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
