<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header main-program-header">
          <div class="program-header-details" :style="{backgroundColor:`${bgColor} !important`}">
            <div class="align-center">
              <div class="title title-line">{{ bgTitle }}</div>
            </div>
          </div>
          <div class="program-header-view" :style="{backgroundImage:`url(${bgImage})`}"></div>
          <!-- :style="{backgroundImage:`url(${})`}" -->
        </div>
        <div class="program-container">
          <div class="program-row">
            <AccreditationSidebar />
            <div class="program-content">
              <!--  v-for="(accreditation, index) in accreditations"  :key="index" -->
              <!-- <div class="acc-widget mb-60" v-html="body1"> -->
              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
              <!-- <div class="program-title">What is Accreditation?</div>
                <div class="description-about">
                  Accreditation is a system of assessment and external review of educational and training institutions and of professional training programs offered by those institutions.
                  <br />
                  <br />Accreditation provides an assurance of quality to trainees and the public. In the accrediting process, the performance of educational and training units is measured against international standards. The organization that oversees external review and grants accreditation of professional studies programs is the Southwestern Accreditation Council (SWAC).
              </div>-->
              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
              <!-- </div> -->
              <div class="acc-widget mb-60" v-html="body1"></div>
            </div>
            <div class="accrediation-became"></div>
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

<style scoped src="../components/common/css/Accreditation.css">
</style>

<style scoped>
.main-program-header .program-header-details {
  width: 500px;
}
.main-program-header .program-header-details .title-line:after {
  left: 100%;
}
.main-program-header .program-header-view {
  width: calc(100% - 500px);
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import AccreditationSidebar from "../components/AccreditationSidebar.vue";
import axios from "axios";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    AccreditationSidebar: AccreditationSidebar,
  },
  data() {
    return {
      bgImage: "",
      bgColor: "",
      bgTitle: "",
      body1: "",
    };
  },
  methods: {
    fetchRow() {
      // Get Accreditations
      axios
        .get(window.baseURL + "/accreditations")
        .then((res) => {
          const data = res.data.rows[0];
          console.log(data);
          this.bgImage = data.image;
          this.bgColor = data.bgColor;
          this.bgTitle = data.bgTitle;
          this.body1 = data.body1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchRow();
  },
};
</script>
