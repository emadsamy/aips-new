<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header">
          <div class="program-header-details">
            <div class="align-center">
              <div class="faq-title">
                <div class="faq-title-bg text-uppercase">faq</div>
                <div class="faq-title-sm">Frequently Asked Questions</div>
              </div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{
              backgroundImage: `url(${require('../assets/img/faq.jpg')})`,
            }"
          ></div>
          <!-- imageHeader -->
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div class="sidebar-link" v-for="(link, index) in sidebarLinks" :key="index">
                <!-- :to="{path: '/programs/sectors/:slug/products', name: 'Program', params: {slug: link.slug } }" -->
                <a href="javascript:void(0)" class="link active">
                  {{
                  link.title
                  }}
                </a>
              </div>
            </div>
            <div class="program-content">
              <div class="faq-container mb-90 pr-5">
                <div class="faq-row" v-for="(row, index) in rows" :key="index">
                  <div class="program-title mb-30">{{ row.title }}</div>
                  <div class="description" v-html="row.body"></div>
                </div>
              </div>
            </div>
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
.program-header-details {
  width: 540px;
  background-color: #3b3b3b;
}
.program-header-view {
  width: calc(100% - 540px);
  background-position: center;
}
.faq-title {
  display: flex;
  align-items: center;
}
.faq-title-bg {
  color: #e0ea79;
  font-weight: bolder;
  font-size: 80px;
}
.faq-title-sm {
  line-height: 1;
  color: #a4a4a4;
  font-size: 38px;
  padding-left: 10px;
}
.faq-row {
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-bottom: 1px solid #00000016;
}
.faq-row:last-of-type {
  border: none;
  margin: 0;
}
.program-content {
  width: calc(100% - 330px);
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .faq-title-bg {
    font-size: 35px;
  }
  .faq-title-sm {
    font-size: 21px;
  }
  .faq-row {
    margin-bottom: 25px;
    padding-bottom: 25px;
  }
  .program-title {
    font-size: 16px;
  }
  .program-header-view {
    background-position: right;
  }
  .program-content {
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  .sidebar-link {
    width: 100%;
  }
  .link {
    text-align: center;
  }
  .program-content {
    width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .faq-title-bg {
    font-size: 50px;
  }
  .faq-title-sm {
    font-size: 25px;
  }
  .program-content {
    width: calc(100% - 230px);
  }
}

@media (max-width: 991.98px) {
  .faq-container {
    padding-right: 0 !important;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .program-header-details {
    width: 400px;
  }
  .program-header-view {
    width: calc(100% - 400px);
  }
  .faq-title-bg {
    font-size: 52px;
  }
  .faq-title-sm {
    font-size: 25px;
  }
}

@media (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  name: "Faq",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  data() {
    return {
      sidebarLinks: [
        { title: "Accredition procedures for training providers/instructors" },
      ],
      articles: [],
      imageHeader: "",
      rows: [],
    };
  },
  created() {
    const url = window.baseURL + "/faqs";
    axios
      .get(url)
      .then((res) => {
        var data = res.data.rows;
        this.rows = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
