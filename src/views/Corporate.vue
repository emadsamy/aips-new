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
                Corporate
                <br />Training
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
                <a href="#accreditation" class="link active">Overview</a>
              </div>
              <div class="sidebar-link">
                <a href="#certifiedTrainer" class="link"
                  >Equel experiences, skills and experiences</a
                >
              </div>
              <div class="sidebar-link">
                <a href="#certifications" class="link"
                  >Procedures for obtaining a professional degree:</a
                >
              </div>
            </div>
            <div id="accreditation" class="program-content">
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

              <div id="certifiedTrainer" class="benefits-widget mb-60 pt-4">
                <div class="benefits-widget-details">
                  <div class="relative-sm-title">
                    Types of professional degrees
                  </div>
                  <div class="title overline">
                    Equel experiences, skills and experiences
                  </div>
                </div>
                <div
                  class="benefits-widget-view"
                  :style="{
                    backgroundImage: `url(${require('../assets/img/training.jpg')})`,
                  }"
                ></div>
              </div>

              <div class="widgets-container">
                <div class="widget-img-text pt-4 mb-70">
                  <div class="widget-img-k">
                    <img src="../assets/img/tie.jpg" class="img-fluid tc-img" />
                  </div>
                  <div class="widget-img-details">
                    <div class="title">Knowledge With Experience</div>
                    <div class="text">
                      AIPS Accreditation is an assurance of quality in
                      professional studies in journalism and AIPS Accreditation
                      is an assurance of quality in professional studies in
                      journalism and AIPS Accreditation is an assurance of
                      quality in professional studies in journalism and
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
                      professional studies in journalism and AIPS Accreditation
                      is an assurance of quality in professional studies in
                      journalism and AIPS Accreditation is an assurance of
                      quality in professional studies in journalism and
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
                      professional studies in journalism and AIPS Accreditation
                      is an assurance of quality in professional studies in
                      journalism and AIPS Accreditation is an assurance of
                      quality in professional studies in journalism and
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
                      professional studies in journalism and AIPS Accreditation
                      is an assurance of quality in professional studies in
                      journalism and AIPS Accreditation is an assurance of
                      quality in professional studies in journalism and
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
                      professional studies in journalism and AIPS Accreditation
                      is an assurance of quality in professional studies in
                      journalism and AIPS Accreditation is an assurance of
                      quality in professional studies in journalism and
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="benefits-content">
                              <ul class="list-unstyled">
                                  <li class="benefit-title" v-for="(benefit, index) in benefits" key={index}>
                                      {{ benefit.title }}
                                  </li>
                              </ul>
              </div>-->

              <div class="sm-widget-container pb-5 pt-5">
                <div class="sm-widget-header mb-5 mt-5">
                    <div class="sm-widget-header-details" :style="{backgroundColor:`${'#370F76'} !important`}">
                        <div class="title goldColor">
                            Procedures For obtaining a professional degree
                        </div>
                    </div>
                    <div class="sm-widget-header-view" :style="{ backgroundImage: `url(` + require('../assets/img/online-app.jpg') + `)` }">

                    </div>
                </div>
                <div class="sm-widget-bullets">
                    <div class="sm-wid-bullet bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="sm-wid-bullet bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="sm-wid-bullet bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="sm-wid-bullet bullet">
                        Procedures For obtaining a professional degree
                    </div>
                </div>
              </div>

              <div class="widget-img-text pt-4 mb-70">
                <div class="widget-img-k">
                  <img src="../assets/img/tie.jpg" class="img-fluid tc-img" />
                </div>
                <div class="widget-img-details">
                  <div class="title mb-5">Knowledge With Experience</div>
                  <div class="text">
                    <div class="wit-bull bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="wit-bull bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="wit-bull bullet">
                        Procedures For obtaining a professional degree
                    </div>
                    <div class="wit-bull bullet">
                        Procedures For obtaining a professional degree
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="became-a">
              <ApplyEICTWIdget
                title="equivalent your experience"
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

<style scoped src="@/components/common/css/Eit.css"></style>
<style scoped>
.program-header.main-program-header .program-header-details {
  width: 550px;
  background: #02baff !important;
}
.program-header.main-program-header .title {
  color: #000f81;
}
.program-header.main-program-header .program-header-view {
  width: calc(100% - 550px);
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .program-header.main-program-header .program-header-details {
    width: 400px;
    background: #02baff !important;
  }
  .program-header.main-program-header .title {
    color: #000f81;
  }
  .program-header.main-program-header .program-header-view {
    width: calc(100% - 400px);
  }
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
  created() {
    // Check Auth
    // if (!localStorage.getItem('access_token')) {
    //   this.$router.push({ name: 'Login' });
    // }
  },
};
</script>
