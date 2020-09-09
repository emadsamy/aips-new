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
              <div class="title">{{ bgTitle }}</div>
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
              <!-- <div class="acc-widget mb-90">
                <div class="md-title">
                  What makes AIPS Accreditation
                  <br />Services Valuable?
                </div>
                <div
                  class="description-about"
                >Accredited Training Organizations that display the AIPS-accredited badge inspire confidence in prospective candidates that they are in expert hands. Accredited status is an official signifier of competence and best practice distinguishing an organization or individual from those that are not accredited. Becoming accredited provides a plethora of benefits, including:</div>
              </div>-->

              <div class="acc-widget mb-90" v-html="body1"></div>

              <div class="acc-widget mb-70">
                <div class="row">
                  <div v-if="body2 != ''" class="col-lg-4 col-sm-6">
                    <div class="acc-box" v-html="body2"></div>
                  </div>

                  <div v-if="body3 != ''" class="col-lg-4 col-sm-6">
                    <div class="acc-box" v-html="body3"></div>
                  </div>

                  <div v-if="body4 != ''" class="col-lg-4 col-sm-6">
                    <div class="acc-box" v-html="body4"></div>
                  </div>

                  <!-- <div class="col-lg-4 col-sm-6">
                    <div class="acc-box">
                      <div class="sm-title">Accredited Providers</div>
                      <div
                        class="description-about"
                      >Have objective proof that they comply with best practice</div>
                    </div>
                  </div>-->
                </div>
              </div>

              <div class="tail-title mb-70">
                <!-- <div class="extra-font">
                  We allow the business development of our
                  <br />members through our network, which consists of thousands of human resources, education,
                  <br />and development professionals worldwide.
                  <br />We provide credibility by means of accreditation and authentication
                  <br />through the research we always conduct on all pillars of practical
                  <br />training development, and we provide this to our member training
                  <br />providers to constantly improve their services.
                </div>-->
                <div class="extra-font" v-html="body5"></div>
              </div>

              <div
                v-for="(con, index) in content"
                :key="index"
                class="widget-accreditation d-flex justify-content-between"
              >
                <div class="wa-view">
                  <img :src="con.background" class="img-fluid" alt />
                </div>
                <div class="wa-text" v-html="con.body"></div>
              </div>

              <!-- <div class="widget-accreditation d-flex justify-content-between">
                <div class="wa-view">
                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt />
                </div>
                <div class="wa-text">
                  <ul class="list-unstyled">
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  </ul>
                </div>
              </div>

              <div class="widget-accreditation d-flex justify-content-between flex-row-reverse">
                <div class="wa-view">
                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt />
                </div>
                <div class="wa-text">
                  <ul class="list-unstyled">
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  </ul>
                </div>
              </div>

              <div class="widget-accreditation d-flex justify-content-between">
                <div class="wa-view">
                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt />
                </div>
                <div class="wa-text">
                  <ul class="list-unstyled">
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                    <li
                      class="wa-bullet"
                    >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  </ul>
                </div>
              </div>-->
            </div>
            <div class="accrediation-became">
              <Faq
                :has_training="has_training"
                :has_faq="has_faq"
                appTitle="Become An Accredited <br /> Training Center"
              />
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

<style scoped src="../components/common/css/Accreditation.css">
</style>

<style scoped>
.main-program-header .program-header-details {
  width: 450px;
}
.main-program-header .program-header-view {
  width: calc(100% - 450px);
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
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Faq from "../components/Faq.vue";
import axios from "axios";
import AccreditationSidebar from "../components/AccreditationSidebar.vue";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Faq: Faq,
    AccreditationSidebar: AccreditationSidebar,
  },
  data() {
    return {
      accreditations: [],
      bgImage: "",
      bgColor: "",
      bgTitle: "",
      body1: "",
      body2: "",
      body3: "",
      body4: "",
      body5: "",
      content: [],
      has_faq: false,
      has_training: false,
    };
  },
  methods: {
    fetchRow() {
      axios
        .get(window.baseURL + "/accreditations")
        .then((res) => {
          const data = res.data.rows[1];
          console.log(data);
          this.bgImage = data.image;
          this.bgColor = data.bgColor;
          this.bgTitle = data.bgTitle;
          this.body1 = data.body1;
          this.body2 = data.body2;
          this.body3 = data.body3;
          this.body4 = data.body4;
          this.body5 = data.body5;
          this.content = data.content;
          this.has_faq = data.has_faq;
          this.has_training = data.has_training;
          console.log(data.content);
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
