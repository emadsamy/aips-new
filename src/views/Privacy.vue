<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="normal-header">
          <div class="title">Privacy Policy</div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div class="sidebar-link-title">
                <a href="#test" class="link">Privacy Policy</a>
              </div>
              <div class="sidebar-link" v-for="(row, index) in rows" :key="index">
                <a :href="'#'+row.slug" class="link">{{ row.title }}</a>
              </div>
            </div>
            <div class="program-content">
              <div
                :id="row.slug"
                class="privacy-widget pt-2 mb-40"
                v-for="(row, index) in rows"
                :key="index"
              >
                <div class="program-title">{{ row.title }}</div>
                <div class="description-about">{{ row.body }}</div>
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
.normal-header {
  padding: 30px 25px;
  background-color: #370f76;
  color: #d0d877;
}
.normal-header .title {
  font-weight: bolder;
  font-size: 30px;
}
.program-content {
  width: calc(100% - 320px);
}
.sidebar-link-title {
  border-bottom: 1px solid #00000016;
  padding: 11px 0;
}
.sidebar-link-title .link {
  color: #1b1464;
  font-weight: bold;
  font-size: 17px;
}
.sidebar-link {
  display: flex;
  justify-content: flex-end;
}
.sidebar-link .link {
  width: 90%;
  font-size: 16px !important;
  position: relative;
}
.sidebar-link .link:before {
  content: "";
  position: absolute;
  left: -20px;
  top: 21px;
  width: 8px;
  height: 8px;
  border: 1px solid #dddddd;
  background-color: #f8f7f7;
  border-radius: 50%;
}
.program-title {
  color: #1b1464;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

/* Max Width 768px(767.98px) */
@media (max-width: 767.98px) {
  .program-content {
    width: 100%;
  }
  .normal-header {
    width: calc(100% + 30px);
    margin: 0 -15px;
  }
  .sidebar-link-title {
    width: 100%;
  }
  .sidebar-link-title .link {
    width: 100%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .program-content {
    width: calc(100% - 210px);
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
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
  name: "Privacy",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  data() {
    return {
      rows: [],
    };
  },
  created() {
    axios
      .get(window.baseURL + "/privacy")
      .then((res) => {
        var data = res.data.rows;
        console.log(res.data.rows);
        this.rows = res.data.rows;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
