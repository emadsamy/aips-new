<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="program-header entrepreneurship-header main-program-header">
                  <div class="program-header-details">
                      <div class="align-center">
                          <div class="title">
                              {{ pageTitle }}
                          </div>
                          <div class="description-type goldColor">
                              Programs
                          </div>
                      </div>
                  </div>
                  <!-- imageHeader -->
                  <div class="program-header-view" 
                  :style="{backgroundImage:`url(${require('../assets/img/enter.jpg')}) !important`} ">
                    
                  </div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar program-sidebar-bullet">
                          <div class="sidebar-link-bullet">
                              <a href="#" class="link mb-3">{{ row.title }}</a>
                              <ul class="list-unstyled bullets-items">
                                  <li v-for="(pro, index) in programs">
                                    <router-link :to="{name: 'program-detail', 
                                        params: {slug: sector_slug, pro: pro.slug}}" 
                                        class="bullet-link">
                                      {{ pro.title }}
                                    </router-link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="program-content">
                          <div class="description-about">
                              Welcome to AIPS’s Graduate Programs, Do you want to expand your knowledge, update your skills and reach the next level in your career? Our graduate’s programs are designed for you. We take a fresh, personal, hands-on approach. AIPS’s graduate programs create opportunities for meaningful learning and engagement with instructors, classmates, and course material using many of the tools we’re already using every day to communicate, gather information, and manage our lives.
                          </div>
                          <div class="program-view-head-text">
                            <div class="title">
                                {{ pageTitle }}
                            </div>
                            <div class="description-type">
                                Programs
                            </div>
                          </div>
                          <div class="program-entre-row">
                              <div class="title mb-5">
                                  Entrepreneurship
                              </div>
                              <div class="program-entre-content">
                                  <div class="program-entre-text">
                                      <div class="medium-entre-title">
                                          Program Overview
                                      </div>
                                      <div class="text mb-4">
                                        Entrepreneurship is an interdisciplinary course designed to teach students how to think and act entrepreneurial. Students learn how to start-up and operate a business while in school, thus turning their learning into earning. The course will build on cross-curricular academic skills, by integrating inquiry-based learning and business tools that will enable students to analyze, create, develop and pilot small businesses in a safe campus environment.
                                        <br />
                                        <br />
                                        Those who manage and operate a small business will bring their products directly to the consumer via the local marketplace or present venture to potential investors for financing. Concepts and skills are reinforced by a strong emphasis on hands-on experiences. Applications to society, individuals, and the utilization of technology are included. The context of this course is in conjunction with the Network for Teaching Entrepreneurship, (NFTE).
                                      </div>

                                      <div class="apply-border-bottom">
                                          <div class="medium-entre-title">
                                              What You’ll Learn
                                          </div>
                                          <div class="text mb-5">
                                              <div>- Startup Creation Process and Entrepreneurial Ecosystem</div>
                                              <div>- Entrepreneurship and Business Opportunities</div>
                                              <div>- New Venture Business Planning, Small and Family Business</div>
                                              <div>- Accounting & Finance for Entrepreneurs</div>
                                              <div>- Strategic Management</div>
                                              <div>- Marketing Planning</div>
                                              <div>- Advanced Effective Sales Negotiation & Intercultural Communication</div>
                                          </div>
                                      </div>

                                      <div class="medium-entre-title">
                                          Who Should Apply?
                                      </div>
                                      <div class="text mb-5">
                                          Entrepreneurship Essentials introduces you to the entrepreneurial journey from finding an idea, to gaining traction in the marketplace, to raising capital for your venture. This course explains how entrepreneurs run structured experiments to validate ideas and refine business strategy. You will dive deep into the numbers behind how entrepreneurs and their investors make financial decisions to create value and grow their operations.
                                      </div>
                                  </div>
                                  <div class="program-entre-application">
                                      <div class="apply-border-bottom">
                                          <div class="medium-entre-title">
                                              Online Application
                                          </div>
                                          <router-link to="/online-application" class="read-more mb-4">
                                              <div>
                                                  Apply Now <span class="icon-back"></span>
                                              </div>
                                          </router-link>
                                      </div>
                                      <div class="apply-border-bottom">
                                          <div class="medium-entre-title">
                                              Entry Requirements
                                          </div>
                                          <div class="text mb-3">
                                              Bachelor-level <br />
                                              undergraduate degree in <br />
                                              any subject. Fluency in English
                                          </div>
                                      </div>
                                      <div>
                                          <div class="medium-entre-title">
                                              Price
                                          </div>
                                          <div class="text mb-3">
                                              Member: US$800.00 <br />
                                              Non-member: US$1,000.00
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <DownloadCatalog />
                      <!-- <div style="width: calc(100% - 300px)" class="program-content" v-html="pageBody"></div> -->
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

<style>
.program-content table,
.program-content table tr,
.program-content table td,
.program-content table div {
  border: none !important
}
.program-content h3 {
  margin-bottom: 0
}
.program-content table tr td:first-of-type {
  padding-bottom: 70px;
}
.program-header-view {
  background-position: center center;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';
export default {
  name: 'Program',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      row: '',
      pageTitle: '',
      pageImage: '',
      pageBody: '',
      imageHeader: '',
      programs: [],

      sector_slug: this.$route.params.slug
    }
  },
  created() {
    const url = window.baseURL + '/programs/sectors/' + this.$route.params.slug + '/products';
    axios.get(url)
      .then(res => {
        var data = res.data.row;
        this.row = res.data.row;
        this.programs = data.programs;
        this.pageTitle = data.title;
        this.pageImage = data.image;
        this.pageBody = data.body;
        this.imageHeader = data.image;
        console.log(data.image);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
</script>
