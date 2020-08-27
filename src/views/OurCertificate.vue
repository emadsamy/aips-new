<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="certificate-header">
                  <div class="certificate-header-details">
                      <div class="align-center">
                          <div class="our-text goldColor">
                              Our Certification
                          </div>
                          <div class="title goldColor">
                             Certification
                          </div>
                      </div>
                  </div>
                  <div class="certificate-header-view" :style="{backgroundImage:`url(${require('../assets/img/certification.jpg')})`}"></div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link">
                              <a href="#overview" class="link active">Overview</a>
                          </div>
                          <div class="sidebar-link">
                            <a href="#certificationTypes" class="link">Certification Types</a>
                          </div>
                          <div class="sidebar-link">
                            <a href="#certification" class="link">Certification</a>
                          </div>
                          <div class="sidebar-link">
                            <a href="#online_training" class="link">Online Training</a>
                          </div>
                      </div>
                      <div class="program-content">
                          <div id="overview" class="overview pt-4">
                            <div class="program-title">
                                Overview
                            </div>
                            <div class="description-about">
                                Welcome to AIPS’s Graduate Programs, Do you want to expand your knowledge, update your skills and reach the next level in your career? Our graduate’s programs are designed for you. We take a fresh, personal, hands-on approach. AIPS’s graduate programs create opportunities for meaningful learning and engagement with instructors, classmates, and course material using many of the tools we’re already using every day to communicate, gather information, and manage our lives.
                            </div>
                          </div>

                          <div id="certificationTypes" class="certification-widget">
                              <div class="certificate-widget-details">
                                  <div class="align-center">
                                      <div class="our-text mb-4 goldColor">
                                          Our Certification
                                      </div>
                                      <div class="title goldColor">
                                         Certifications Types
                                      </div>
                                  </div>
                              </div>
                              <div class="certificate-widget-view" :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"></div>
                          </div>

                          <div class="bg-title mb-5">
                              Whether you are an expert or just <br />
                              starting out, AIPS has a suite <br />
                              of proven credentials that are just right <br />
                              for your level of experience.
                          </div>

                          <div id="generalCertification" class="pagination-container mb-80 pt-4">
                              <div class="cf-header paleMainColor">
                                  General Certification Types
                              </div>
                              <div class="cf-body mb-30">
                                  <div class="certificates-width">
                                      <div class="cf-title paleMainColor">
                                          Certificate
                                      </div>
                                      <router-link class="cf-link" to="/my-certificate">Certificate of Skills </router-link>
                                      <router-link class="cf-link" to="/my-certificate">Certificate of Training</router-link>
                                      <router-link class="cf-link" to="/my-certificate">Certificate of  Attendance</router-link>
                                      <router-link class="cf-link" to="/my-certificate">Certificate of Workshop </router-link>
                                      <router-link class="cf-link" to="/my-certificate">Certificate of Completion</router-link>
                                  </div>
                                  <div class="certificates-width-view">
                                      <img :src="require('../assets/img/Certificate-of-Achievement.png')" class="img-fluid" alt="Certificate" />
                                  </div>
                              </div>
                              <div class="cf-footer">
                                  <div class="cfc-title">
                                      Training Program Duration :
                                  </div>
                                  <div class="cfc-count">
                                      From 15  To  25  Hours
                                  </div>
                              </div>
                          </div>

                          <div id="professionalCertification" class="pagination-container mb-80 pt-4">
                              <div class="cf-body mb-30">
                                  <div class="certificates-height">
                                      <div class="cf-title paleMainColor">
                                          Professional Certificate
                                      </div>
                                      <router-link class="cf-link" to="/my-certificate">Professional Certificate</router-link>
                                      <router-link class="cf-link" to="/my-certificate">Advanced Professional Certificate</router-link>
                                      <router-link class="cf-link" to="/my-certificate">Professional Certificate</router-link>
                                      <router-link class="cf-link" to="/my-certificate">Advanced Professional Certificate</router-link>
                                  </div>
                                  <div class="certificates-height">
                                      <div class="cf-title paleMainColor">
                                          Professional Diploma
                                      </div>
                                      <router-link class="cf-link" to="/my-certificate">Professional Diploma</router-link>
                                  </div>
                                  <div class="certificates-height-view">
                                      <img :src="require('../assets/img/Certificate-of-Diploma.png')" class="img-fluid" alt="Certificate" />
                                  </div>
                              </div>
                              <div class="cf-footer">
                                  <div class="cfc-title">
                                      Training Program Duration
                                  </div>
                                  <div class="cfc-count">
                                      From 15  To  25  Hours
                                  </div>
                              </div>
                          </div>

                          <div class="ct-programs">
                              <div class="cf-header mb-5 paleMainColor">
                                  Certified Training Programs
                              </div>
                              <div class="ct-body">
                                  <div class="ct-items">
                                      <div class="ct-item" v-for="(certificate, index) in certificates"  :key="index">
                                          <div class="ct-title paleMainColor">
                                              {{ certificate.title }}
                                          </div>
                                          <div class="ct-type">
                                              {{ certificate.type }}
                                          </div>
                                      </div>
                                  </div>
                                  <div class="ct-badge">
                                      <div class="ct-badge-view">
                                          <span class="icon-quality icon"></span>
                                          <div class="badge-title">
                                              Become<br /> Certified<br /> Today
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <hr class="mb-80">

                          <div class="cw-article">
                              <div class="cw-image">
                                  <img :src="require('../assets/img/gray-background.png')" alt="" />
                              </div>
                              <div class="cw-details">
                                  <div class="title">
                                      Certification of Training Material
                                  </div>
                                  <div class="text">
                                      Once the Partner-developed content has been reviewed and approved, AIPS will consolidate the parts into a Certified Training Material Package for the Training Provider.
                                      <br />
                                      <br />
                                      Once the Partner-developed content has been reviewed and approved, AIPS will consolidate the parts into a Certified Training Material Package for the Training Provider.
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

<style scoped src="@/components/common/css/NewsCP.css">

</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
export default {
  name: 'Certificate',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
        certificates: [
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
          {title: 'PCPM', type: 'Certified Trainer in Project Management'},
        ]
    }
  }
}
</script>
