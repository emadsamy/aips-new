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
              <div class="acc-widget mb-90">
                <!-- <div class="program-title">{{ accreditation.title }}</div> -->
                <div class="title-jumbo" v-html="body5"></div>
                <!-- <div class="program-title">What is Accreditation?</div>
                              <div class="description-about">
                                Accreditation is a system of assessment and external review of educational and training institutions and of professional training programs offered by those institutions.
                                <br />
                                <br />
                                Accreditation provides an assurance of quality to trainees and the public. In the accrediting process, the performance of educational and training units is measured against international standards. The organization that oversees external review and grants accreditation of professional studies programs is the Southwestern Accreditation Council (SWAC).
                </div>-->
                <!-- <div class="description-about" v-html="accreditation.body"></div> -->
              </div>

              <div class="widgets-steps">
                <div v-for="(con, index) in content" :key="index" class="widget-step">
                  <!-- <div class="steps-counter" v-if="index == 0">{{ index + 1 }}</div> -->
                  <div class="steps-counter">{{ index + 1 }}</div>
                  <div class="steps-details" v-html="con.body"></div>
                </div>

                <!-- <div class="widget-step">
                  <div class="steps-counter">1</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>

                <div class="widget-step">
                  <div class="steps-counter">7</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>

                <div class="widget-step">
                  <div class="steps-counter">1</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>

                <div class="widget-step">
                  <div class="steps-counter">1</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>

                <div class="widget-step">
                  <div class="steps-counter">1</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>-->

                <!-- <div class="widget-step">
                  <div class="steps-counter">1</div>
                  <div class="steps-details">
                    <div class="title">Inital Discussion</div>
                    <div class="text">
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                      7 Eays Steps to be
                      Certified or Acrredited
                    </div>
                  </div>
                </div>-->
              </div>
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
div.program-header-details {
  width: 640px !important;
  background-color: #3b3b3b !important;
}
div.program-header-details .title {
  color: #e0ea79;
}
.program-header-view {
  width: calc(100% - 620px) !important;
}
.title-jumbo {
  color: #3b3b3b !important;
  line-height: 1;
  padding-left: 25px;
  border-left: 5px solid #d0d877;
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
          const data = res.data.rows[3];
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
