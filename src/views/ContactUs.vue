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
                              Contact us
                          </div>
                      </div>
                  </div>
                  <div class="program-header-view" :style="{backgroundImage:`url(${require('../assets/img/contact.jpg')})`}"></div>
              </div>
              <div class="contactus-container">
                  <div class="container">
                      <div class="row">
                          <div class="col-lg-8 col-md-8">
                              <div class="contact-form">
                                  <div class="program-title">
                                    We Would Love
                                    <br />
                                    to Hear from You.
                                  </div>
                                  <div class="description-type mb-40">
                                      To learn more about AIPS’s accreditation, certification and services, or for queries regarding<br /> partnership - please contact us using the form below or call us on +1 (407) 543 7098.
                                  </div>

                                  <div class="title paleMainColor">
                                      Careers
                                  </div>
                                  <div class="description-type">
                                    For job opportunities please visit our Careers page.
                                    <br />
                                    career@aips.us
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-4 col-md-4">
                              <div class="contact-address">
                                  <div class="contact-title">
                                      United States of America
                                  </div>
                                  <div class="contact-text">
                                      Address : 1308 S. Semoran Blvd
                                      <br />
                                      Orlando, Florida. 32807, USA.
                                      <br />
                                      Phone: +1 (407) 730 2572
                                      <br />
                                      Mobile: +1 (407) 543 7098
                                      <br />
                                      E-Mail: info@aips.us
                                      <br />
                                      <br />
                                      <router-link class="directions" to="/inProgress">
                                          <div class="d-flex align-items-center">
                                              Get Directions <span class="icon-back"></span>
                                          </div>
                                      </router-link>
                                  </div>
                              </div>
                          </div>

                          <div class="col-lg-5 col-md-7">
                              <div class="form-content">
                                  <div class="form-title">
                                      Send a Message
                                  </div>
                                  <form class="" action="index.html" method="post">
                                      <div class="form-group">
                                          <input type="text" class="form-control" name="name" placeholder="Name" />
                                      </div>
                                      <div class="form-group">
                                          <input type="text" class="form-control" name="email" placeholder="Email" />
                                      </div>
                                      <div class="form-group mb-3">
                                          <textarea type="text" class="form-control" name="subject" placeholder="Subject"></textarea>
                                      </div>
                                      <div class="form-group form-group-btn">
                                          <button class="btn main-btn-backdrop" type="button" name="button">Submit</button>
                                      </div>
                                  </form>
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
.contactus-container {
  padding-top: 80px;
  padding-bottom: 50px;
}
.main-program-header div.program-header-details {
  width: 600px;
  background-color: #370F76
}
.main-program-header {
  height: 380px
}
.program-header-view {
  background-size: cover;
  background-position: center;
}
.program-title {
  font-size: 35px;
  color: #310B7E;
  line-height: 1.2
}
.title {
  font-weight: 600;
  font-size: 18px;
}
.form-content {
  padding-top: 70px;
  margin-bottom: 15px;
}
.form-title {
  font-weight: bolder;
  color: #000;
  font-size: 17px;
  margin-bottom: 16px;
}
.form-content .form-group {
  margin-bottom: 8px;
  border: 1px solid #808080;
  max-width: 100%;
}
.form-control {
  resize: none
}
.form-group-btn {
  padding: 0;
  border: none !important
}
.main-btn-backdrop {
  padding: 12px;
}
.contact-title {
  font-weight: bold;
  font-size: 18px;
  color: #310B7E;
  margin-bottom: 10px;
}
.contact-text {
  color: #4E4D4D;
  font-size: 16px;
}
.directions div,
.icon-back:before {
  color: #0f1dff;
  font-weight: 600
}
.icon-back:before {
  margin-left: 10px;
  font-size: 25px
}
.contact-address {
  padding-top: 50px
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .form-content .form-group {
    width: 100%;
    max-width: 350px;
  }
  .contact-address {
    margin-top: 40px
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
  .main-program-header div.program-header-details {
    width: 370px;
  }
  .program-header.main-program-header .program-header-view {
        width: calc(100% - 370px);
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
export default {
  name: 'Programs',
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
