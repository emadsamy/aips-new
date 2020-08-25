<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="normal-header">
                  <div class="title">
                      Privacy Policy
                  </div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link-title">
                              <a href="#test" class="link">Privacy Policy</a>
                          </div>
                          <div class="sidebar-link" v-for="(privacy, index) in privacies"  :key="index">
                              <a :href="'#'+privacy.slug" class="link">{{ privacy.title }}</a>
                          </div>
                      </div>
                      <div class="program-content">

                          <div :id="privacy.slug" class="privacy-widget pt-4 mb-40" v-for="(privacy, index) in privacies"  :key="index">
                              <div class="program-title">{{ privacy.title }}</div>
                              <div class="description-about">{{ privacy.body }}</div>
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

<style scoped src="@/components/common/css/Eit.css">

</style>

<style scoped>
.normal-header {
  padding: 30px 25px;
  background-color: #370F76;
  color: #D0D877;
}
.normal-header .title {
  font-weight: bolder;
  font-size: 30px;
}
.sidebar-link-title {
  border-bottom: 1px solid #00000016;
  padding: 11px 0;
}
.sidebar-link-title .link {
  color: #1B1464;
  font-weight: bold;
  font-size: 17px
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
  border: 1px solid #DDDDDD;
  background-color: #F8F7F7;
  border-radius: 50%;
}
.program-title {
  color: #1B1464;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';
export default {
  name: 'Program',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      privacies: []
    }
  },
  created() {
    // Get Articles In Setors
    axios.get(window.baseURL + '/privacy')
      .then(res => {
        var data = res.data.rows;
        console.log(res);
        this.privacies = res.data.rows;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
