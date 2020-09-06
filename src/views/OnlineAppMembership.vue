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
                {{ pTitle || "Membership" }}
              </div>
              <div class="description-type goldColor">Online Application</div>
            </div>
          </div>
          <div
            class="online-app-view"
            :style="{
              backgroundImage: `url(${require('../assets/img/online-app.jpg')})`,
            }"
          ></div>
        </div>
      </div>

      <div class="online-app-container">
        <div class="container">
          <form class action="index.html" method="post">
            <div class="online-app-flex d-flex justify-content-between">
              <div class="online-app-avatar">
                <img
                  :src="
                    row.preview
                      ? row.preview
                      : require('../assets/img/avatar.jpg')
                  "
                  class="img-fluid"
                  alt
                />
                <div class="upload-avatar">
                  <input type="file" name="avatar" @change="onImageChange" />
                  <span class="icon-drag"></span>
                  <div class="upload-text">Upload your photo</div>
                </div>
              </div>
              <div class="online-app-data">
                <div class="alert-text-checkbox mb-4">
                  <div class="alert-text mb-2">
                    CONFIDENTIALITY OF INFORMATION: AMI will hold this
                    information in its database. This information may be
                    accessed, reviewed and used for administrative purposes
                    only.
                  </div>
                  <div class="alert-checkbox">
                    <input
                      id="agreeNote"
                      type="checkbox"
                      name="Agree"
                      value="1"
                    />
                    <label for="agreeNote">I Agree</label>
                  </div>
                </div>

                <div class="small-text mb-5">
                  Tips for completing this form:
                  <br />
                  <br />1- Hand-write your information cleary in blue or black
                  ink onto a printed form and submit it by postal mail. <br />2-
                  Type your information into the PDF. If you have PDF-editing
                  software like Adobe© Acrobat© or Foxit© Reader, you can save
                  your data. Otherwise, you will only be able to type your
                  information, then print out the form and send it to AMI.
                </div>

                <div class="small-title mb-3">Personal Information</div>

                <div class="form-inputs">
                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="row.first_name"
                    />
                  </div>

                  <div class="form-group d-flex justify-content-between">
                    <label class="cc-label">Country</label>
                    <select
                      v-model="row.nationality"
                      class="select-country"
                      name="country"
                    >
                      <option
                        v-for="(country, index) in countries"
                        :value="country.value"
                        :key="index"
                        >{{ country.value }}</option
                      >
                    </select>
                  </div>

                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Middle Name"
                      v-model="row.middle_name"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Residential Address"
                      v-model="row.residential_address"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      v-model="row.last_name"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Telephone No"
                      v-model="row.telephone_no"
                      required
                    />
                  </div>

                  <!-- <div class="form-group">
                    <VueInput></VueInput>
                  </div> -->

                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      v-model="row.full_name"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': redBorder }">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="E-mail Address"
                      v-model="row.email_address"
                      required
                    />
                  </div>
                </div>

                <div class="form-note mb-5">
                  As you want it to appear on your membership certificate
                </div>

                <!-- <div class="online-form-upload mb-40">
                  <div class="small-title mb-3">Documents</div>

                  <div class="form-inputs">
                    <div class="form-group form-group-upload">
                      <span class="text">ID or passport</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" class="form-control" value />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">passport size phonts!</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" class="form-control" value />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Current occupation (documented)</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" class="form-control" value />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Detailed resume</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" class="form-control" value />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Proof of prior work experience (via HR letters)</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" class="form-control" value />
                    </div>
                  </div>
                </div>-->

                <div class="online-form-addition mb-40">
                  <div class="small-title with-underline mb-4">
                    Academic Qualifications
                  </div>

                  <div class="form-inputs form-inputs-multiples">
                    <!-- Qualifications -->
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in quals.key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'frm_' + i"
                      >
                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition"
                              >Educational and Qualification</label
                            >
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>
                        </div>

                        <div class="form-addition form-addition-multiple">
                          <div class="form-addition-content">
                            <label class="label-addition"
                              >University / College</label
                            >
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>

                          <div class="form-addition-content">
                            <label class="label-addition">GPA / Grade</label>
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>

                          <div class="form-addition-content">
                            <label class="label-addition">Year</label>
                            <div class="form-group form-select">
                              <select class="selectbox">
                                <option
                                  v-for="year in years"
                                  :key="year"
                                  :value="year"
                                  >{{ year }}</option
                                >
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        @click="addMoreQuals()"
                        class="add-btn"
                        type="button"
                        name="button"
                      >
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>

                    <!-- Courses -->
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in cours.key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'frm_' + i"
                      >
                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition"
                              >Courses Attended</label
                            >
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>
                        </div>

                        <div class="form-addition form-addition-multiple">
                          <div class="form-addition-content">
                            <label class="label-addition"
                              >Institute / Training center</label
                            >
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>

                          <div class="form-addition-content form-addition-du">
                            <label class="label-addition">Duration</label>
                            <div class="form-group">
                              <input type="text" class="form-control" value />
                            </div>
                          </div>

                          <div
                            class="form-addition-content form-addition-date mt-3"
                          >
                            <label class="label-addition">Date</label>
                            <div class="form-group date-start-end">
                              <!-- <date-picker
                            v-model="picker.date"
                            type="datetime"
                            :time-picker-options="timePickerOptions"
                            id="cbx_extra_details_reception_hours_start"
                            :lang="'en'"
                            :format="'hh:mm A'"
                            :placeholder="'Select hours start'"
                          /> -->
                              <input type="date" />
                              <span class="icon-calendar ca-date"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        @click="addMoreCours()"
                        class="add-btn"
                        type="button"
                        name="button"
                      >
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>

                    <!-- Languages -->
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in langsData.key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'frm_' + i"
                      >
                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition bf-visbility"
                              >Languages</label
                            >
                            <div
                              class="form-group d-flex justify-content-between"
                            >
                              <label class="label-addition cc-label"
                                >Languages</label
                              >
                              <select class="select-country" name="country">
                                <option
                                  v-for="(lang, index) in langs"
                                  :value="lang"
                                  :key="index"
                                  >{{ lang }}</option
                                >
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition"
                              >Level of Proficiency</label
                            >
                            <div class="form-group form-select">
                              <select class="selectbox" name>
                                <option
                                  v-for="(lan, index) in langsLevels"
                                  :value="lan"
                                  :key="index"
                                  >{{ lan }}</option
                                >
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        @click="addMoreLangs()"
                        class="add-btn"
                        type="button"
                        name="button"
                      >
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>
                  </div>
                </div>

                <div class="bg-form-notes mb-4">
                  <div class="small-title">Certification Requirements</div>
                  <div class="small-text">
                    Instructor must submit the U.S Certified Instructor
                    certificate requirements with application.
                  </div>
                </div>

                <div class="bg-form-notes mb-5">
                  <div class="small-title">Training Experience</div>
                  <div class="small-text">
                    When providing training resume please highlight relevant
                    work experience, training and speaking sessions, and other
                    awards or certifications.
                    <br />
                    <br />Provide 3 references for trainings you've delivered in
                    the past year - ideally from 3 different training sessions
                    and/or organizations. Your references will receive a short
                    survey to assess your qualifications and teaching
                    experience.
                  </div>
                </div>

                <div class="bg-form-notes mb-5">
                  <div class="small-title">Training Techniques</div>
                  <div class="add-link">
                    <div class="small-text">
                      Submit a 3-minute video introducing yourself and
                      showcasing your training skills. The first minute of the
                      video should give the audience an idea of who you are and
                      your training style.
                    </div>
                    <div class="video-link">
                      <span class="icon-url"></span>
                      <input
                        type="text"
                        v-model="row.video_url"
                        placeholder="Video link here"
                      />
                    </div>
                  </div>
                </div>

                <div class="bg-form-notes mb-5 pb-3">
                  <div class="small-title">Training Strategy</div>
                  <div class="small-text">
                    Create a case study that will give us an understanding of
                    your training strategy, including planning, implementation,
                    evaluation, and sample learning materials.
                  </div>
                </div>

                <div class="alert-text-checkbox mb-5">
                  <div class="alert-text mb-2">
                    I CONFIRM THAT THE INFORMATION GIVEN ABOVE IS TRUE AND
                    CORRECT.
                    <br />
                    <br />I AGREE THAT I AM NOT ALLOWED TO USE AIHC LOGO OR
                    QUALITY MARK ON THE TRAINING CENTER CERTIFICATES WITHOUT
                    AIHC APPROVAL. <br />Instructor is required to sign this
                    column. Any application for U.S Certified Instructor
                    certificate without trainer’s own signature will be
                    rejected.
                  </div>
                  <div class="alert-checkbox">
                    <input
                      id="agreeNote2"
                      type="checkbox"
                      name="Agree"
                      value="1"
                    />
                    <label for="agreeNote2">I Agree</label>
                  </div>
                </div>

                <button
                  class="btn main-btn-backdrop"
                  type="button"
                  @click="apply"
                  style="padding: 10px 20px; width: auto"
                  id="applyNow"
                >
                  <img
                    src="../assets/loader.svg"
                    class="sm-loader"
                    alt
                    v-if="btnLoading"
                  />
                  <span v-else>Apply Now</span>
                </button>
                <div v-if="errors" class="alert alert-danger mt-2 text-left">
                  {{ errors }}
                </div>

                <div v-if="success" class="alert alert-success mt-2 text-left">
                  {{ success }}
                </div>
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

