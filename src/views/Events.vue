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
                              Aips Events <br />
                              & Conferences
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"></div>
              </div>
              <div class="program-container">
                  <div class="program-row">
                      <div class="events-container">
                          <div class="events-row mb-70">
                              <div class="row">

                                  <div class="col-lg-4" v-for="(eventbox, index) in eventsBox"  :key="index">
                                      <div class="events-box">
                                          <div class="event-title-bg paleMainColor mb-3">{{ eventbox.title }}</div>
                                          <div class="description-about text-lowercase">{{ eventbox.text }}</div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div class="events-background mb-70" :style="{backgroundImage:`url(${require('../assets/img/we-do.jpg')})`}">
                              <div class="event-title">
                                  What value <br />
                                  can we add for <br /> you?
                              </div>
                          </div>

                          <div class="events-types">
                              <div class="row">
                                <div class="col-lg-6" v-for="(eventbox, index) in eventsBox"  :key="index">
                                    <div class="events-box">
                                        <div class="md-title mainColor mb-3">{{ eventbox.title }}</div>
                                        <div class="description-about text-lowercase">{{ eventbox.text }}</div>
                                    </div>
                                </div>
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
.program-header.main-program-header .program-header-details {
  background-color: #3B3B3B;
  width: 550px;
}
.program-header.main-program-header .program-header-view {
  width: calc(100% - 550px)
}
.program-header.main-program-header .title {
  color: #E0EA79;
  text-transform: uppercase;
}
.events-box {
  margin-bottom: 50px;
  padding-right: 60px;
}
.event-title-bg {
  font-weight: bold;
  font-size: 23px
}
.events-background {
  padding: 130px 60px 50px;
  background-size: cover;
  background-position: center;
}
.event-title {
  color: #FFF;
  font-weight: bold;
  font-size: 50px;
  line-height: 1;
}
.md-title {
  font-weight: 600;
  font-size: 17px;
}
.events-types {
  width: 70%;
  margin-left: auto;
}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Events',
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data() {
    return {
        eventsBox: [
          {title: 'Conferences Organization', text: 'Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences'},
          {title: 'Conferences Organization', text: 'Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences'},
          {title: 'Conferences Organization', text: 'Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences'},
          {title: 'Conferences Organization', text: 'Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences'},
          {title: 'Conferences Organization', text: 'Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences'},
        ]
    }
  }
}
</script>
