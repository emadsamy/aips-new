<template>
  <div class="program-sidebar">
    <!-- <div class="sidebar-link" v-for="(accreditation, index) in accreditations"  :key="index">
                              <a :href="'#' + accreditation.slug" class="link">{{ accreditation.title }}</a>
    </div>-->
    <div class="sidebar-link" v-for="(row, index) in rows" :key="index">
      <router-link :to="row.slug" class="link">{{ row.title }}</router-link>
    </div>

    <!-- <div class="sidebar-link">
      <router-link to="/accreditation" class="link active">What is Accreditation?</router-link>
    </div>

    <div class="sidebar-link">
      <router-link
        to="/should-choose-accreditation"
        class="link"
      >Why You Should Choose Our Accreditation</router-link>
    </div>

    <div class="sidebar-link">
      <router-link to="/accreditation-benefits" class="link">Accreditation Benefits</router-link>
    </div>

    <div class="sidebar-link">
      <router-link
        to="/accreditation-procedures"
        class="link"
      >Accreditation Procedures for Training Provider / Instructors</router-link>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AccreditationSidebar",
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    fetchRow() {
      const url = window.baseURL + "/accreditations";
      axios
        .get(url)
        .then((res) => {
          const data = res.data.rows;
          this.rows = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchRow();
  },
};
</script>

<style scoped>
</style>
