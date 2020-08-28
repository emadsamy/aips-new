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
                              AIPS Accreditation
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
                              <router-link to="/accreditation" class="link active">What is Accreditation?</router-link>
                          </div>

                          <div class="sidebar-link">
                              <router-link to="/should-choose-accreditation" class="link">Why You Should Choose Our Accreditation</router-link>
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
                          <div class="acc-widget mb-60">
                              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
                              <div class="program-title">What is Accreditation?</div>
                              <div class="description-about">
                                Accreditation is a system of assessment and external review of educational and training institutions and of professional training programs offered by those institutions.
                                <br />
                                <br />
                                Accreditation provides an assurance of quality to trainees and the public. In the accrediting process, the performance of educational and training units is measured against international standards. The organization that oversees external review and grants accreditation of professional studies programs is the Southwestern Accreditation Council (SWAC).
                              </div>
                              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
                          </div>
                      </div>
                      <div class="accrediation-became">

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
  width: 500px;
}
.main-program-header .program-header-details .title-line:after {
  left: 100%;
}
.main-program-header .program-header-view {
  width: calc(100% - 500px);
}


/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {

}

/* Max Width 768px(767.98px) */
@media (max-width: 767.98px) {
  .program-content {
    width: 100%;
  }
  .accrediation-became {
    display: none
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .accrediation-became {
    display: none
  }
  .program-content {
      width: calc(100% - 210px);
  }
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
import axios from 'axios';
export default {
  name: 'Program',
  components: {
    Navbar: Navbar,
    Footer: Footer
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
