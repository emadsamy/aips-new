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
              <div class="title">Training Center</div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{
              backgroundImage: `url(${require('../assets/img/online-app.jpg')})`,
            }"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div class="sidebar-link">
                <a href="#accreditation" class="link">What is Accreditation?</a>
              </div>
              <div class="sidebar-link">
                <a href="#certifications" class="link"
                  >AIPS Certified Trainer / Instructor Benefits</a
                >
              </div>
              <div class="sidebar-link">
                <a href="#aipsCertifications" class="link"
                  >AIPS Certifications</a
                >
              </div>
            </div>
            <div class="program-content">
              <div id="accreditation" class="widget-text">
                <div class="program-title mb-4">Our Accreditation Services</div>
                <div class="description-about mb-5">
                  AIPS is one of the best known for accrediting training
                  organizations that deliver a wide range of professional
                  certifications and qualifications. We accredit institutions,
                  training programs and trainers. We provide specialized
                  accreditation for professional studies.
                  <br />
                  <br />Our accreditation processes remain rigorous and demand a
                  high standard, we do not place unnecessary burdens on those we
                  accredit.
                  <br />
                  <br />Our accreditation is voluntary, and to date,
                  approximately 3,000 programs at over 800 training
                  organizations/institutions in 25 countries have received AIPS
                  accreditation.
                </div>
              </div>

              <div
                id="certifications"
                class="benefits-widget pt-4 mb-40 ti-widget"
              >
                <div class="benefits-widget-details">
                  <div class="title overline">
                    AIPS Certifications for Trainers / Instructors and Public
                    Speakers
                  </div>
                </div>
                <div
                  class="benefits-widget-view"
                  :style="{
                    backgroundImage: `url(${require('../assets/img/tie.jpg')})`,
                  }"
                ></div>
              </div>

              <div class="widget-text pt-4">
                <div class="program-title mb-4">
                  Trainees and prospective students
                </div>
                <div class="description-about mb-5">
                  AIPS Accreditation is an assurance of quality in professional
                  studies in journalism and mass communications. Trainees in an
                  accredited program can expect to find a challenging
                  curriculum, appropriate resources and facilities, and a
                  competent faculty. Accredited programs may offer scholarships,
                  internships, and other activities unavailable in
                  non-accredited programs.
                </div>
              </div>

              <div class="tc-container mb-90">
                <div class="row">
                  <div
                    class="col-lg-4 col-sm-6"
                    v-for="(tc, index) in tcs"
                    :key="index"
                  >
                    <div class="tc-box">
                      <img
                        :src="tc.img"
                        class="img-fluid tc-img"
                        :alt="tc.title"
                      />
                      <div class="program-title tc-title">{{ tc.title }}</div>
                      <div class="description text">{{ tc.text }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="aipsCertifications" class="widget-img-text pt-4 mb-70">
                <div class="widget-img-k">
                  <img src="../assets/img/tie.jpg" class="img-fluid tc-img" />
                </div>
                <div class="widget-img-details">
                  <div class="title">Knowledge With Experience</div>
                  <div class="text">
                    AIPS Accreditation is an assurance of quality in
                    professional studies in journalism and AIPS Accreditation is
                    an assurance of quality in professional studies in
                    journalism and AIPS Accreditation is an assurance of quality
                    in professional studies in journalism and
                  </div>
                </div>
              </div>

              <div class="widget-img-text pt-4 mb-70">
                <div class="widget-img-k">
                  <img src="../assets/img/tie.jpg" class="img-fluid tc-img" />
                </div>
                <div class="widget-img-details">
                  <div class="title">Knowledge With Experience</div>
                  <div class="text">
                    AIPS Accreditation is an assurance of quality in
                    professional studies in journalism and AIPS Accreditation is
                    an assurance of quality in professional studies in
                    journalism and AIPS Accreditation is an assurance of quality
                    in professional studies in journalism and
                  </div>
                </div>
              </div>
            </div>
            <div class="became-a">
              <ApplyEICTWIdget
                title="Become an Accredited Training Center"
                link="/"
                :has_training="true"
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

<style scoped src="../components/common/css/Eit.css"></style>
<style scoped>
.program-header-details {
  background: #d0d877 !important;
}
.title {
  color: #370f76 !important;
}
.tc-title {
  font-weight: bold;
  font-size: 28px;
  color: #370f76;
  padding: 30px 0 0;
  margin-bottom: 10px;
}
.text {
  font-size: 16px;
  color: #6e6d76;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ApplyEICTWIdget from "../components/ApplyEICTWIdget.vue";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    ApplyEICTWIdget: ApplyEICTWIdget,
  },
  data() {
    return {
      tcs: [
        {
          img: require("../assets/img/tie.jpg"),
          title: "Training Center",
          text:
            "AIPS Accreditation is an assurance of quality in professional studies in journalism and",
        },
        {
          img: require("../assets/img/tie.jpg"),
          title: "Training Center",
          text:
            "AIPS Accreditation is an assurance of quality in professional studies in journalism and",
        },
        {
          img: require("../assets/img/tie.jpg"),
          title: "Training Center",
          text:
            "AIPS Accreditation is an assurance of quality in professional studies in journalism and",
        },
      ],
    };
  },
  created() {
    // Check Auth
    // if (!localStorage.getItem('access_token')) {
    //   this.$router.push({ name: 'Login' });
    // }
  },
};
</script>
