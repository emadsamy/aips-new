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
                      v-for="(cert, index) in proCertificate"
                      :key="index"
                      @click="toggleProCerts(cert.image, cert.id)"
                      v-bind:class="{ 'active-c': cert.id === pdActiveItem }"
                    >
                      {{ cert.title }}
                    </button>
                  </div>
                  <div class="certificates-width-view">
                    <img
                      :src="verticalCertsView"
                      class="img-fluid"
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div class="cf-footer">
                  <div class="cfc-title">Training Program Duration :</div>
                  <div class="cfc-count">{{ row.duration }}</div>
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
                    <button
                      class="cf-link"
                      v-for="(cert, index) in proCertificate"
                      :key="index"
                      @click="toggleProCerts(cert.image, cert.id)"
                      v-bind:class="{ 'active-c': cert.id === pdActiveItem }"
                    >
                      {{ cert.title }}
                    </button>
                  </div>
                  <div class="certificates-height">
                    <div class="cf-title paleMainColor">
                      Professional Diploma
                    </div>
                    <button
                      class="cf-link"
                      v-for="(cert, index) in proDiploma"
                      :key="index"
                      @click="toggleProDipCerts(cert.image, cert.id)"
                      v-bind:class="{ 'active-c': cert.id === pdActiveItem }"
                    >
                      {{ cert.title }}
                    </button>
                  </div>
                  <div class="certificates-height-view">
                    <img
                      :src="verticalCertsView"
                      class="img-fluid"
                      alt="Certificate"
                    />
                  </div>
                </div>
                <div class="cf-footer">
                  <div class="cfc-title">Training Program Duration</div>
                  <div class="cfc-count">From 15 To 25 Hours</div>
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
                        {{ pro.title }}
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
      certificates: [
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
        { title: "PCPM", type: "Certified Trainer in Project Management" },
      ],
      rows: [],
      defCerts: [
        {
          id: 1,
          title: "Certificate of Skills",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 4,
          title: "Certificate of Workshop",
          image:
            "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        },
        {
          id: 3,
          title: "Certificate of Attendance",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 5,
          title: "Certificate of Completion",
          image:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
          id: 2,
          title: "Certificate of Training",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
      ],
      defCertsView: require("../assets/img/Certificate-of-Achievement.png"),
      proCertificate: [
        {
          id: 1,
          title: "Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 2,
          title: "Advanced Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 3,
          title: "Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 4,
          title: "Advanced Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 5,
          title: "Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 6,
          title: "Advanced Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
      ],
      verticalCertsView: require("../assets/img/Certificate-of-Achievement.png"),
      proDiploma: [
        {
          id: 7,
          title: "Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
        {
          id: 8,
          title: "Advanced Professional Certificate",
          image:
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
        },
      ],


      row: '',
      navigation: '',
      defActiveItem: null,
      pdActiveItem: null,
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
          this.row = res.data.rows;
          this.navigation = res.data.navigation;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleDefCerts(data, id) {
      this.defCertsView = data;
      this.defActiveItem = id;
      console.log(this.defActiveItem);
    },
    toggleProCerts(data, id) {
      this.verticalCertsView = data;
      this.pdActiveItem = id;
    },
    toggleProDipCerts(data, id) {
      this.verticalCertsView = data;
      this.pdActiveItem = id;
    },
  },
  
};
</script>
