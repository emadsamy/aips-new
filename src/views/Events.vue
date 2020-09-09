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
                Aips Events
                <br />& Conferences
              </div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="events-container">
              <div class="events-row mb-70">
                <div class="row">
                  <div
                    class="col-lg-4 col-sm-6"
                    v-for="(eventbox, index) in eventsBox"
                    :key="index"
                  >
                    <div class="events-box">
                      <div class="event-title-bg paleMainColor mb-3">{{ eventbox.title }}</div>
                      <div class="description-about text-lowercase">{{ eventbox.text }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="events-background mb-70"
                :style="{backgroundImage:`url(${require('../assets/img/we-do.jpg')})`}"
              >
                <div class="event-title">
                  What value
                  <br />can we add for
                  <br />you?
                </div>
              </div>

              <div class="events-types">
                <div class="row">
                  <div
                    class="col-lg-6 col-sm-6"
                    v-for="(eventbox, index) in eventsBox"
                    :key="index"
                  >
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
  background-color: #3b3b3b;
  width: 550px;
}
.program-header.main-program-header .program-header-view {
  width: calc(100% - 550px);
}
.program-header.main-program-header .title {
  color: #e0ea79;
  text-transform: uppercase;
}
.events-box {
  margin-bottom: 50px;
  padding-right: 60px;
}
.event-title-bg {
  font-weight: bold;
  font-size: 23px;
}
.events-background {
  padding: 130px 60px 50px;
  background-size: cover;
  background-position: center;
}
.event-title {
  color: #fff;
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

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

@media (max-width: 767.98px) {
  .events-background {
    padding: 60px 50px;
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
  }
  .event-title {
    font-size: 30px;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .program-header.main-program-header .title {
    font-size: 40px;
  }
}

@media (max-width: 991.98px) {
  .events-types {
    width: 100%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .program-header.main-program-header .program-header-details {
    width: 440px;
  }
  .program-header.main-program-header .title {
    font-size: 42px;
  }
  .program-header-view {
    width: calc(100% - 440px) !important;
  }
}

@media (max-width: 1199.98px) {
  .events-box {
    padding-right: 0;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Events",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  data() {
    return {
      eventsBox: [
        {
          title: "Conferences Organization",
          text:
            "Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences",
        },
        {
          title: "Conferences Organization",
          text:
            "Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences",
        },
        {
          title: "Conferences Organization",
          text:
            "Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences",
        },
        {
          title: "Conferences Organization",
          text:
            "Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences",
        },
        {
          title: "Conferences Organization",
          text:
            "Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Conferences Aips Events Aips Events Conferences Aips Events Conferences Aips Events Conferences",
        },
      ],
    };
  },
};
</script>
