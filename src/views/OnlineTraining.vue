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
                              Online <br />
                              Training
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"></div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="program-sidebar">
                          <div class="sidebar-link">
                              <a href="#overview" class="link">Overview</a>
                          </div>
                          <div class="sidebar-link">
                              <a href="#onlineTraining" class="link">AIPS Online Training</a>
                          </div>
                          <div class="sidebar-link">
                              <a href="#advantages" class="link">Online Training advantages</a>
                          </div>
                      </div>
                      <div class="program-content">
                          <div id="overview" class="widget-text pt-2 mb-80">
                              <div class="bg-title text-uppercase">
                                  Online Trainging
                              </div>
                              <div class="description-about">
                                Online or digital training is a modern educational process performed by a trainer and a trainee through a computer and networking technology regardless of place and time. This process is different from the traditional training method, which requires a direct relationship between a trainer and a trainee in a specific place and at specific times within courses that are prepared in advance.
                                With the pace of technological progress, many companies and professional individuals specialize in online training. There has been a rise in the number of training applicants who prefer to enroll in important courses from their homes and offices instead of traveling to attend the courses that complement their businesses.
                              </div>
                          </div>

                          <div id="onlineTraining" class="pt-4 mb-60">
                            <div class="widget-online-training mb-60">
                                <div class="wot-details">
                                    <div class="title text-uppercase">
                                        AIPS Online <br /> Training
                                    </div>
                                </div>
                                <div class="wot-view" :style="{backgroundImage:`url(${require('../assets/img/training.jpg')})`}">

                                </div>
                            </div>
                            <div class="description-about">
                              We provide a training provider and trainer accreditation service to those who provide this kind of important training in all of its forms, whether online, digital, or distance learning, due to the importance and benefit of this education as one of the training types in the world. Furthermore, we accredit the electronic and photographed courses that contain registered materials.
                            </div>
                          </div>

                          <div id="advantages" class="widget-text pt-4 mb-100">
                              <div class="title mb-20 paleMainColor">
                                  Online Trainging Advantages
                              </div>
                              <div class="description-about">
                                Online training has several advantages, including but not limited to low cost, no need to travel, flexible schedules, the opportunity to take control and interact with users, and wide variety in terms of the use of interactive courses and videos and the ability to host consultants and specialists via a direct conference call because it is easily applicable and ensures trainees’ constant development.
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
.program-header.main-program-header .program-header-details {
  background-color: #5C759F;
  width: 550px;
}
.program-header.main-program-header .program-header-view {
  width: calc(100% - 550px)
}
.program-header.main-program-header .title {
  color: #FFF;
  text-transform: uppercase;
}
.bg-title {
  font-weight: 600;
  font-size: 26px;
  color: #1B1464;
  margin-bottom: 15px;
}
.widget-online-training {
  display: flex;
  justify-content: space-between;
}
.wot-details {
  width: 330px;
  background-color: #5C759F;
  display: flex;
  align-items: flex-end;
  height: 370px;
  padding: 70px 30px;
  position: relative;
}
.wot-details:after,
.wot-details:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  background: #C6D0E0;
}
.wot-details:after {
  background: #178CA8;
  top: 35px;
}
.wot-details .title {
  color: #FFF;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.2;
  position: relative;
}
.wot-details .title:after {
  content: "";
  position: absolute;
  top: -23px;
  width: 200px;
  height: 7px;
  background: #E0EA79;
  left: 0
}
.wot-view {
  width: calc(100% - 200px);
  background-size: cover;
  background-position: center;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
export default {
  name: 'OnlineTraining',
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
