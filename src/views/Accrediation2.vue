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
                              Why You <br /> Should Choose <br /> AIPS <br /> Accreditation
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/accreditation.jpg')})`}"></div> <!-- :style="{backgroundImage:`url(${})`}" -->
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
                              <router-link to="/should-choose-accreditation" class="link active">Why You Should Choose Our Accreditation</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-benefits" class="link">Accreditation Benefits</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-procedures" class="link">Accreditation Procedures for Training Provider / Instructors</router-link>
                          </div>
                      </div>
                      <div class="program-content">
                          <!--  v-for="(accreditation, index) in accreditations"  :key="index" -->
                          <div class="acc-widget mb-90">
                              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
                              <div class="md-title">What makes AIPS Accreditation <br /> Services Valuable?</div>
                              <div class="description-about">
                                  Accredited Training Organizations that display the AIPS-accredited badge inspire confidence in prospective candidates that they are in expert hands. Accredited status is an official signifier of competence and best practice distinguishing an organization or individual from those that are not accredited. Becoming accredited provides a plethora of benefits, including:
                              </div>
                              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
                          </div>

                          <div class="acc-widget mb-70">
                              <div class="row">
                                  <div class="col-lg-4">
                                      <div class="acc-box">
                                          <div class="sm-title">
                                              Individuals and organizations
                                          </div>
                                          <div class="description-about">
                                            Can be confident that accredited companies’ products and services have been independently assessed to ensure a consistent and high quality training service
                                          </div>
                                      </div>
                                  </div>

                                  <div class="col-lg-4">
                                      <div class="acc-box">
                                          <div class="sm-title">
                                            Accredited Individuals

                                          </div>
                                          <div class="description-about">
                                            Can demonstrate their technical knowledge and experience.
                                          </div>
                                      </div>
                                  </div>

                                  <div class="col-lg-4">
                                      <div class="acc-box">
                                          <div class="sm-title">
                                            Accredited Providers
                                          </div>
                                          <div class="description-about">
                                              Have objective proof that they comply with best practice
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div class="tail-title mb-70 ">
                              <div class="extra-font">
                                We allow the business development of our <br /> members through our network, which consists of thousands of human resources, education, <br /> and development professionals worldwide. <br />
We provide credibility by means of accreditation and authentication <br /> through the research we always conduct on all pillars of practical <br /> training development, and we provide this to our member training <br /> providers to constantly improve their services.
                              </div>
                          </div>

                          <div class="widget-accreditation d-flex justify-content-between flex-row-reverse">
                              <div class="wa-view">
                                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt="" />
                              </div>
                              <div class="wa-text">
                                  <ul class="list-unstyled">
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  </ul>
                              </div>
                          </div>

                          <div class="widget-accreditation d-flex justify-content-between">
                              <div class="wa-view">
                                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt="" />
                              </div>
                              <div class="wa-text">
                                  <ul class="list-unstyled">
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  </ul>
                              </div>
                          </div>

                          <div class="widget-accreditation d-flex justify-content-between flex-row-reverse">
                              <div class="wa-view">
                                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt="" />
                              </div>
                              <div class="wa-text">
                                  <ul class="list-unstyled">
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  </ul>
                              </div>
                          </div>

                          <div class="widget-accreditation d-flex justify-content-between">
                              <div class="wa-view">
                                  <img :src="require('../assets/img/accred2.jpg')" class="img-fluid" alt="" />
                              </div>
                              <div class="wa-text">
                                  <ul class="list-unstyled">
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                      <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  </ul>
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
.main-program-header .program-header-details {
  width: 450px;
}
.main-program-header .program-header-view {
  width: calc(100% - 450px);
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
