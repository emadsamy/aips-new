<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header main-program-header">
          <div class="program-header-details" :style="{backgroundColor:`${bgColor} !important`}">
            <div class="align-center">
              <div class="title">{{ bgTitle }}</div>
            </div>
          </div>
          <div class="program-header-view" :style="{backgroundImage:`url(${bgImage})`}"></div>
          <!-- :style="{backgroundImage:`url(${})`}" -->
        </div>
        <div class="program-container">
          <div class="program-row">
            <AccreditationSidebar />
            <div class="program-content">
              <!--  v-for="(accreditation, index) in accreditations"  :key="index" -->
              <!-- <div class="acc-widget mb-60"> -->
              <!-- <div class="program-title">{{ accreditation.title }}</div> -->
              <!-- <div class="program-title">Accreditation Benefits</div> -->
              <!-- <div -->
              <!-- class="description-about" -->
              <!-- >By earning your accreditation, you are considered a reliable training source and a distinguished training and development ambassador. Your certification allows your trainers and trainees to earn certification that is acknowledged worldwide. Accreditation enhances your trustworthiness in your community and boosts your reputation as a training provider who takes the initiative to learn processes, provide the best training and develop best practices. We list more benefits for training service providers, trainers, trainees and the groups served below.</div> -->
              <!-- <div class="description-about" v-html="accreditation.body"></div> -->
              <!-- </div> -->

              <div class="acc-widget mb-60" v-html="body1"></div>

              <!-- <div class="title-jumbo mb-70">4 Ways accreditation provides benefits</div> -->
              <div class="title-jumbo mb-70" v-html="body5"></div>

              <div v-for="(con, index) in content" :key="index" class="widget-imgs-bullets mb-40">
                <div class="widget-moving-accred mb-90">
                  <div class="wm-view">
                    <img :src="con.image" alt />
                  </div>
                  <div class="wm-details" :style="{backgroundColor:`${con.background} !important`}">
                    <div class="title">{{ con.label }}</div>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                </ul>
              </div>

              <!-- <div class="widget-imgs-bullets mb-70">
                <div class="widget-moving-accred mb-90">
                  <div class="wm-view">
                    <img :src="require('../assets/img/accred3.jpg')" alt />
                  </div>
                  <div class="wm-details">
                    <div class="title">How trainers benefit</div>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                </ul>
              </div>

              <div class="widget-imgs-bullets mb-70">
                <div class="widget-moving-accred mb-90">
                  <div class="wm-view">
                    <img :src="require('../assets/img/accred3.jpg')" alt />
                  </div>
                  <div class="wm-details">
                    <div class="title">How organizations and businesses benefit</div>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                </ul>
              </div>

              <div class="widget-imgs-bullets mb-70">
                <div class="widget-moving-accred mb-90">
                  <div class="wm-view">
                    <img :src="require('../assets/img/accred3.jpg')" alt />
                  </div>
                  <div class="wm-details">
                    <div class="title">How trainees benefit</div>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-between wm-bullets">
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                  <li
                    class="wa-bullet"
                  >We link the training providers to experts during the assessment process to help obtain an accreditation promptly and successfully.</li>
                </ul>
              </div>-->
            </div>
            <div class="accrediation-became">
              <Faq
                :has_training="has_training"
                :has_faq="has_faq"
                appTitle="Become An Accredited <br /> Training Center"
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

<style scoped src="../components/common/css/Accreditation.css">
</style>

<style scoped>
.widget-imgs-bullets:nth-of-type(even) .widget-moving-accred {
  flex-direction: row-reverse;
}
.widget-imgs-bullets:nth-of-type(even) .widget-moving-accred img {
  transform: translateX(-40px);
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Faq from "../components/Faq.vue";
import AccreditationSidebar from "../components/AccreditationSidebar.vue";
import axios from "axios";
export default {
  name: "Program",
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Faq: Faq,
    AccreditationSidebar: AccreditationSidebar,
  },
  data() {
    return {
      accreditations: [],
      bgImage: "",
      bgColor: "",
      bgTitle: "",
      body1: "",
      body2: "",
      body3: "",
      body4: "",
      body5: "",
      content: [],
      has_faq: false,
      has_training: false,
    };
  },
  methods: {
    fetchRow() {
      axios
        .get(window.baseURL + "/accreditations")
        .then((res) => {
          const data = res.data.rows[2];
          console.log(data);
          this.bgImage = data.image;
          this.bgColor = data.bgColor;
          this.bgTitle = data.bgTitle;
          this.body1 = data.body1;
          this.body2 = data.body2;
          this.body3 = data.body3;
          this.body4 = data.body4;
          this.body5 = data.body5;
          this.content = data.content;
          this.has_faq = data.has_faq;
          this.has_training = data.has_training;
          console.log(data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.fetchRow();
  },
};
</script>
