<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="program-header  main-program-header">
                  <div class="program-header-details">
                      <div class="align-center">
                          <div class="title">
                              {{ pageTitle }}
                          </div>
                          <div class="description-type">
                              Programs
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" 
                    :style="{backgroundImage:`url(`+ imageHeader +`) !important`}">
                  </div> 
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link" 
                            v-for="(link, index) in sidebarLinks"  :key="index">
                              <router-link :to="{ name: 'Program', 
                                params: {slug: link.slug, title: link.title } }" 
                                class="link">{{ link.title }}
                              </router-link>
                          </div>
                          <!-- <div class="sidebar-link">
                              <router-link to="/" class="link">Business Adminstration</router-link>
                              <router-link to="/" class="link">Healthcare Managment</router-link>
                              <router-link to="/" class="link">Languages</router-link>
                          </div> -->
                      </div>
                      <div class="program-content">
                          <div class="description-about" v-html="pageBody"></div>
                          <div class="program-view-head-text">
                            <div class="title">
                                {{ pageTitle }}
                            </div>
                            <div class="description-type">
                                Programs
                            </div>
                          </div>
                          <div class="program-box-row">
                              <!-- <div class="program-box-col" v-for="(program, index) in programs" key="index"> -->
                                  <!-- <div class="title"> -->
                                      <!-- {{ program.title }} -->
                                  <!-- </div> -->
                                  <!-- <div class="description"> -->
                                      <!-- {{ program.subtitle }} -->
                                  <!-- </div> -->
                                  <!-- <div class="text" v-html="program.short_body"></div> -->
                                  <!-- <router-link :to="{path: '/programs/sectors/products/:slug', name: 'Entre', params: {slug: program.slug}}" class="read-more"> -->
                                    <!-- :to="{path: '/programs/sectors/:slug/products', name: 'Entre', params: {body: sector.body, slug: sector.slug } }" -->
                                      <!-- <div>
                                          Read More <span class="icon-back"></span>
                                      </div> -->
                                  <!-- </router-link> -->
                              <!-- </div> -->

                              <div class="program-box-col" 
                                v-for="(program, index) in programs" key="index">
                                  <div class="title">
                                      {{ program.title }}
                                  </div>
                                  <div class="description">
                                      {{ program.subtitle }}
                                  </div>
                                  <div class="text" v-html="program.short_body"></div>
                                  <router-link :to="{name: 'program-detail', 
                                        params: {slug: sector_slug, pro: program.slug}}" class="read-more">
                                      <div>
                                          Read More <span class="icon-back"></span>
                                      </div>
                                  </router-link>
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
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-box-col {
    width: 100%;
  }
}

/* Max Width 768px(767.98px) */
@media (max-width: 767.98px) {
  .program-header .program-header-details .description-type {
    font-size: 27px;
    margin-top: 10px;
  }
  .program-view-head-text .title {
    margin-bottom: 10px
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
  name: 'Program',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      programs: [],
      pageTitle: '',
      sidebarLinks: [],
      articles: [],
      imageHeader: '',
      pageBody: '',

      sector_slug: this.$route.params.slug
    }
  },
  watch: {
    $route() {
        this.fetchRow();
    }
  },
  created() {
      
      this.fetchRow();
  },
  methods: {

    fetchRow() {
    
    axios.get('https://api.mazadak.net/api/v1/programs')
      .then(res => {
        var data = res.data.rows;
        for (var i = 0; i < data.length; i++) {
          if (data[i].sectors != '') {
            this.sidebarLinks = data[i].sectors;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });

      // https://api.mazadak.net/api/v1/programs/sectors/Business-Adminsitrators/products
      const url = window.baseURL + '/programs/sectors/' + this.$route.params.slug + '/products';
      axios.get(url)
        .then(res => {
          var data = res.data.row;
          this.pageTitle = data.title;
          this.pageBody = data.body;
          this.programs = data.programs;
          this.imageHeader = data.image;
          // console.log(data.image);
        })
        .catch(err => {
          console.log(err);
        });
    },
        // Check Auth
        // if (!localStorage.getItem('access_token')) {
        //   this.$router.push({ name: 'Login' });
        // }
  }
}
</script>
