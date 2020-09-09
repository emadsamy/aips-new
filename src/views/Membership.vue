<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="program-header main-program-header">
          <div
            class="program-header-details"
            :style="{ backgroundColor: `${bgColor} !important` }"
          >
            <div class="align-center">
              <div class="title title-line">{{ bgTitle }}</div>
            </div>
          </div>
          <div
            class="program-header-view"
            :style="{ backgroundImage: `url(${bgImage})` }"
          ></div>
        </div>
        <div class="program-container">
          <div class="program-row">
            <div class="program-sidebar">
              <div
                class="sidebar-link"
                v-for="(link, index) in sidebarLinks"
                :key="index"
              >
                <a :href="'#' + link.slug" class="link">{{ link.title }}</a>
              </div>
            </div>
            <div class="program-content">
              <div class="widget-text mb-70" v-html="body1"></div>
              <!-- <div class="widget-text mb-70">
                <div class="program-title">AIPS Membership</div>
                <div class="description-about">
                  Professional membership is a degree that is awarded to the candidates who are leaders in their businesses and to the trainers and speakers to the public who provide distinguished services to the communities and make effective and efficient contributions.
                  <br />
                  <br />Professional membership is a combination of the acquired skills, understanding, and personal characteristics that give their owner a recognition of proficiency to play his or her role integrally and confidently. It gives such individuals the official recognition they deserve to show their compliance, knowledge, and experience, and it provides them with a career in which they can make constant progress, which is a clear indicator of their compliance with the development of their personal and professional performance.
                </div>
              </div>-->

              <div id="requirements" class="requirements-widget pt-4 mb-90">
                <div class="program-title mb-3">Membership Requirements</div>
                <div class="requirements-view">
                  <div
                    class="requirements-img"
                    :style="{
                      backgroundImage: `url(${require('../assets/img/online-app.jpg')})`,
                    }"
                  ></div>
                  <div class="requirements-details">
                    <div
                      class="req-bullet"
                      v-for="(benefit, index) in benefits"
                      :key="index"
                    >
                      {{ benefit.title }}
                    </div>
                  </div>
                </div>
              </div>

              <div id="beneficiaries" class="beneficiaries-widget pt-4 mb-40">
                <div class="program-title">Membership Beneficiaries</div>
                <div class="beneficiaries-list">
                  <div
                    class="req-bullet"
                    v-for="(benefit, index) in beneficiaries"
                    :key="index"
                  >
                    {{ benefit.title }}
                  </div>
                </div>
              </div>

              <div class="corporate-widget mb-50">
                <div class="corporate-widget-details">
                  <div class="type">Corporate Membership</div>
                  <div class="title">
                    AIPS Membership
                    <br />enables you to stand <br />out at the global level.
                  </div>
                </div>
                <div
                  class="corporate-widget-view"
                  :style="{
                    backgroundImage: `url(${require('../assets/img/online-app.jpg')})`,
                  }"
                ></div>
              </div>

              <div class="membership-proof pt-4 mb-100">
                <div class="program-title mb-4">
                  Membership is proof that a candidate has the ability and
                  resources necessary to deliver quality in his or her area of
                  specialization.
                </div>
                <div class="proof-bullets">
                  <div
                    class="req-bullet"
                    v-for="(benefit, index) in proof"
                    :key="index"
                  >
                    {{ benefit.title }}
                  </div>
                </div>
              </div>

              <div class="membership-attainment mb-60">
                <div class="program-title mb-4">
                  Procedures for membership attainment
                </div>
                <div class="membership-attainment-steps">
                  <div
                    class="req-bullet"
                    v-for="(step, index) in steps"
                    :key="index"
                  >
                    {{ step.title }}
                  </div>
                </div>
              </div>
              <!-- <div class="mb-70" v-for="(row, index) in rows" :key="index">
                <div v-html="row.body"></div>
              </div>-->
            </div>

            <div class="became-a">
              <ApplyEICTWIdget
                title="Become a Member today"
                :has_training="true"
                :link="{
                  name: 'MembershipApplication',
                  query: { pTitle: data1.bgTitle },
                  params: { pTitle: data1.bgTitle },
                }"
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
.title-line:after {
  left: 106%;
}
.req-bullet {
  font-size: 16px;
  color: #585858;
  position: relative;
  padding-left: 20px;
  margin-bottom: 30px;
}
.req-bullet:after {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 50%;
  border: 1px solid #4f17a8;
  width: 8px;
  height: 8px;
}
.requirements-view {
  display: flex;
  justify-content: space-between;
}
.requirements-view > div {
  width: 48%;
}
.requirements-details {
  padding: 30px 0;
}
.program-title {
  font-weight: 600;
  font-size: 23px;
  color: #2b0962;
}
.beneficiaries-list {
  display: flex;
  justify-content: space-between;
}
.beneficiaries-list > div {
  width: 48%;
}
.corporate-widget {
  display: flex;
  justify-content: space-between;
}
.corporate-widget > div {
  width: 50%;
}
.corporate-widget-details {
  background-color: #0101a3;
  padding: 70px 50px;
}
.corporate-widget-details .type,
.corporate-widget-details .title {
  color: #d9e362;
}
.type {
  font-size: 20px;
  position: relative;
  margin-bottom: 40px;
}
.type:after {
  content: "";
  position: absolute;
  top: -15px;
  left: 0;
  width: 50px;
  background-color: #d9e362;
  height: 4px;
}
.corporate-widget-details .title {
  font-weight: bold;
  font-size: 40px;
  font-size: 37px;
  line-height: 1;
}
.proof-bullets {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.proof-bullets > div {
  width: 48%;
}
.membership-attainment-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.membership-attainment-steps > div {
  width: 48%;
  color: #6e6d76;
  font-size: 17px;
  margin-bottom: 20px;
}
.program-header.main-program-header .program-header-view {
  width: calc(100% - 330px);
}
@media (max-width: 575.98px) {
}

@media (max-width: 767.98px) {
  .became-a,
  .requirements-widget,
  .beneficiaries-widget,
  .corporate-widget,
  .membership-proof,
  .membership-attainment {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .corporate-widget {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  .corporate-widget > div {
    width: 100%;
    /* height: 300px; */
  }
  .corporate-widget-view {
    display: none;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .program-header-details {
    width: 330px !important;
  }
  .program-header.main-program-header .title:after {
    height: 10px;
  }
  .corporate-widget > div {
    width: 100%;
  }
  .corporate-widget-view {
    display: none;
  }
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ApplyEICTWIdget from "../components/ApplyEICTWIdget.vue";
import axios from "axios";
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
            "Candidate must have work experience of no less than five years in the required field of specialization.",
        },
        { title: "Candidate must speak at least two languages." },
        {
          title:
            "For trainers and speakers, they must attach a three-minute video during their training.",
        },
      ],
      beneficiaries: [
        {
          title:
            "Owners; directors; department heads of educational and training institutions; and university lecturers, trainers, and instructors",
        },
        {
          title:
            "Directors, department heads, employees, and professionals, whether in the public or private sector",
        },
      ],
      proof: [
        {
          title:
            "Membership increases your chances of being recognized at both the national and international levels and via our website and global partners.",
        },
        {
          title:
            "A monthly newsletter is sent to all members to keep them constantly informed of most of the innovative work.",
        },
        {
          title:
            "Membership includes invitations to exclusive communication events, such as professional development workshops, relevant market updates, and ideas.",
        },
        {
          title:
            "Candidates will have higher positions in their careers and will improve their social and literal situations.",
        },
        {
          title:
            "Your certificate will be officially listed on the commission’s websites according to specialization, which lets others recognize you both nationally and internationally.",
        },
        {
          title:
            "Membership allows the member trainers to request certificates for their trainees.",
        },
        {
          title:
            "You will get the recognized mark so that you can include it in all of your communications and on your personal and formal profiles.",
        },
      ],
      steps: [
        { title: "Fill out and sign a membership application form." },
        { title: "Pay the membership certificate fees." },
        {
          title:
            "Attach all academic certificates; work experience certificates; and training course, conference, and seminar participation certificates.",
        },
        {
          title:
            "Issue and send the membership certificate and card to the candidate.",
        },
        {
          title:
            "All documents attached by a candidate will be checked and assessed by a competent committee.",
        },
        {
          title:
            "In case the certificate needs to be attested by the United States government authorities, it will be done after the attestation fees are paid, and the certificate will take 21 business days to be processed and delivered to the candidate.",
        },
        {
          title:
            "A competent employee will follow up with the candidate via our official email address or over the phone to complete the papers in case additional documents are required.",
        },
        {
          title:
            "A congratulatory letter will be sent to the candidate in the event of an agreement to award a membership certificate by the assigned committee.",
        },
      ],
      rows: [],
      bgImage: "",
      bgColor: "",
      bgTitle: "",
      title: "",
      body1: "",
      body2: "",
      body3: "",
      body4: "",
      body5: "",
      content1: [],
      has_faq: false,
      has_training: false,
      sidebarLinks: [],
      data1: [],
    };
  },
  methods: {
    fetchRow() {
      axios
        .get(window.baseURL + "/memberships")
        .then((res) => {
          const data = res.data.rows;
          const data1 = res.data.rows[0];
          this.data1 = data1;
          this.bgImage = data1.image;
          this.bgColor = data1.bgColor;
          this.bgTitle = data1.bgTitle;
          this.content = data.content;

          this.body1 = data1.body1;
          this.title = data.title;
          this.body2 = data.body2;
          this.body3 = data.body3;
          this.body4 = data.body4;
          this.body5 = data.body5;
          this.has_faq = data.has_faq;
          this.has_training = data.has_training;
          this.sidebarLinks = data;
          console.log(data);
          // console.log(data);
          // console.log(defaultData);
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
