<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header main-program-header">
          <div class="program-header-details">
            <div class="align-center">
              <div class="title">AIPS Programs</div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{backgroundImage:`url(`+require('../assets/img/home.jpg')+`) !important`}"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div class="sidebar-link" v-for="(link, index) in sidebarLinks" :key="index">
                <a :href="'#'+link.slug" class="link">{{ link.title }}</a>
              </div>
            </div>
            <div class="program-content">
              <div class="mb-50 pt-5" v-html="row"></div>
            </div>
            <DownloadCatalog />
          </div>
        </div>
      </div>
    </div>
    <!-- Content -->

    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div>
</template>

<style scoped>
table,
tr,
td,
th {
  border: none !important;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DownloadCatalog from "../components/DownloadCatalog.vue";
import axios from "axios";
export default {
  name: "NavbarPage",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog,
  },
  data() {
    return {
      row: "",
    };
  },
  methods: {
    getLinks() {
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
  },
  created() {
    this.getLinks();
  },
  watch: {
    $route() {
      this.getLinks();
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
};
</script>
