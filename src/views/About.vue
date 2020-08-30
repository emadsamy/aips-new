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
                          <div class="title title-line">
                              About us
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view program-header-view-about" :style="{backgroundImage:`url(${require('../assets/img/about.jpg')}) !important`} "></div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link" v-for="(a, index) in about"  :key="index">
                              <a :href="'#' + a.slug" class="link">{{ a.title }}</a>
                          </div>
                      </div>
                      <div id="overview" class="program-content program-content-about">
                          <div class="program-title about-title">
                              Overview
                          </div>
                          <div class="description-about">
                            The American Institute of Professional Studies (AIPS) has been dedicated to innovative education since 1998. It is one of the world premier professional studies AIPS is one of the largest examination and accreditation bodies worldwide.
                              <br />
                              <br />
                              AIPS provide accreditation for professional training institutions and manages certification schemes for knowledge-based administrators, with its sophisticated global network of worldwide regional offices.
                          </div>
                          <div class="program-articles-rows">
                              <div id="purpose" class="program-about-article">
                                  <div class="about-article-box">
                                      <div class="program-about-article-title">
                                          Our Purpose
                                      </div>
                                      <div class="program-about-article-text">
                                          AIPS established in 1998, has continually developed and adapted its accreditation processes with two main objectives:
                                          <br />
                                          <br />
                                          To ensure the market has absolute confidence in the training services provided by our accredited organizations and trainers
                                          <br />
                                          <br />
                                          To help our accredited organizations and trainers develop and extend the market for their services
                                      </div>
                                  </div>

                                  <div class="about-article-box">
                                      <div class="about-article-box-media mt-5">
                                          <div class="overlay">
                                              <button type="button" name="button"><span class="icon-play icon-seek"></span></button>
                                          </div>
                                          <video class="img-fluid" src="" :poster="require('../assets/img/about-media.png')"></video>
                                      </div>
                                  </div>
                              </div>

                              <div id="missions" class="program-about-article">
                                  <div class="about-article-box">
                                      <div class="program-about-article-title">
                                          Mission
                                      </div>
                                      <div class="program-about-article-text">
                                          The mission of AIPS is to provide a range of professional studies, informed by global market needs. While fostering engagement, accelerating innovation, and amplifying impact in professional studies.
                                          <br />
                                          <br />
                                          We aim to provide opportunities for individuals to develop intellectual and professional skills preparing students for international, professional industries.
                                      </div>
                                  </div>

                                  <div class="about-article-box">
                                      <div class="program-about-article-title">
                                          Vision
                                      </div>
                                      <div class="program-about-article-text">
                                          Our vision is to become the premier destination for professional studies by generating interdisciplinary leadership, developing innovative learning, and advancing professional solutions.
                                      </div>
                                  </div>
                              </div>

                              <div id="value" class="program-about-article">
                                  <div class="about-article-box">
                                      <div class="program-about-article-title">
                                          Value
                                      </div>
                                      <div class="program-about-article-text">
                                          Our core values are defined as commitments that our entity.
                                          <br />
                                          <br />
                                          <div class="small-title">Leadership:</div>
                                          The will to excel in supporting and enhancing the skills of others.
                                          <br />
                                          <br />
                                          <div class="small-title">Quality:</div>
                                            The Institute System holds a strong commitment to high standards in
                                            all aspects of its educational activities,
                                            learning outcomes, and support services, on a global scale.
                                      </div>
                                  </div>

                                  <div class="about-article-box d-flex align-items-center">
                                      <div class="program-about-article-text mt-4">
                                          Learn from experience
                                          <br />
                                          <br />
                                          Respect and trust all those we work with
                                      </div>
                                  </div>
                              </div>

                              <div id="whatWeDo" class="program-about-article">
                                  <div class="aab">
                                      <div class="program-about-article-title mb-5">
                                          What We Do
                                      </div>
                                      <div class="about-arts">
                                          <div class="aa-row">
                                              <div class="details">
                                                  <div class="medium-title">Accreditation</div>
                                                  <div class="description mb-40">
                                                      Accredited Training Organizations that display the AIPS-accredited badge inspire confidence in prospective candidates that they are in expert hands.
                                                  </div>
                                                  <router-link to="/accreditation" class="read-more">
                                                      <div>
                                                          Read More <span class="icon-back"></span>
                                                      </div>
                                                  </router-link>
                                              </div>
                                              <div class="view">
                                                  <img :src="require('../assets/img/we-do.jpg')" class="img-fluid" alt="" />
                                              </div>
                                          </div>

                                          <div class="aa-row">
                                              <div class="details">
                                                  <div class="medium-title">Certification</div>
                                                  <div class="description mb-40">
                                                      Accredited Training Organizations that display the AIPS-accredited badge inspire confidence in prospective candidates that they are in expert hands.
                                                  </div>
                                                  <router-link to="/accreditation" class="read-more">
                                                      <div>
                                                          Read More <span class="icon-back"></span>
                                                      </div>
                                                  </router-link>
                                              </div>
                                              <div class="view">
                                                  <img :src="require('../assets/img/we-do.jpg')" class="img-fluid" alt="" />
                                              </div>
                                          </div>

                                          <div class="aa-row">
                                              <div class="details">
                                                  <div class="medium-title">Corporate Training and Consultation</div>
                                                  <div class="description mb-40">
                                                      Accredited Training Organizations that display the AIPS-accredited badge inspire confidence in prospective candidates that they are in expert hands.
                                                  </div>
                                                  <router-link to="/accreditation" class="read-more">
                                                      <div>
                                                          Read More <span class="icon-back"></span>
                                                      </div>
                                                  </router-link>
                                              </div>
                                              <div class="view">
                                                  <img :src="require('../assets/img/we-do.jpg')" class="img-fluid" alt="" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="about-article-box">
                                      <div class="about-article-box-media mt-5">

                                      </div>
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

