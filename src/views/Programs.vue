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
                  <div class="program-header-view" 
                    :style="{backgroundImage:`url(`+imageHeader+`) !important`}">
                  </div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link" v-for="(link, index) in sidebarLinks" key="index">
                              <a :href="'#'+link.slug" class="link">{{ link.title }}</a>
                          </div>
                         <!--  <div class="sidebar-link">
                              <a href="#" class="link">Overview</a>
                          </div>
                          <div class="sidebar-link">
                              <a href="#" class="link">Certification</a>
                          </div>
                          <div class="sidebar-link">
                              <a href="#" class="link">Online Training</a>
                          </div>
                          <div class="sidebar-link">
                              <a href="#" class="link">Business Administration</a>
                          </div> -->
                      </div>
                      <div class="program-content">
                          <div class="program-title">
                              {{ overview.title }}
                              <!-- Overview -->
                          </div>
                          <div class="description-about" v-html="overview.body"></div>
                         <!--  <div class="description-about">
                              Welcome to AIPS’s Graduate Programs, Do you want to expand your knowledge, update your skills and reach the next level in your career? Our graduate’s programs are designed for you. We take a fresh, personal, hands-on approach. AIPS’s graduate programs create opportunities for meaningful learning and engagement with instructors, classmates, and course material using many of the tools we’re already using every day to communicate, gather information, and manage our lives.
                          </div> -->
                          <div class="program-sectors">
                              <div class="sectors-title">
                                  Explore AIPS Sectors
                              </div>
                              <!-- dynamic Only -->
                              <div class="row">
                                  <div class="col-lg-4 col-sm-6" v-for="(sector, index) in sectors" :key="index">
                                      <div class="program-sector-card">
                                          <img v-if="sector.image" :src="sector.image" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <img v-else :src="require('../assets/img/sector.jpg')" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <div class="program-sector-card-title">
                                              {{ sector.title }}
                                          </div>
                                          <div>
                                            <router-link 
                                            :to="{name: 'Program', 
                                              params: {slug: sector.slug } }" 
                                              class="read-more"><div class="d-flex align-items-center">Read More <span class="icon-back"></span></div></router-link>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <!-- Staticcccccccccccccc Only -->
                              <!-- <div class="row">
                                  <div class="col-lg-4 col-sm-6">
                                      <div class="program-sector-card">
                                          <img :src="require('../assets/img/sector.jpg')" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <div class="program-sector-card-title">
                                              Bussines Managment
                                          </div>
                                          <div>
                                            <router-link to="/program" class="read-more"><div class="d-flex align-items-center">Read More <span class="icon-back"></span></div></router-link>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-6">
                                      <div class="program-sector-card">
                                          <img :src="require('../assets/img/sector.jpg')" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <div class="program-sector-card-title">
                                              Bussines Managment
                                          </div>
                                          <div>
                                            <router-link to="/program" class="read-more"><div class="d-flex align-items-center">Read More <span class="icon-back"></span></div></router-link>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 col-sm-6">
                                      <div class="program-sector-card">
                                          <img :src="require('../assets/img/sector.jpg')" class="program-sector-card-view width-fluid" alt="Bussines" />
                                          <div class="program-sector-card-title">
                                              Bussines Managment
                                          </div>
                                          <div>
                                            <router-link to="/program" class="read-more"><div class="d-flex align-items-center">Read More <span class="icon-back"></span></div></router-link>
                                          </div>
                                      </div>
                                  </div>
                              </div> -->

                              <div class="program-certification-widget">
                                  <div class="program-certification-details">
                                      <div class="text">
                                          Explore
                                          Our
                                          Certification
                                          Types
                                      </div>
                                      <router-link to="/our-certificate" class="read-more white-btn mt-5">
                                          <div>
                                              Learn More <span class="icon-back"></span>
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
.program-sector-card {
  padding: 0
}
.program-header-view {
  background-position: center;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-box-col {
    width: 100%;
  }
  .program-sector-card {
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .program-sector-card-title {
    padding: 20px 10px 20px 0;
    width: calc(100% - 115px);
  }
}

/* Max Width 768px(767.98px) */
@media (max-width: 767.98px) {
  .program-certification-details {
    width: 100%;
  }
  .program-certification-view {
    display: none
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .program-certification-details {
    width: 100%;
  }
  .program-certification-view {
    display: none
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .program-certification-details {
    width: 100%;
  }
  .program-certification-view {
    display: none
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

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
    axios.get(window.baseURL + '/programs')
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
      if (!localStorage.getItem('access_token')) {
        this.$router.push({ name: 'Login' });
      }
  }
}
</script>
