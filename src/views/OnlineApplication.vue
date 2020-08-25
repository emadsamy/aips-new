<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
              <div class="online-app-header">
                  <div class="online-app-details">
                      <div class="align-center">
                          <div class="title goldColor">
                              Entrepreneurship program
                          </div>
                          <div class="description-type goldColor">
                              Online Application
                          </div>
                      </div>
                  </div>
                  <div class="online-app-view" :style="{backgroundImage:`url(${require('../assets/img/online-app.jpg')})`}"></div>
              </div>
          </div>

          <div class="online-app-container">
              <div class="container">
                  <form class="" action="index.html" method="post">
                      <div class="online-app-flex d-flex justify-content-between">
                        <div class="online-app-avatar">
                            <img :src="require('../assets/img/avatar.jpg')" class="img-fluid" alt="">
                            <div class="upload-avatar">
                                <input type="file" name="avatar" />
                                <span class="icon-drag"></span>
                                <div class="upload-text">
                                    Upload your photo
                                </div>
                            </div>
                        </div>
                        <div class="online-app-data">
                            <div class="alert-text-checkbox mb-4">
                                <div class="alert-text mb-2">
                                    CONFIDENTIALITY OF INFORMATION: AMI will hold this information in its database. This information may be accessed, reviewed and used for administrative purposes only.
                                </div>
                                <div class="alert-checkbox">
                                    <input id="agreeNote" type="checkbox" name="Agree" value="1" />
                                    <label for="agreeNote">I Agree</label>
                                </div>
                            </div>

                            <div class="small-text mb-5">
                                Tips for completing this form:
                                <br />
                                <br />
                                1- Hand-write your information cleary in blue or black ink onto a printed form and submit it by postal mail.
                                <br />
                                2- Type your information into the PDF. If you have PDF-editing software like Adobe© Acrobat© or Foxit© Reader, you can save your data. Otherwise, you will only be able to type your information, then print out the form and send it to AMI.
                            </div>

                            <div class="small-title mb-3">
                                Personal Information
                            </div>

                            <div class="form-inputs">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="first_name" placeholder="First Name" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="nationality" placeholder="Nationality" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="middle_name" placeholder="Middle Name" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="residential_address" placeholder="Residential Address" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="last_name" placeholder="Last Name" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="tel" placeholder="Telephone No" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="text" class="form-control" name="full_name" placeholder="Full Name" value="" />
                                </div>

                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" placeholder="E-mail Address" value="" />
                                </div>
                            </div>

                            <div class="form-note mb-5">
                                As you want it to appear on your membership certificate
                            </div>

                            <div class="bg-form-notes mb-4">
                                <div class="small-title">
                                    Certification Requirements
                                </div>
                                <div class="small-text">
                                    Instructor must submit the U.S Certified Instructor certificate requirements with application.
                                </div>
                            </div>

                            <div class="bg-form-notes mb-5">
                                <div class="small-title">
                                    Training Experience
                                </div>
                                <div class="small-text">
                                  When providing training resume please highlight relevant work experience, training and speaking sessions, and other awards or certifications.
                                  <br />
                                  <br />
                                  Provide 3 references for trainings you've delivered in the past year - ideally from 3 different training sessions and/or organizations. Your references will receive a short survey to assess your qualifications and teaching experience.
                                </div>
                            </div>

                            <div class="bg-form-notes mb-5">
                                <div class="small-title">
                                    Training Techniques
                                </div>
                                <div class="add-link">
                                  <div class="small-text">
                                      Submit a 3-minute video introducing yourself and showcasing your training skills. The first minute of the video should give the audience an idea of who you are and your training style.
                                  </div>
                                  <div class="video-link">
                                      <span class="icon-url"></span>
                                      <input type="text" name="" value="" placeholder="Video link here" />
                                  </div>
                                </div>
                            </div>

                            <div class="bg-form-notes mb-5 pb-3">
                                <div class="small-title">
                                  Training Strategy
                                </div>
                                <div class="small-text">
                                    Create a case study that will give us an understanding of your training strategy, including planning, implementation, evaluation, and sample learning materials.
                                </div>
                            </div>

                            <div class="alert-text-checkbox mb-5">
                                <div class="alert-text mb-2">
                                  I CONFIRM THAT THE INFORMATION GIVEN ABOVE IS TRUE AND CORRECT.
                                  <br />
                                  <br />
                                  I AGREE THAT I AM NOT ALLOWED TO USE AIHC LOGO OR QUALITY MARK ON THE TRAINING CENTER CERTIFICATES WITHOUT AIHC APPROVAL.
                                  <br />
                                  Instructor is required to sign this column. Any application for U.S Certified Instructor certificate without trainer’s own signature will be rejected.
                                </div>
                                <div class="alert-checkbox">
                                    <input id="agreeNote2" type="checkbox" name="Agree" value="1" />
                                    <label for="agreeNote2">I Agree</label>
                                </div>
                            </div>

                            <router-link to="/" class="main-btn-backdrop">Apply</router-link>
                        </div>
                      </div>
                  </form>
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
@import '../components/common/css/OnlineAppForm.css';
</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
export default {
  name: 'OnlineApplication',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {

  },
  created() {
    // Check Auth
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>
