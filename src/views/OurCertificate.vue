<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="certificate-header">
          <div class="certificate-header-details"
            :style="{backgroundColor:`${row.bgColor1} !important`}">
            <div class="align-center">
              <div class="our-text goldColor">{{ row.bgSubTitle }}</div>
              <div class="title goldColor">{{ row.bgTitle }}</div>
            </div>
          </div>
          <div
            class="certificate-header-view"
            :style="{
              backgroundImage: `url(${row.background1})`,
            }"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">

            <!-- Left Sidebar -->
            <div class="program-sidebar">
                <div class="sidebar-link" v-for="(nav, index) in navigation" :key="index">
                  <a :href="'#'+nav.slug" class="link"> {{ nav.title }}</a>
                </div>
            </div>
            <!-- End Left Sidebar -->

            <div class="program-content">
              <div id="overview" class="overview">
                <div class="program-title"></div>
                <div class="description-about">
                  <div v-html="row.body1"></div>
                </div>
              </div>

              <div id="certification_types" class="certification-widget">
                <div class="certificate-widget-details"
                  :style="{backgroundColor:`${row.bgColor2} !important`}">
                  <div class="align-center">
                    <div class="our-text mb-4 goldColor">{{ row.bgSubTitle2 }}</div>
                    <div class="title goldColor">{{ row.bgTitle2 }}</div>
                  </div>
                </div>
                <div
                  class="certificate-widget-view"
                  :style="{
                    backgroundImage: `url(${row.background2})`,
                  }"
                ></div>
              </div>

              <div class="bg-title mb-5">
                <dir v-html="row.body2"></dir>
              </div>

              <!-- Certificate 1 -->
              <div id="certification"
                class="pagination-container mb-80 pt-4">
                <div class="cf-header paleMainColor">
                  {{ row.hint2 }}
                </div>
                <div class="cf-body mb-30">
                  <div class="certificates-width">
                    <div class="cf-title paleMainColor">Certificate</div>
                    <button
                      class="cf-link"
                      v-for="(cert, index) in certificates_1"
                      :key="index"
                      @click="toggleDefCerts(cert.image, cert.pdf, cert.id)"
                      v-bind:class="{ 'active-c': cert.id === defActiveItem }"
                    >
                      {{ cert.title }}
                    </button>
                  </div>
                  <div class="certificates-width-view">
                    <a :href="defCerPdf">
                      <img
                        :src="defCertsView"
                        class="img-fluid"
                        alt="Certificate"
                      />
                    </a>
                  </div>
                </div>
                <div class="cf-footer">
                  <div class="cfc-title">Training Program Duration :</div>
                  <div class="cfc-count">{{ row.duration1 }}</div>
                </div>
              </div>

              <div
                id="professionalCertification"
                class="pagination-container mb-80 pt-4"
              >
                <div class="cf-body pp-body mb-30">
                  <div class="certificates-height">
                    <div class="cf-title paleMainColor">
                      Professional Certificate
                    </div>
                    <div class="flex-certs">
                      <div class="certs-body">
                        <button
                          class="cf-link"
                          v-for="(cert, index) in certificates_2"
                          :key="index"
                          @click="toggleProCerts(cert.image, cert.pdf, cert.id)"
                          v-bind:class="{ 'active-c': cert.id === pdActiveItem }"
                        >
                          {{ cert.title }}
                        </button>
                      </div>

                      <div class="cf-footer">
                        <div class="cfc-title">Training Program Duration: </div>
                        <div class="cfc-count">{{ row.duration2 }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="certificates-height">
                    <div class="cf-title paleMainColor">
                      Professional Diploma
                    </div>
                    <div class="flex-certs">
                      <div class="certs-body">
                        <button
                          class="cf-link"
                          v-for="(cert, index) in certificates_3"
                          :key="index"
                          @click="toggleProDipCerts(cert.image, cert.pdf, cert.id)"
                          v-bind:class="{ 'active-c': cert.id === pdActiveItem }"
                        >
                          {{ cert.title }}
                        </button>
                      </div>
                      <div class="cf-footer">
                        <div class="cfc-title">Training Program Duration: </div>
                        <div class="cfc-count">{{ row.duration3 }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="certificates-height-view">
                    <a :href="proCerPdf">
                      <img
                        :src="verticalCertsView"
                        class="img-fluid"
                        alt="Certificate"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Programs -->
              <div class="ct-programs">
                <div class="cf-header mb-5 paleMainColor"> {{ row.title3 }} </div>
                <div class="ct-body">
                  <div class="ct-items">
                    <div class="ct-item"
                      v-for="(pro, index) in row.programs"
                      :key="index">
                      <div class="ct-title paleMainColor">
                        <router-link :to="{name: 'certificate-program-detail', 
                              params:{ slug: pro.slug }}" >
                            {{ pro.title }}
                        </router-link>
                      </div>
                      <div class="ct-type">{{ pro.subTitle }}</div>
                    </div>
                  </div>
                  <div class="ct-badge">
                    <div class="ct-badge-view">
                      <span class="icon-quality icon"></span>
                      <div class="badge-title">
                        Become
                        <br />Certified <br />Today
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="mb-80" />

              <div id="online-training" class="cw-article">
                <div class="cw-image">
                  <img :src="row.background4" alt />
                </div>
                <div class="cw-details">
                  <div class="title">{{ row.title4 }}</div>
                  <div class="text">
                    <div v-html="row.body4"></div>
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

<style scoped src="../components/common/css/NewsCP.css"></style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DownloadCatalog from "../components/DownloadCatalog.vue";
import axios from "axios";
export default {
  name: "Certificate",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog,
  },
  data() {
    return {
      rows: [],
      defCertsView: require("../assets/img/Certificate-of-Achievement.png"),
      verticalCertsView: require("../assets/img/Certificate-of-Achievement.png"),
      row: '',
      navigation: '',
      defActiveItem: null,
      pdActiveItem: null,
      certificates_1: [],
      defCerPdf: null,
      certificates_2: [],
      proCerPdf: "",
      certificates_3: [],
    };
  },
  created() {
    this.fetchRow();
  },
  methods: {
    fetchRow() {
      axios
        .get(window.baseURL + "/our-certificates")
        .then((res) => {
          const data = res.data.rows;
          this.row = res.data.rows;
          this.navigation = res.data.navigation;
          this.certificates_1 = data.certificates_1;
          this.certificates_2 = data.certificates_2;
          this.certificates_3 = data.certificates_3;
          console.log(data);
          console.log(data.certificates_1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleDefCerts(data, defCerPdf, id) {
      this.defCertsView = data;
      this.defCerPdf = defCerPdf;
      this.defActiveItem = id;
    },
    toggleProCerts(data, proCerPdf, id) {
      this.verticalCertsView = data;
      this.proCerPdf = proCerPdf;
      this.pdActiveItem = id;
    },
    toggleProDipCerts(data, proCerPdf, id) {
      this.verticalCertsView = data;
      this.proCerPdf = proCerPdf;
      this.pdActiveItem = id;
    },
  },

};
</script>
