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
                              AIPS <br />
                              Accreditation <br />
                              Benefits
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
                              <router-link to="/should-choose-accreditation" class="link">Why You Should Choose Our Accreditation</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-benefits" class="link active">Accreditation Benefits</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/accreditation-procedures" class="link">Accreditation Procedures for Training Provider / Instructors</router-link>
                          </div>
                      </div>
                      <div class="program-content">
                          <!--  v-for="(accreditation, index) in accreditations"  :key="index" -->
                          <div class="acc-widget mb-60">
                              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
                              <div class="program-title">Accreditation Benefits</div>
                              <div class="description-about">
                                  By earning your accreditation, you are considered a reliable training source and a distinguished training and development ambassador. Your certification allows your trainers and trainees to earn certification that is acknowledged worldwide. Accreditation enhances your trustworthiness in your community and boosts your reputation as a training provider who takes the initiative to learn processes, provide the best training and develop best practices. We list more benefits for training service providers, trainers, trainees and the groups served below.
                              </div>
                              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
                          </div>

                          <div class="title-jumbo mb-70">
                              4 Ways accreditation provides benefits
                          </div>

                          <div class="widget-imgs-bullets mb-40">
                              <div class="widget-moving-accred mb-90">
                                  <div class="wm-view">
                                      <img :src="require('../assets/img/accred3.jpg')" alt="">
                                  </div>
                                  <div class="wm-details">
                                      <div class="title">
                                          How training service providers benefit
                                      </div>
                                  </div>
                              </div>
                              <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                              </ul>
                          </div>

                          <div class="widget-imgs-bullets mb-70">
                              <div class="widget-moving-accred flex-row-reverse mb-90">
                                  <div class="wm-view">
                                      <img :src="require('../assets/img/accred3.jpg')" alt="">
                                  </div>
                                  <div class="wm-details">
                                      <div class="title">
                                          How trainers benefit
                                      </div>
                                  </div>
                              </div>
                              <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                              </ul>
                          </div>

                          <div class="widget-imgs-bullets mb-70">
                              <div class="widget-moving-accred mb-90">
                                  <div class="wm-view">
                                      <img :src="require('../assets/img/accred3.jpg')" alt="">
                                  </div>
                                  <div class="wm-details">
                                      <div class="title">
                                          How organizations and businesses benefit
                                      </div>
                                  </div>
                              </div>
                              <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                              </ul>
                          </div>

                          <div class="widget-imgs-bullets mb-70">
                              <div class="widget-moving-accred flex-row-reverse mb-90">
                                  <div class="wm-view">
                                      <img :src="require('../assets/img/accred3.jpg')" alt="">
                                  </div>
                                  <div class="wm-details">
                                      <div class="title">
                                          How trainees benefit
                                      </div>
                                  </div>
                              </div>
                              <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                                  <li class="wa-bullet">We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                              </ul>
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