<style scoped src="../components/common/css/OnlineAppForm.css"></style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import VueInput from "../components/VueInput.vue";
import DatePicker from "vue2-datepicker";
import Loop from "../components/Loop.vue";
import axios from "axios";

export default {
  name: "OnlineApplicationMem",
  components: {
    Navbar,
    Footer,
    VueInput,
    DatePicker,
    Loop,
  },
  data() {
    return {
      row: {
        preview: "",
        base64Image: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        full_name: "",
        nationality: "United States",
        residential_address: "",
        telephone_no: "",
        email_address: "",
        video_url: "",
      },
      errors: false,
      success: false,
      btnLoading: false,
      country: "United States",
      countries: [],
      redBorder: false,
      langs: [
        "English",
        "Afrikaans",
        "Albanian",
        "Arabic",
        "Armenian",
        "Basque",
        "Bengali",
        "Bulgarian",
        "Catalan",
        "Cambodian",
        "Croatian",
        "Czech",
        "Danish",
        "Dutch",
        "English",
        "Estonian",
        "Fiji",
        "Finnish",
        "French",
        "Georgian",
        "German",
        "Greek",
        "Gujarati",
        "Hebrew",
        "Hindi",
        "Hungarian",
        "Icelandic",
        "Indonesian",
        "Irish",
        "Italian",
        "Japanese",
        "Javanese",
        "Korean",
        "Chinese (Mandarin)",
        "Latin",
        "Latvian",
        "Lithuanian",
        "Macedonian",
        "Malay",
        "Malayalam",
        "Maltese",
        "Maori",
        "Marathi",
        "Mongolian",
        "Nepali",
        "Norwegian",
        "Persian",
        "Polish",
        "Portuguese",
        "Punjabi",
        "Quechua",
        "Romanian",
        "Russian",
        "Samoan",
        "Serbian",
        "Slovak",
        "Slovenian",
        "Spanish",
        "Swahili",
        "Swedish",
        "Tamil",
        "Tatar",
        "Telugu",
        "Thai",
        "Tibetan",
        "Tonga",
        "Turkish",
        "Ukrainian",
        "Urdu",
        "Uzbek",
        "Vietnamese",
        "Welsh",
        "Xhosa",
      ],
      pTitle: "",
      langsLevels: ["Beginner", "Elementary", "Intermediate", "Proficiency"],
      picker: {
        type: "date",
        date: "",
      },
      quals: {
        key: 1,
        qualifcations: [],
      },
      langsData: {
        key: 1,
        languages: [],
      },
      cours: {
        key: 1,
        courses: [],
      },
    };
  },
  mounted() {},
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1900 },
        (value, index) => 1901 + index
      );
    },
  },
  methods: {
    apply() {
      this.btnLoading = true;
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };
      const options = {
        url: window.baseURL + "/members-applications",
        method: "POST",
        data: {
          base64Image: this.row.base64Image,
          first_name: this.row.first_name,
          middle_name: this.row.middle_name,
          last_name: this.row.last_name,
          full_name: this.row.full_name,
          nationality: this.row.nationality,
          residential_address: this.row.residential_address,
          telephone_no: this.row.telephone_no,
          email_Address: this.row.email_address,
          video_url: this.row.video_url,
        },
      };
      axios(options)
        .then(() => {
          this.btnLoading = false;
          this.errors = false;
          this.success = "Application Completed Successfully.";
        })
        .catch((err) => {
          this.btnLoading = false;
          this.success = false;
          this.errors = err.response ? err.response.data.message : "" + err;
        })
        .finally(() => {});
    },

    // fetchCountries
    fetchCountries() {
      this.countryLoading = true;
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };
      const options = {
        url: window.baseURL + "/countries",
        method: "GET",
        data: {},
        params: {},
      };
      axios(options)
        .then((res) => {
          // this.countryLoading = false;
          this.countries = res.data.rows.countries;
        })
        .catch(() => {})
        .finally(() => {});
    },

    // Upload Featured image
    onImageChange(e) {
      const file = e.target.files[0];
      this.row.preview = URL.createObjectURL(file);
      this.createBase64Image(file);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.base64Image = e.target.result;
      };
    },
    // items add more
    addMoreQuals() {
      this.quals.key++;
    },
    addMoreLangs() {
      this.langsData.key++;
    },
    addMoreCours() {
      this.cours.key++;
    },
  },
  created() {
    this.fetchCountries();
    // Check Auth
    if (!localStorage.getItem("access_token")) {
      this.$router.push({ name: "Login" });
    }
    this.pTitle = this.$route.query.pTitle;
  },
};
</script>
