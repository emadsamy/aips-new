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
                              AIPS Accreditation Procedures for Training Provider / Instructors
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/we-do.jpg')})`}"></div> <!-- :style="{backgroundImage:`url(${})`}" -->
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <!-- <div class="sidebar-link" v-for="(accreditation, index) in accreditations"  :key="index">
                              <a :href="'#' + accreditation.slug" class="link">{{ accreditation.title }}</a>
                          </div> -->
                          <div class="sidebar-link">
                              <router-link to="/accreditation" class="link">What is Accreditation?</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/should-choose-accreditation" class="link">Why You Should Choose Our Accreditation</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-benefits" class="link">Accreditation Benefits</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-procedures" class="link active">Accreditation Procedures for Training Provider / Instructors</router-link>
                          </div>
                      </div>
                      <div class="program-content">
                          <!--  v-for="(accreditation, index) in accreditations"  :key="index" -->
                          <div class="acc-widget mb-90">
                              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
                              <div class="title-jumbo">7 Eays Steps to be <br /> Certified or Acrredited</div>
                              <!-- <div class="program-title">What is Accreditation?</div>
                              <div class="description-about">
                                Accreditation is a system of assessment and external review of educational and training institutions and of professional training programs offered by those institutions.
                                <br />
                                <br />
                                Accreditation provides an assurance of quality to trainees and the public. In the accrediting process, the performance of educational and training units is measured against international standards. The organization that oversees external review and grants accreditation of professional studies programs is the Southwestern Accreditation Council (SWAC).
                              </div> -->
                              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
                          </div>

                          <div class="widgets-steps">
                              <div class="widget-step">
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                                  <div class="steps-counter">
                                      1
                                  </div>
                                  <div class="steps-details">
                                      <div class="title">
                                          Inital Discussion
                                      </div>
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
                          </div>
                      </div>
                      <div class="accrediation-became">
                          <Faq />
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
  background-color: #3B3B3B !important;
}
div.program-header-details .title {
  color: #E0EA79;
}
.program-header-view {
  width: calc(100% - 620px) !important
}
.title-jumbo {
  color: #3B3B3B !important;
  line-height: 1;
  padding-left: 25px;
  border-left: 5px solid #D0D877;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Faq from '../components/Faq.vue';
import axios from 'axios';
export default {
  name: 'Program',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Faq: Faq
  },
  data() {
    return {
      accreditations: [],
      imageHeader: ''
    }
  },
  created() {
    // Get Articles In Setors
    axios.get('https://api.mazadak.net/api/v1/accreditations')
      .then(res => {
        var data = res.data.rows;
        console.log(data);
        this.accreditations = res.data.rows;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
