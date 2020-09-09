<template>
  <div class="page-container">
    <Navbar />

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header main-program-header">
          <div class="program-header-details" :style="{backgroundColor:`${bgColor} !important`}">
            <div class="align-center">
              <div class="title" v-html="bgTitle"></div>
            </div>
          </div>
          <div class="program-header-view" :style="{backgroundImage:`url(${bgImage})`}"></div>
        </div>
        <div class="program-container">
          <div class="program-row">

            <!-- Left Sidebar -->
            <div class="program-sidebar">
                <div class="sidebar-link" v-for="(nav, index) in navigation" :key="index">
                  <router-link :to="{ name: 'show-accrediations', params: {slug: nav.slug}}"
                      class="link">
                      {{ nav.title }}
                  </router-link>
                </div>
            </div>
            <!-- End Left Sidebar -->

            <!-- Content -->
            <div class="program-content" v-if="has_scroll">
              <div v-for="(row, index) in rows" :key="index"
                :class="(index != 0) ? 'hidden' : '' ">
                <!-- Body 1 -->
                <div class="acc-widget mb-90" v-if="row.body1" v-html="row.body1"></div>
                <!-- End body 1 -->

                <!-- Three Columns -->
                <div class="acc-widget mb-70" v-if="row.body2 || row.body3 || row.body4">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <div class="acc-box" v-html="row.body2"></div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="acc-box" v-html="row.body3"></div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="acc-box" v-html="row.body4"></div>
                    </div>
                  </div>
                </div>
                <!-- End Three Columns -->

                <!-- Body 5 -->
                <div class="tail-title mb-70" v-if="row.body5">
                  <div class="extra-font" v-html="row.body5"></div>
                </div>
                <!-- End Body 5 -->

                <p><br/><br/></p>
                <div v-for="(con, idx) in row.content"
                    :key="idx">

                    <!-- Design 1 -->
                    <div class="row col-lg-12 widget-accreditation justify-content-between"
                        v-if="con.background"
                        style="border-bottom: 1px solid #707070"
                        :style="(con.image_dir == 'right') ? 'flex-direction: row-reverse' : ''">
                        <div class="wa-view col-lg-6" v-if="con.background">
                            <img :src="con.background" class="img-fluid" alt="" />
                        </div>
                        <div class="wa-text col-lg-6" v-if="con.body"
                            style="padding:30px;margin-top: -20px">
                            <div v-html="con.body"></div>
                        </div>
                    </div>
                    <!-- End Destign 1 -->

                    <!-- Destin 2 -->
                    <div class="widget-imgs-bullets mb-40"
                      v-if="con.image">
                      <div class="widget-moving-accred mb-90"
                        :style="(con.image_dir == 'right') ? 'flex-direction: row-reverse' : ''">
                        <div class="wm-view">
                          <img :src="con.image" alt="" />
                        </div>
                        <div class="wm-details" :style="{backgroundColor:`${con.background} !important`}">
                          <div class="title">{{ con.label }}</div>
                        </div>
                      </div>
                      <div class="row" v-if="con.body_left">
                        <div class="col-lg-6" v-if="con.body_left"
                              style="padding:30px;margin-top: -20px">
                          <div class="acc-box">
                            <div v-html="con.body_left"></div>
                          </div>
                        </div>
                        <div class="col-lg-6" v-if="con.body_right"
                              style="padding:30px;margin-top: -20px">
                          <div class="acc-box">
                            <div v-html="con.body_right"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Design 2 -->

                </div>

              </div>
            </div>
            <!-- End Content -->

            <!-- Right SideBar -->
            <div class="accrediation-became">

              <!-- FAQ -->
             <p>
             <div class="accred-faq" v-if="has_faq">
                <router-link :to="{ name: 'faq' }" class="faq-link d-flex mb-30">
                    <div class="faq-bold d-flex align-items-center">FAQ</div>
                    <div class="faq-small d-flex align-items-center">
                        Frequently Asked<br />Questions
                    </div>
                </router-link>
            </div>
            </p>

            <!-- Member -->
            <p>
            <div class="became-a" v-if="has_member">
                <div class="title mb-3">Become a Certified Trainer</div>
                <router-link :to="{ name: 'MembershipgApplication' }" class="read-more">
                  <div>
                    Apply Now <span class="icon-back"></span>
                  </div>
                </router-link>
            </div>
            </p>

            <!-- Training -->
            <p>
            <div class="training" v-if="has_training">
              <div class="bg-title mb-3">Become An Accredited Training Center</div>
              <router-link :to="{ name: 'TrainingApplication' }" class="read-more">
                  <div>
                      Apply Now <span class="icon-back"></span>
                  </div>
              </router-link>
            </div>
            </p>

            <!-- Download -->
            <p>
            <div class="program-download" v-if="has_download">
              <div class="download-catalog">
                  <img :src="require('../../assets/img/home.png')"
                      alt="Download Catalog"
                      class="img-fluid" />
                  <div class="title">
                      {{ download_name }}
                  </div>
                  <a v-if="pdf_file"
                      :href="pdf_file"
                      target="_blank"
                      download class="download-btn">Download</a>
              </div>
            </div>
            </p>



            </div>
            <!-- End Right Sidebar -->

          </div>
        </div>
      </div>
    </div>
    <!-- Content -->

    <Footer />
  </div>
