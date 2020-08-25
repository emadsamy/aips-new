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
                          <div class="title">
                              AIPS Programs
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/programs.jpg')})`}"></div> <!-- imageHeader -->
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link" v-for="(link, index) in sidebarLinks" key="index">
                              <a :href="'#'+link.slug" class="link">{{ link.title }}</a>
                          </div>
                      </div>
                      <div class="program-content">
                          <div class="program-title">
                              {{ overview.title }}
                          </div>
                          <div class="description-about" v-html="overview.body"></div>
                          <div class="program-sectors">
                              <div class="sectors-title">
                                  Explore AIPS Sectors
                              </div>
                              <div class="row">
                                  <div class="col-lg-4" v-for="(sector, index) in sectors" :key="index">
                                      <div class="program-sector-card">
                                          <img v-if="sector.image" :src="sector.image" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <img v-else :src="require('../assets/img/sector.jpg')" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <div class="program-sector-card-title">
                                              {{ sector.title }}
                                          </div>
                                          <router-link :to="{path: '/programs/sectors/:slug/products', name: 'Program', params: {body: sector.body, slug: sector.slug } }" class="program-sector-card-btn"><div class="d-flex align-items-center">Read More <span class="icon-back"></span></div></router-link>
                                      </div>
                                  </div>
                              </div>

                              <div class="program-certification-widget">
                                  <div class="program-certification-details">
                                      <div class="text">
                                          Explore <br />
                                          Our <br />
                                          Certification <br />
                                          Types
                                      </div>
                                      <router-link to="/certificate1" class="read-more white-btn mt-5">
                                          <div>
                                              Read More <span class="icon-back"></span>
                                          </div>
                                      </router-link>
                                  </div>
                                  <div class="program-certification-view" :style="{backgroundImage:`url(${require('../assets/img/certification.jpg')}) !important`} ">

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
.program-sector-card-view {
  height: 130px;
}
.program-header-view {
  background-position: center;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';

export default {
  name: 'Programs',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      sectors: [],
      headerTitle: '',
      overview: '',
      sidebarLinks: [],
      imageHeader: ''
    }
  },
  created() {
    axios.get('https://api.mazadak.net/api/v1/programs')
      .then(res => {
        console.log(res.data.rows);
        // console.log(res.data.rows[0]);
        this.sidebarLinks = res.data.rows;
        var data = res.data.rows;
        this.imageHeader = data[0].image;
        console.log(data[0].image);

        // Get Sectors
        for (var i = 0; i < data.length; i++) {
          if (data[i].sectors != '') {
            this.sectors = data[i].sectors;
          }
        }

        // Get Overview Body
        this.overview = res.data.rows[0];
        console.log(this.overview);
      })
      .catch(err => {
        console.log(err);
      });

      // Check Auth
      // if (!localStorage.getItem('access_token')) {
      //   this.$router.push({ name: 'Login' });
      // }
  }
}
</script>
