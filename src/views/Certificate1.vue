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
                             Certifications
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
                            <a href="#certification_types" class="link">Certification Types</a>
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

                          <div class="certification-widget">
                              <div class="certificate-widget-details">
                                  <div class="align-center">
                                      <div class="our-text mb-4 goldColor">
                                          Our Certification
                                      </div>
                                      <div class="title goldColor">
                                         Certifications
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

                          <div id="certification_types" class="pagination-container pt-4">
                              <div class="pagination-header">
                                  General Certification Types
                              </div>
                              <div class="pagination-content">
                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                            Certificate
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/my-certificate">Certificate of Skills </router-link>
                                          <router-link class="pagination-link" to="/my-certificate">Certificate of Training</router-link>
                                          <router-link class="pagination-link" to="/my-certificate">Certificate of  Attendance</router-link>
                                          <router-link class="pagination-link" to="/my-certificate">Certificate of Workshop </router-link>
                                          <router-link class="pagination-link" to="/my-certificate">Certificate of Completion</router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>

                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                          Professional Certificate
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/main-certificate-achievement">Professional Certificate</router-link>
                                          <router-link class="pagination-link" to="/main-certificate-achievement">Advanced Professional Certificate </router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>

                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                            Professional Diploma
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/main-certificate-achievement">Professional Diploma</router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>
                              </div>
                          </div>

                          <div id="certification" class="cers pt-4">
                            <div class="certification-widget-images">
                                <img :src="require('../assets/img/Certificate-of-Achievement.png')" class="img-fluid" alt="Certificate" />
                                <img :src="require('../assets/img/Certificate-of-Diploma.png')" class="img-fluid" alt="Certificate" />
                            </div>
                          </div>

                          <div id="online_training" class="pagination-container pt-4">
                              <div class="pagination-header">
                                  Certification of Training Material
                              </div>
                              <div class="pagination-content">
                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                            Certificate
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/">Certificate of Skills </router-link>
                                          <router-link class="pagination-link" to="/">Certificate of Training</router-link>
                                          <router-link class="pagination-link" to="/">Certificate of Attendance</router-link>
                                          <router-link class="pagination-link" to="/">Certificate of Workshop </router-link>
                                          <router-link class="pagination-link" to="/">Certificate of Completion</router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>

                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                          Professional Certificate
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/">Professional Certificate</router-link>
                                          <router-link class="pagination-link" to="/">Advanced Professional Certificate </router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>

                                  <div>
                                    <div class="pagination-columns">
                                        <div class="title">
                                            Professional Diploma
                                        </div>
                                        <div class="pagination-links">
                                          <router-link class="pagination-link" to="/main-certificate-achievement">Professional Diploma</router-link>
                                        </div>
                                    </div>
                                    <div class="pagination-counter">
                                        From 15  To  25  Hours
                                    </div>
                                  </div>
                              </div>
                          </div>

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

    }
  }
}
</script>
