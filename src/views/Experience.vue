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
              <div class="title">I Have Experience</div>
              <div class="description-type mt-3 goldColor">
                Professional Experience Equivalence
              </div>
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
                <router-link to="/" class="link"
                  >What is Accreditation?</router-link
                >
              </div>
              <div class="sidebar-link">
                <router-link to="/" class="link active"
                  >AIPS Certified Trainer / Instructor Benefits</router-link
                >
              </div>
              <div class="sidebar-link">
                <router-link to="/" class="link"
                  >AIPS Certifications</router-link
                >
              </div>
            </div>
            <div class="program-content">
              <div class="program-title">Overview</div>
              <div class="description-about">
                Welcome to AIPS’s Graduate Programs, Do you want to expand your
                knowledge, update your skills and reach the next level in your
                career? Our graduate’s programs are designed for you. We take a
                fresh, personal, hands-on approach. AIPS’s graduate programs
                create opportunities for meaningful learning and engagement with
                instructors, classmates, and course material using many of the
                tools we’re already using every day to communicate, gather
                information, and manage our lives.
              </div>

              <div class="benefits-widget">
                <div class="benefits-widget-details">
                  <div class="title overline">
                    AIPS Certified
                    <br />Trainer Benefits
                  </div>
                </div>
                <div
                  class="benefits-widget-view"
                  :style="{
                    backgroundImage: `url(${require('../assets/img/training.jpg')})`,
                  }"
                ></div>
              </div>

              <div class="benefits-content">
                <ul class="list-unstyled">
                  <li
                    class="benefit-title"
                    v-for="(benefit, index) in benefits"
                    :key="index"
                  >
                    {{ benefit.title }}
                  </li>
                </ul>
              </div>

              <div class="benefits-widget ti-widget">
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
            </div>
            <div class="became-a">
              <ApplyEICTWIdget
                title="Equivalent your experience"
                link=""
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
.description-type {
  font-size: 30px !important;
}
.program-header-details {
  background: #0c004d !important;
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
};
</script>
