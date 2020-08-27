<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="program-header">
                  <div class="program-header-details">
                      <div class="align-center">
                        <div class="faq-title">
                            <div class="faq-title-bg text-uppercase">
                                faq
                            </div>
                            <div class="faq-title-sm">
                                Frequently Asked
                                Questions
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/faq.jpg')})`}"></div> <!-- imageHeader -->
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link" v-for="(link, index) in sidebarLinks"  :key="index">
                             <!-- :to="{path: '/programs/sectors/:slug/products', name: 'Program', params: {slug: link.slug } }" -->
                              <router-link to="/" class="link">{{ link.title }}</router-link>
                          </div>
                      </div>
                      <div class="program-content">
                          <div class="faq-container mb-90 pr-5">
                              <div class="faq-row" v-for="(faq, index) in faqs"  :key="index">
                                  <div class="program-title mb-30">
                                      {{ faq.title }}
                                  </div>
                                  <div class="description">{{ faq.body }}</div>
                              </div>
                          </div>
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

<style scoped>
.program-header-details {
  width: 540px;
  background-color: #3B3B3B
}
.program-header-view {
  width: calc(100% - 540px);
}
.faq-title {
  display: flex;
  align-items: center;
}
.faq-title-bg {
  color: #E0EA79;
  font-weight: bolder;
  font-size: 80px;
}
.faq-title-sm {
  line-height: 1;
  color: #A4A4A4;
  font-size: 38px;
  padding-left: 10px;
}
.faq-row {
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-bottom: 1px solid #00000016;
}
.faq-row:last-of-type {
  border: none;
  margin: 0
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
// import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';

export default {
  name: 'Faq',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    // DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      sidebarLinks: [
        {title: 'Accredition procedures for training providers/instructors'}
      ],
      articles: [],
      imageHeader: '',
      faqs: [
        {
          title: 'How long does accreditation last? / How long will it take to become accredited?',
          body: 'The accreditation period is one calendar year from the issuance date on your accreditation certificate. The accreditation process takes from 15 to 21 business days from the date of filling out the accreditation application form and the payment of accreditation fees.'
        },
        {
          title: 'How long does accreditation last? / How long will it take to become accredited?',
          body: 'The accreditation period is one calendar year from the issuance date on your accreditation certificate. The accreditation process takes from 15 to 21 business days from the date of filling out the accreditation application form and the payment of accreditation fees.'
        },
        {
          title: 'How long does accreditation last? / How long will it take to become accredited?',
          body: 'The accreditation period is one calendar year from the issuance date on your accreditation certificate. The accreditation process takes from 15 to 21 business days from the date of filling out the accreditation application form and the payment of accreditation fees.'
        },
        {
          title: 'How long does accreditation last? / How long will it take to become accredited?',
          body: 'The accreditation period is one calendar year from the issuance date on your accreditation certificate. The accreditation process takes from 15 to 21 business days from the date of filling out the accreditation application form and the payment of accreditation fees.'
        },
        {
          title: 'How long does accreditation last? / How long will it take to become accredited?',
          body: 'The accreditation period is one calendar year from the issuance date on your accreditation certificate. The accreditation process takes from 15 to 21 business days from the date of filling out the accreditation application form and the payment of accreditation fees.'
        }
      ]
    }
  },
  created() {

  }
}
</script>
