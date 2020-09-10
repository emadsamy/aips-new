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
                  <a :href="'#'+nav.slug" class="link"> {{ nav.title }}</a>
                  <!-- <router-link v-if="!has_scroll"
                      :to="{ name: 'show-memberships', params: {slug: nav.slug}}"
                      class="link">
                      {{ nav.title }}
                  </router-link> -->
                </div>
                <div class="sidebar-link">
                  <a :href="'#'+rows[0].title2_1.toLowerCase().replace(' ', '-')" class="link"> {{ rows[0].title2_1 }}</a>
                </div>
                <div class="sidebar-link">
                  <a :href="'#'+rows[0].title3_2.toLowerCase().replace(' ', '-')" class="link"> {{ rows[0].title3_1 }}</a>
                </div>
                <div class="sidebar-link">
                  <a :href="'#'+rows[0].title3_2.toLowerCase().replace(' ', '-')" class="link"> {{ rows[0].title3_2 }}</a>
                </div>
                <div class="sidebar-link">
                  <a :href="'#'+rows[0].title4_1.toLowerCase().replace(' ', '-')" class="link"> {{ rows[0].title4_1 }}</a>
                </div>
                <div class="sidebar-link">
                  <a :href="'#'+rows[0].title5_1.toLowerCase().replace(' ', '-')" class="link"> {{ rows[0].title5_1 }}</a>
                </div>
            </div>
            <!-- End Left Sidebar -->

            <!-- Content -->
            <div class="program-content">

              <div id="overview" class="overview mb-70">
                <div class="program-title about-title">
                  Overview
                </div>
                <div v-html="rows[0].body1"></div>
              </div>

              <div class="program-articles-rows">
                <div :id="rows[0].title2_1.toLowerCase().replace(' ', '-')" class="program-about-article">
                  <div class="about-article-box">
                    <div class="program-about-article-title">
                      Our Purpose
                    </div>
                    <div class="program-about-article-text" v-html="rows[0].body2_1"></div>

                  </div>

                  <div class="about-article-box">
                    <div
                      class="about-article-box-media mt-5"
                      style="height: 230px;"
                    >
                      <!-- <div class="overlay">
                        <button

                          type="button"
                          name="button"
                        >
                          <span class="icon-play icon-seek"></span>
                        </button>
                        <button

                          type="button"
                          name="button"
                        >
                          <span class="icon-pause icon-seek"></span>
                        </button>
                      </div> -->
                      <iframe
                        class="img-fluid"
                        :src="rows[0].video2_2"
                      >
                      <!-- <video id='video-player' autoplay preload='metadata' controls>
                        <source :src="">
                      </video> -->
                    </iframe>
                    </div>
                  </div>
                </div>

                <div class="program-about-article" :id="rows[0].title3_2.toLowerCase().replace(' ', '-')">
                  <div class="about-article-box">
                    <div class="program-about-article-title">
                      Mission
                    </div>
                    <div class="program-about-article-text" v-html="rows[0].body3_1"></div>
                  </div>

                  <div class="about-article-box">
                    <div class="program-about-article-title">
                      Vision
                    </div>
                    <div class="program-about-article-text" v-html="rows[0].body3_2"></div>
                  </div>
                </div>

                <div :id="rows[0].title4_1.toLowerCase().replace(' ', '-')" class="program-about-article">
                  <div class="about-article-box">
                    <div class="program-about-article-title">
                      Value
                    </div>
                    <div class="program-about-article-text" v-html="rows[0].body4_1"></div>
                  </div>

                  <div class="about-article-box d-flex align-items-center">
                    <div class="program-about-article-text mt-4" v-html="rows[0].body4_2"></div>
                  </div>
                </div>

                <div :id="rows[0].title5_1.toLowerCase().replace(' ', '-')" class="program-about-article">
                  <div class="aab">
                    <div class="program-about-article-title mb-5">
                      {{ rows[0].title5_1 }}
                    </div>
                    <div class="about-arts">
                      <div class="aa-row">
                        <div class="details">
                          <div v-html="rows[0].body5_1">

                          </div>
                          <!-- <div class="medium-title">Accreditation</div>
                          <div class="description mb-40">
                            Accredited Training Organizations that display the
                            AIPS-accredited badge inspire confidence in
                            prospective candidates that they are in expert
                            hands.
                          </div> -->
                          <router-link to="/accreditation" class="read-more">
                            <div>Read More <span class="icon-back"></span></div>
                          </router-link>
                        </div>
                        <div class="view">
                          <img
                            :src="rows[0].image5_2"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="aa-row">
                        <div class="details">
                          <div v-html="rows[0].body5_3"></div>
                          <!-- <div class="medium-title">Certification</div>
                          <div class="description mb-40">
                            Accredited Training Organizations that display the
                            AIPS-accredited badge inspire confidence in
                            prospective candidates that they are in expert
                            hands.
                          </div> -->
                          <router-link to="/our-certificate" class="read-more">
                            <div>Read More <span class="icon-back"></span></div>
                          </router-link>
                        </div>
                        <div class="view">
                          <!-- <img
                            :src="require('../../assets/img/we-do.jpg')"
                            class="img-fluid"
                            alt=""
                          /> -->
                        </div>
                      </div>

                      <div  v-if="rows[0].body5_4" class="aa-row">
                        <div class="details">
                          <div v-html="rows[0].body5_4"></div>
                          <!-- <div class="medium-title">
                            Corporate Training and Consultation
                          </div>
                          <div class="description mb-40">
                            Accredited Training Organizations that display the
                            AIPS-accredited badge inspire confidence in
                            prospective candidates that they are in expert
                            hands.
                          </div> -->
                          <router-link to="/accreditations" class="read-more">
                            <div>Read More <span class="icon-back"></span></div>
                          </router-link>
                        </div>
                        <div class="view">
                          <img
                            :src="require('../../assets/img/we-do.jpg')"
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-for="(row, index) in rows" :key="index" :id="row.slug">

                <!-- <div v-if="row.title" class="program-title">{{ row.title }}<br/></div> -->

                <div class="corporate-widget mb-50" v-if="row.image && index != 0">
                  <div class="corporate-widget-details">
                    <div class="title">
                      {{ row.bgTitle }}
                    </div>
                  </div>
                  <div
                    class="corporate-widget-view"
                    :style="{
                      backgroundImage: `url(${row.image})`,
                      'background-size': 'cover',
                      'background-position': 'center'
                    }"
                  ></div>
                </div>

                <!-- Body 1 -->
                <!-- <div class="acc-widget mb-90" v-if="row.body1" v-html="row.body1"></div> -->
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

                <div v-for="(con, idx) in row.content"
                    :key="idx">

                    <!-- Design 1 -->
                    <div class="row col-lg-12 widget-accreditation justify-content-between"
                        v-if="con.background"
                        style="border-bottom: 1px solid #707070"
                        :style="(con.image_dir == 'right') ? 'flex-direction: row-reverse' : ''">
                        <div class="wa-view col-lg-6" v-if="con.background" style="padding: 0">
                            <img :src="con.background" class="img-fluid" alt="" />
                        </div>
                        <div class="wa-text col-lg-6" v-if="con.body"
                            style="padding-left:45px">
                            <div v-html="con.body"></div>
                        </div>
                    </div>
                    <!-- End Destign 1 -->

                    <!-- Destin 2 -->
                    <div class="widget-imgs-bullets">
                      <div class="widget-moving-accred mb-90" v-if="con.image"
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
                              style="">
                          <div class="acc-box">
                            <div v-html="con.body_left"></div>
                          </div>
                        </div>
                        <div class="col-lg-6" v-if="con.body_right">
                          <div class="acc-box">
                            <div v-html="con.body_right"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- End Design 2 -->

                </div>

                <p><br/></p>

              </div>
            </div>
            <!-- End Content -->

            <!-- Right SideBar -->
            <div class="became-a">

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
                <router-link :to="{ name: 'OnlineApplicationMem' }" class="read-more">
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
              <router-link :to="{ name: 'OnlineApplicationMem' }" class="read-more">
                  <div>
                      Apply Now <span class="icon-back"></span>
                  </div>
              </router-link>
            </div>
            </p>

            <!-- Download -->
            <p>
            <div class="program-download" v-if="has_download">
              <!-- <div class="download-catalog">
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
              </div> -->
              <DownloadCatalog :image="rows[0].image5_2" :title="rows[0].download_name" :link="rows[0].pdf_file" />
              <!-- <DownloadCatalog :image="row[1].image" :title="row[1].download_name" :link="row[1].pdf" /> -->
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

