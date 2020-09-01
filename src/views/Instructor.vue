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
              <div class="title">I am Instructor</div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div class="sidebar-link">
                <a href="#accreditation" class="link">What is Accreditation?</a>
              </div>
              <div class="sidebar-link">
                <a
                  href="#certifiedTrainer"
                  class="link active"
                >AIPS Certified Trainer / Instructor Benefits</a>
              </div>
              <div class="sidebar-link">
                <a href="#certifications" class="link">AIPS Certifications</a>
              </div>
            </div>
            <div id="accreditation" class="program-content">
              <div class="program-title">Overview</div>
              <div
                class="description-about"
              >Welcome to AIPS’s Graduate Programs, Do you want to expand your knowledge, update your skills and reach the next level in your career? Our graduate’s programs are designed for you. We take a fresh, personal, hands-on approach. AIPS’s graduate programs create opportunities for meaningful learning and engagement with instructors, classmates, and course material using many of the tools we’re already using every day to communicate, gather information, and manage our lives.</div>

              <div id="certifiedTrainer" class="benefits-widget pt-4">
                <div class="benefits-widget-details">
                  <div class="title overline">
                    AIPS Certified
                    <br />Trainer Benefits
                  </div>
                </div>
                <div
                  class="benefits-widget-view"
                  :style="{backgroundImage:`url(${require('../assets/img/training.jpg')})`}"
                ></div>
              </div>

              <div class="benefits-content">
                <ul class="list-unstyled">
                  <li
                    class="benefit-title"
                    v-for="(benefit, index) in benefits"
                    key="{index}"
                  >{{ benefit.title }}</li>
                </ul>
              </div>

              <div id="certifications" class="benefits-widget pt-4 ti-widget">
                <div class="benefits-widget-details">
                  <div class="title overline">
                    AIPS Certifications
                    for Trainers / Instructors and Public Speakers
                  </div>
                </div>
                <div
                  class="benefits-widget-view"
                  :style="{backgroundImage:`url(${require('../assets/img/tie.jpg')})`}"
                ></div>
              </div>

              <div class="certificate-types">
                <div
                  class="certificate-type"
                  v-for="(type, index) in certificateTypes"
                  :key="index"
                >
                  <div class="certificate-title">
                    {{ type.title }}
                    <sup v-if="type.tm">TM</sup>
                  </div>
                  <div class="certificate-text">{{ type.text }}</div>
                </div>
              </div>

              <div class="application-link">
                <div class="title">Online Application</div>
                <router-link to="/online-application" class="read-more">
                  <div>
                    Apply Now
                    <span class="icon-back"></span>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="became-a">
              <div class="title mb-3">
                Become
                a Certified
                Trainer
              </div>
              <router-link to="/online-application" class="read-more">
                <div>
                  Apply Now
                  <span class="icon-back"></span>
                </div>
              </router-link>
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

<style scoped src="@/components/common/css/Eit.css">
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import DownloadCatalog from "../components/DownloadCatalog.vue";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog,
  },
  data() {
    return {
      benefits: [
        {
          title:
            "Allows use of professional trainer logo on CVs and LinkedIn accounts, which gives a professional impression.",
        },
        {
          title:
            "Creates global relationships with member trainers in the same or other fields.",
        },
        {
          title:
            "Raises the confidence of their trainees, clients, training centers, institutions and the community.",
        },
        {
          title:
            "Entitles them to request accredited certificates for trainees after they pass their tests.",
        },
        {
          title:
            "Helps them achieve professionalism, career goals and increased compensation.",
        },
        {
          title:
            "Increases their demand as professional trainers due to strengthened reputation.",
        },
        {
          title:
            "Creates global relationships with member trainers in the same or other fields.",
        },
      ],
      certificateTypes: [
        { title: "COT", tm: true, text: "Certified Online Trainer" },
        { title: "CCT", tm: true, text: "Certified Corporate Trainer" },
        { title: "U.S CI", tm: true, text: "U.S Certified Instructor" },
        {
          title: "CCTM",
          tm: true,
          text: "Certified Corporate Training Manager",
        },
        { title: "CST", tm: true, text: "AIPS Certified School Teacher" },
        { title: "TOT", tm: false, text: " Train of Trainers" },
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