<style scoped>
.title {
  color: #d9e549 !important
}
.title-line:after {
  background-color: #4bb3ff !important
}

/* About Program */
.about-title {
  font-size: 25px; }
.program-articles-rows {
  padding-top: 60px; }

.program-about-article {
  border-top: 1px solid #00000016;
  padding-top: 27px;
  margin-bottom: 65px;
  display: flex;
  justify-content: space-between; }
  .program-about-article .small-title,
  .program-about-article .medium-title {
    font-weight: bold;
    font-size: 17px; }
  .program-about-article .medium-title {
    font-size: 23px;
    color: #1B1464;
    margin-bottom: 8px; }
.aa-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #00000016;
  flex-wrap: wrap;
}
.about-article-box {
  width: 48%;
}
.aa-row:last-of-type {
  padding-bottom: 0;
  border: none;
}
.aa-row .details {
  width: 56%;
}
.aa-row .view {
  width: 36%;
}
.aa-row .view img {
  width: 100%
}
.about-article-box-media {
  position: relative; }
  .about-article-box-media video, .about-article-box-media img {
    width: 100%;
    height: 100%;
    display: block; }
  .about-article-box-media .overlay {
    display: flex;
    align-items: center;
    justify-content: center; }
    .about-article-box-media .overlay .icon-seek {
      color: #fff;
      font-size: 50px; }

.program-about-article-title {
  position: relative;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 15px;
  color: #1B1464;
  display: inline-block; }
  .program-about-article-title:after {
    content: "";
    position: absolute;
    top: -28.5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4F17A8; }

.program-about-article-text {
  color: #6E6D76;
  font-size: 17px; }

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-about-article {
    display: block;
  }
  .about-article-box {
    width: 100%;
    margin-bottom: 60px;
  }
  div.aa-row {
    flex-direction: column-reverse;
    padding-top: 0;
  }
  div.aa-row > div {
    width: 100% !important;
  }
  div.aa-row .view {
    margin-bottom: 15px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';
export default {
  name: 'About',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      about: []
    }
  },
  created() {
    // Get Articles In Setorss
    axios.get(window.baseURL + '/about')
      .then(res => {
        var data = res.data.rows;
        this.about = res.data.rows;
      })
      .catch(err => {
        console.log(err);
      });

  }
}
</script>
