<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header entrepreneurship-header main-program-header">
          <div
            class="program-header-details"
            :style="'background:' + row.bgColor + '!important'"
          >
            <div class="align-center">
              <div class="title">{{ row.bgTitle }}</div>
              <div class="description-type goldColor">Programs</div>
            </div>
          </div>
          <!-- imageHeader -->
          <div
            class="program-header-view"
            :style="{ backgroundImage: `url(` + imageHeader + `) !important` }"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar program-sidebar-bullet">
              <div class="sidebar-link-bullet">
                <a href="#" class="link mb-3">{{ row.title }}</a>
                <ul class="list-unstyled" style="margin-left: 30px">
                  <li v-for="(pro, index) in programs" :key="index">
                    <router-link
                      :to="{
                        name: 'program-detail',
                        params: { slug: sector_slug, pro: pro.slug },
                      }"
                      class="bullet-link"
                      >{{ pro.title }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="program-content">
              <div class="description-about" v-html="row.short_body"></div>
              <div class="program-view-head-text">
                <div class="title">{{ pageTitle }}</div>
                <div class="description-type">Programs</div>
              </div>
              <div class="program-entre-row">
                <div class="title mb-5">Entrepreneurship</div>
                <div class="program-entre-content">
                  <div class="program-entre-text">
                    <div class="medium-entre-title">Program Overview</div>
                    <div class="text mb-4" v-html="row.body1"></div>

                    <div class="apply-border-bottom">
                      <div class="medium-entre-title">What You’ll Learn</div>
                      <div class="text mb-5" v-html="row.body2"></div>
                    </div>

                    <div class="medium-entre-title">Who Should Apply?</div>
                    <div class="text mb-5" v-html="row.body3"></div>
                  </div>
                  <div class="program-entre-application">
                    <div class="apply-border-bottom">
                      <div class="medium-entre-title">Online Application</div>
                      <router-link
                        :to="{
                          name: 'OnlineApplication',
                          query: { pTitle: row.title },
                        }"
                        class="read-more mb-4"
                      >
                        <div>
                          Apply Now
                          <span class="icon-back"></span>
                        </div>
                      </router-link>
                    </div>
                    <div class="apply-border-bottom">
                      <div class="medium-entre-title">Entry Requirements</div>
                      <div class="text mb-3" v-html="row.body4"></div>
                    </div>
                    <div>
                      <div class="medium-entre-title">Price</div>
                      <div class="text mb-3" v-html="row.body5"></div>
                    </div>
                  </div>
                </div>
              </div>
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
.program-header-view {
  background-position: center center;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-entre-content > div {
    width: 100%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .entrepreneurship-header .program-header-details {
    width: 400px !important;
  }
  .program-header.main-program-header .program-header-view {
    width: calc(100% - 400px) !important;
  }
  .program-header.main-program-header .title {
    font-size: 40px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DownloadCatalog from "../components/DownloadCatalog.vue";
import axios from "axios";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog,
  },
  data() {
    return {
      row: [],
      pageTitle: "",
      pageImage: "",
      pageBody: "",
      imageHeader: "",
      programs: [],
      sector_slug: this.$route.params.slug,
    };
  },
  watch: {
    $route() {
      this.fetchRow();
    },
  },
  created() {
    this.fetchRow();
  },
  methods: {
    fetchRow() {
      const url =
        window.baseURL + "/programs/sectors/products/" + this.$route.params.pro;
      axios
        .get(url)
        .then((res) => {
          const data = res.data.row;
          this.row = res.data.row;
          this.programs = res.data.related;
          this.pageTitle = data.title;
          this.pageImage = data.image;
          this.pageBody = data.body;
          this.imageHeader = data.image;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