<style scoped>
.title {
  color: #d9e549 !important;
}
.title-line:after {
  background-color: #4bb3ff !important;
}

/* About Program */
.about-title {
  font-size: 25px;
}
.program-articles-rows {
  padding-top: 60px;
}

.program-about-article {
  border-top: 1px solid #00000016;
  padding-top: 27px;
  margin-bottom: 65px;
  display: flex;
  justify-content: space-between;
}
.program-about-article .small-title,
.program-about-article .medium-title {
  font-weight: bold;
  font-size: 17px;
}
.program-about-article .medium-title {
  font-size: 23px;
  color: #1b1464;
  margin-bottom: 8px;
}
.aa-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #00000016;
  flex-wrap: wrap;
}
.about-article-box {
  width: 48%;
}
.aa-row:last-of-type {
  padding-bottom: 0;
  border: none;
}
.aa-row .details {
  width: 56%;
}
.aa-row .view {
  width: 36%;
}
.aa-row .view img {
  width: 100%;
}
.about-article-box-media {
  position: relative;
}
.about-article-box-media video,
.about-article-box-media img {
  width: 100%;
  height: 100%;
  display: block;
}
.about-article-box-media .overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-article-box-media .overlay .icon-seek {
  color: #fff;
  font-size: 50px;
}

.program-about-article-title {
  position: relative;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 15px;
  color: #1b1464;
  display: inline-block;
}
.program-about-article-title:after {
  content: "";
  position: absolute;
  top: -28.5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4f17a8;
}

.program-about-article-text {
  color: #6e6d76;
  font-size: 17px;
}
iframe {
  width: 100%;
  max-width: 100%;
  height: 240px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-about-article {
    display: block;
  }
  .about-article-box {
    width: 100%;
    margin-bottom: 60px;
  }
  div.aa-row {
    flex-direction: column-reverse;
    padding-top: 0;
  }
  div.aa-row > div {
    width: 100% !important;
  }
  div.aa-row .view {
    margin-bottom: 15px;
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
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import DownloadCatalog from "../../components/DownloadCatalog.vue";
import axios from "axios";

export default {
  name: "About",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog
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

      // New

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
      const options = {
        url: window.baseURL+'/about',
        method: 'GET',
        data: {},
        params: {},
      }
      axios(options)
        .then(res => {
          this.pgLoading = false;

          const data = res.data.rows;

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
          this.rows = data;
          this.navigation = res.data.navigation;
          console.log(data);
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
