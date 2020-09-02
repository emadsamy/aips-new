<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="mb-50 pt-5" v-html="row"></div>
      </div>
    </div>
    <!-- Content -->

    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
// import DownloadCatalog from "../components/DownloadCatalog.vue";
import axios from "axios";
export default {
  name: "NavbarPage",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  data() {
    return {
      row: "",
    };
  },
  created() {
    // Fetch Navbar Pages Data
    const url = window.baseURL + "/pages/" + this.$route.params.slug;
    axios
      .get(url)
      .then((res) => {
        const data = res.data.row.body;
        this.row = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