</template>

<style scoped src="../../components/common/css/Accreditation.css">
</style>

<style scoped>
.main-program-header .program-header-details {
  width: 500px !important;
}
.main-program-header .program-header-view {
  width: calc(100% - 500px) !important;
}
.widget-accreditation:nth-of-type(even) {
  flex-direction: row-reverse;
}

.wa-bullet {
  padding-left: 30px;
  position: relative;
  color: #777;
  margin-bottom: 20px;
}
.wa-bullet:before {
  content: "";
  position: absolute;
  left: 7px;
  top: 10px;
  border: 1px solid #1b1464;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

ul { list-style: circle !important; display: block !important; }
ul li { margin-bottom: 20px !important; width: 100% }
ul.list-unstyled { list-style: circle !important; display: block !important; }
ul.list-unstyled li { margin-bottom: 20px !important; width: 100% }

.widget-imgs-bullets:nth-of-type(even) .widget-moving-accred {
  flex-direction: row-reverse;
}
.widget-imgs-bullets:nth-of-type(even) .widget-moving-accred img {
  transform: translateX(-40px);
}



div.program-header-details {
  width: 640px !important;
  background-color: #3b3b3b !important;
}
div.program-header-details .title {
  color: #e0ea79;
}
.title-jumbo {
  color: #3b3b3b !important;
  line-height: 1;
  padding-left: 25px;
  border-left: 5px solid #d0d877;
}
.hidden { display: none !important }


.bg-title {
  font-weight: bold;
  font-size: 20px;
  color: #1b1464;
}
.faq-small {
  font-size: 17px;
  line-height: 1.2;
  padding-left: 7px;
  color: #666;
}
.faq-bold {
  font-weight: bolder;
  font-size: 33px;
  color: #1b1464;
}
</style>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
  name: "Accreditations",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
      // static
      bgTitle: '',
      bgColor: '',
      bgImage: '',

      has_scroll: false,
      has_faq: false,
      has_training: false,
      has_member: false,
      has_download: false,
      download_name: '',
      pdf_file: '',

      rows: [],
      navigation: [],
      pgLoading: false,
    };
  },
  watch: {
    $route() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {

    fetchData() {
      this.pgLoading = true;
      axios.defaults.headers.common = {
        //'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
      };
      const options = {
        url: window.baseURL+'/accreditations',
        method: 'GET',
        data: {},
        params: {},
      }
      axios(options)
        .then(res => {
          this.pgLoading = false;

          // current row
          this.bgTitle = res.data.rows[0].bgTitle;
          this.bgColor = res.data.rows[0].bgColor;
          this.bgImage = res.data.rows[0].image;

          this.has_faq = res.data.rows[0].has_faq;
          this.has_scroll = res.data.rows[0].has_scroll;
          this.has_training = res.data.rows[0].has_training;
          this.has_download = res.data.rows[0].has_download;
          this.download_name = res.data.rows[0].download_name;
          this.pdf_file = res.data.rows[0].pdf_file;

          // content
          this.rows = res.data.rows;
          this.navigation = res.data.navigation;
        })
        .catch(err => {
            this.pgLoading = false;
            //
        })
        .finally(() => {})
    },

  },
};
</script>
