<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />
    <!-- Navbar -->

    <!-- Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="online-app-header">
          <div class="online-app-details" :style="{ backgroundColor: `${applicationData.bgColor} !important` }">
            <div class="align-center">
              <div class="title goldColor">{{ applicationData.bgTitle }}</div>
              <div class="description-type goldColor">{{ applicationData.bgSubTitle }} </div>
            </div>
          </div>
          <div
            class="online-app-view"
            :style="{
              backgroundImage: `url(${applicationData.image})`,
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
                  <input type="file" name="image" @change="onImageChange" />
                  <span class="icon-drag"></span>
                  <div class="upload-text">Upload your photo</div>
                </div>
              </div>
              <div class="online-app-data">
                <div class="alert-text-checkbox mb-4">
                  <div class="alert-text mb-2" v-html="applicationData.body1"></div>
                  <!-- <div class="alert-text mb-2">
                    CONFIDENTIALITY OF INFORMATION: AMI will hold this
                    information in its database. This information may be
                    accessed, reviewed and used for administrative purposes
                    only.
                  </div> -->
                  <div class="alert-checkbox">
                    <input id="agreeNote" type="checkbox" name="Agree" value="1" />
                    <label for="agreeNote">I Agree</label>
                  </div>
                </div>

                <div class="small-text mb-5" v-html="applicationData.body2"></div>

                <!-- <div class="small-text mb-5">
                  Tips for completing this form:
                  <br />
                  <br />1- Hand-write your information cleary in blue or black
                  ink onto a printed form and submit it by postal mail.
                  <br />2-
                  Type your information into the PDF. If you have PDF-editing
                  software like Adobe© Acrobat© or Foxit© Reader, you can save
                  your data. Otherwise, you will only be able to type your
                  information, then print out the form and send it to AMI.
                </div> -->

                <div class="small-title mb-3">Personal Information</div>

                <div class="form-inputs">
                  <div class="form-group" :class="{ 'red-border': firstName }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="row.first_name"
                    />
                  </div>

                  <div class="form-group d-flex justify-content-between">
                    <label class="cc-label">Country</label>
                    <select v-model="nationality" class="select-country" name="country">
                      <option
                        v-for="(country, index) in countries"
                        :value="country.value"
                        :key="index"
                      >{{ country.value }}</option>
                    </select>
                  </div>

                  <div class="form-group" :class="{ 'red-border': middleName }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Middle Name"
                      v-model="row.middle_name"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': addressValidation }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Residential Address"
                      v-model="row.residential_address"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': lastName }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      v-model="row.last_name"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': telValidation }">
                    <!-- <input
                      type="text"
                      class="form-control"
                      placeholder="Telephone No"
                      v-model="row.telephone_no"
                      required
                    /> -->
                    <vue-tel-input defaultCountry="US" v-model="row.telephone_no"></vue-tel-input>
                  </div>

                  <!-- <div class="form-group">
                    <vue-tel-input v-model="phone"></vue-tel-input>
                  </div>-->

                  <div class="form-group" :class="{ 'red-border': fullName }">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      v-model="row.full_name"
                      required
                    />
                  </div>

                  <div class="form-group" :class="{ 'red-border': emailValidation }">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="E-mail Address"
                      v-model="row.email_address"
                      required
                    />
                  </div>
                </div>

                <div class="form-note mb-5">As you want it to appear on your membership certificate</div>

                <div class="online-form-upload mb-40">
                  <div class="small-title mb-3">Documents</div>

                  <div class="form-inputs">
                    <div class="form-group form-group-upload">
                      <span class="text">ID or passport</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" name="passport_file" class="form-control" @change="onPassportChange" />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Passport size photo!</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" name="passport_size_file" class="form-control" @change="onPassportSizeChange" />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Current occupation (documented)</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" name="occupation_file" class="form-control" @change="onOccupationChange" />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Detailed resume</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" name="detailed_resume" class="form-control"  @change="onDetailedChange" />
                    </div>

                    <div class="form-group form-group-upload">
                      <span class="text">Proof of prior work experience (via HR letters)</span>
                      <span class="icon-upload ic-upload"></span>
                      <input type="file" name="hr_letter_file" class="form-control" @change="onHrLetteredChange" />
                    </div>
                  </div>
                </div>


                <!-- Academic Qualifications  -->
                <div class="online-form-addition mb-40">
                  <div class="small-title with-underline mb-4">Academic Qualifications</div>
                  <div class="form-inputs form-inputs-multiples">
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in row.qualifications_key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'quals_' + i"
                      >
                        <button
                            v-if="i != 1"
                            type="button"
                            class="btn removeBtn"
                            @click="removeQualifications(i)">
                            <span>&times;</span>
                        </button>

                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition">Educational and Qualification</label>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                v-model="row.qualifications_name[i]"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="form-addition form-addition-multiple">
                          <div class="form-addition-content">
                            <label class="label-addition">University / College</label>
                            <div class="form-group">
                              <input type="text" class="form-control"
                                  v-model="row.qualifications_univeristy[i]" />
                            </div>
                          </div>

                          <div class="form-addition-content">
                            <label class="label-addition">GPA / Grade</label>
                            <div class="form-group">
                              <input type="text" class="form-control"
                                v-model="row.qualifications_grade[i]" />
                            </div>
                          </div>

                          <div class="form-addition-content">
                            <label class="label-addition">Year</label>
                            <div class="form-group form-select">
                              <select class="selectbox" v-model="row.qualifications_year[i]">
                                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button @click="addMoreQuals()" class="add-btn" type="button" name="button">
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>




                    <!-- Courses -->
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in row.courses_key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'cours_' + i"
                      >
                        <button
                            v-if="i != 1"
                            type="button"
                            class="btn removeBtn"
                            @click="removeCourses(i)">
                            <span>&times;</span>
                        </button>
                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition">Courses Attended</label>
                            <div class="form-group">
                              <input type="text" class="form-control" v-model="row.courses_name[i]" />
                            </div>
                          </div>
                        </div>

                        <div class="form-addition form-addition-multiple">
                          <div class="form-addition-content">
                            <label class="label-addition">Institute / Training center</label>
                            <div class="form-group">
                              <input type="text" class="form-control" v-model="row.courses_institue[i]" />
                            </div>
                          </div>

                          <div class="form-addition-content form-addition-du">
                            <label class="label-addition">Duration</label>
                            <div class="form-group">
                              <input type="text" class="form-control" v-model="row.courses_duration[i]" />
                            </div>
                          </div>

                          <div class="form-addition-content form-addition-date mt-3">
                              <div class="date-from-to">
                                <label class="label-addition">Date From</label>
                                <div class="form-group date-start-end">
                                  <input type="date" name="" v-model="row.courses_dateFrom[i]">
                                  <span class="icon-calendar ca-date"></span>
                                </div>
                              </div>

                              <div class="date-from-to">
                                <label class="label-addition">Date To</label>
                                <div class="form-group date-start-end">
                                  <input type="date" name="" v-model="row.courses_dateTo[i]">
                                  <span class="icon-calendar ca-date"></span>
                                </div>
                              </div>
                          </div>

                          <!-- <div
                            class="form-addition-content form-addition-date mt-3"
                          >
                            <label class="label-addition">Date</label>
                            <div class="form-group date-start-end">
                              <input type="text" placeholder="Choose a" class="form-control start-date" data-toggle="datepicker">
                              <input type="text" placeholder="Choose a" class="form-control end-date" data-toggle="datepicker">
                              <DatePicker></DatePicker>
                              <span class="icon-calendar ca-date"></span>
                            </div>
                          </div>-->
                        </div>
                      </div>
                      <button @click="addMoreCours()" class="add-btn" type="button" name="button">
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>

                    <!-- Languages -->
                    <div class="fm-gro">
                      <div
                        class="form-group-row"
                        v-for="i in row.languages_key"
                        :key="i"
                        :class="i == 0 ? 'hidden' : ''"
                        :id="'langs_' + i"
                      >
                        <button
                            v-if="i != 1"
                            type="button"
                            class="btn removeBtn"
                            @click="removeLanguages(i)">
                            <span>&times;</span>
                        </button>

                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition">Languages</label>
                            <div class="form-group d-flex justify-content-between">
                              <select
                                class="select-country select-lang"
                                name="country"
                                v-model="row.languages_name[i]"
                              >
                                <option
                                  v-for="(lang, index) in langs"
                                  :value="lang"
                                  :key="index"
                                >{{ lang }}</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="form-addition">
                          <div class="form-addition-content">
                            <label class="label-addition">Level of Proficiency</label>
                            <div class="form-group form-select">
                              <select class="selectbox" v-model="row.languages_level[i]">
                                <option
                                  v-for="(lan, index) in langsLevels"
                                  :value="lan"
                                  :key="index"
                                >{{ lan }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button @click="addMoreLangs()" class="add-btn" type="button" name="button">
                        <span class="icon-plus ic-plus"></span> Add
                      </button>
                    </div>
                  </div>
                </div>

                <div class="bg-form-notes mb-4" v-html="applicationData.body3"></div>

                <!-- <div class="bg-form-notes mb-4">
                  <div class="small-title">Certification Requirements</div>
                  <div class="small-text">
                    Instructor must submit the U.S Certified Instructor
                    certificate requirements with application.
                  </div>
                </div> -->

                <!-- <div class="bg-form-notes mb-5" v-html="applicationData.body4"></div> -->
                <!-- <div class="bg-form-notes mb-5">
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
                </div> -->

                <div class="bg-form-notes mb-5">
                  <!-- <div class="small-title">Training Techniques</div> -->
                  <div class="add-link">
                    <!-- <div class="small-text">
                      Submit a 3-minute video introducing yourself and
                      showcasing your training skills. The first minute of the
                      video should give the audience an idea of who you are and
                      your training style.
                    </div> -->
                    <div v-html="applicationData.body4">

                    </div>
                    <div class="video-link">
                      <span class="icon-url"></span>
                      <input type="text" v-model="row.video_url" placeholder="Video link here" />
                    </div>
                  </div>
                </div>

                <div class="bg-form-notes mb-5 pb-3" v-html="applicationData.body5"></div>
                <!-- <div class="bg-form-notes mb-5 pb-3">
                  <div class="small-title">Training Strategy</div>
                  <div class="small-text">
                    Create a case study that will give us an understanding of
                    your training strategy, including planning, implementation,
                    evaluation, and sample learning materials.
                  </div>
                </div> -->

                <div class="alert-text-checkbox mb-5">
                  <div class="alert-text mb-2" v-html="applicationData.body6"></div>
                  <!-- <div class="alert-text mb-2">
                    I CONFIRM THAT THE INFORMATION GIVEN ABOVE IS TRUE AND
                    CORRECT.
                    <br />
                    <br />I AGREE THAT I AM NOT ALLOWED TO USE AIHC LOGO OR
                    QUALITY MARK ON THE TRAINING CENTER CERTIFICATES WITHOUT
                    AIHC APPROVAL.
                    <br />Instructor is required to sign this
                    column. Any application for U.S Certified Instructor
                    certificate without trainer’s own signature will be
                    rejected.
                  </div> -->
                  <div class="alert-checkbox">
                    <input id="agreeNote2" type="checkbox" name="Agree" value="1" />
                    <label for="agreeNote2">I Agree</label>
                  </div>
                </div>

                <button
                  class="btn main-btn-backdrop"
                  type="button"
                  @click="apply"
                  style="padding: 10px 20px; width: auto"
                  id="applyNow"
                  :disabled="btnLoading"
                >
                  <img src="../assets/loader.svg" class="sm-loader" alt v-if="btnLoading" />
                  <span v-else>Apply Now</span>
                </button>
                <div v-if="errors" class="alert alert-danger mt-2 text-left">{{ errors }}</div>

                <div v-if="success" class="alert alert-success mt-2 text-left">{{ success }}</div>
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
import { VueTelInput } from 'vue-tel-input'
import DatePicker from "../components/DatePicker.vue";

import axios from "axios";

export default {
  name: "MembershipApplication",
  components: {
    Navbar,
    Footer,
    VueTelInput,
    DatePicker,
    // Loop,
  },
  data() {
    return {
      row: {
        preview: "",
        base64Image: "",
        passport_file: "",
        passport_size_file: "",
        occupation_file: "",
        detailed_resume: "",
        hr_letter_file: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        full_name: "",
        residential_address: "",
        telephone_no: "",
        email_address: "",
        video_url: "",
      },
      nationality: "United States",
      errors: false,
      success: false,
      btnLoading: false,
      // country: "United States",
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
      row: {
        // qualifications
        qualifications: [],
        qualifications_key: 1,
        qualifications_name: [],
        qualifications_univeristy: [],
        qualifications_grade: [],
        qualifications_year: [],

        // courses
        courses: [],
        courses_key: 1,
        courses_name: [],
        courses_institue: [],
        courses_duration: [],
        courses_dateFrom: [],
        courses_dateTo: [],

        // languages
        languages: [],
        languages_key: 1,
        languages_name: [],
        languages_level: [],
      },
      quals: {
        data: [],
        key: 1,
        educational: [],
        univeristy: [],
        grade: [],
        year: [],
      },
      langsData: {
        key: 1,
        language: [],
        level: [],
      },
      cours: {
        key: 1,
        program: [],
        institute: [],
        duration: [],
        date_from: [],
        date_to: [],
      },
      firstName: false,
      middleName: false,
      lastName: false,
      rAddress: false,
      tel: false,
      fullName: false,
      emailValidation: false,
      telValidation: false,
      addressValidation: false,

      applicationData: []
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
    apply(even) {
      if (this.row.first_name == '') {
        this.firstName = true;
        even.preventDefault();
      } else {
        this.firstName = false;
      }

      if (this.row.middle_name == '') {
        this.middleName = true;
        even.preventDefault();
      } else {
        this.middleName = false;
      }

      if (this.row.last_name == '') {
        this.lastName = true;
        even.preventDefault();
      } else {
        this.lastName = false;
      }

      if (this.row.full_name == '') {
        this.fullName = true;
        even.preventDefault();
      } else {
        this.fullName = false;
      }

      if (this.row.email_address == '') {
        this.emailValidation = true;
        even.preventDefault();
      } else {
        this.emailValidation = false;
      }

      if (this.row.telephone_no == '') {
        this.telValidation = true;
        even.preventDefault();
      } else {
        this.telValidation = false;
      }

      if (this.row.residential_address == '') {
        this.addressValidation = true;
        even.preventDefault();
      } else {
        this.addressValidation = false;
      }

      this.btnLoading = true;
      this.success = false;
      this.error = false;
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };

      for (let i = 1; i < this.row.qualifications_name.length; i++) {
        this.row.qualifications[i] = {
          "educational": this.row.qualifications_name[i],
          "univeristy": this.row.qualifications_univeristy[i],
          "grade": this.row.qualifications_grade[i],
          "year": this.row.qualifications_year[i]
        };
      }

      for (let i = 1; i < this.row.courses_name.length; i++) {
        this.row.courses[i] = {
          "program": this.row.courses_name[i],
          "institute": this.row.courses_institue[i],
          "duration": this.row.courses_duration[i],
          "date_from": this.row.courses_dateFrom[i],
          "date_to": this.row.courses_dateTo[i]
        };
      }

      for (let i = 1; i < this.row.languages_name.length; i++) {
        this.row.languages[i] = {
          "language": this.row.languages_name[i],
          "level": this.row.languages_level[i]
        };
      }

      console.log(this.row.courses);
      console.log(this.row.languages);
      console.log(this.row.qualifications);

      const options = {
        url: window.baseURL + "/members-applications",
        method: "POST",
        data: {
          image: this.row.base64Image,
          passport_file: this.row.passport_file,
          passport_size_file: this.row.passport_size_file,
          occupation_file: this.row.occupation_file,
          detailed_resume: this.row.detailed_resume,
          hr_letter_file: this.row.hr_letter_file,

          first_name: this.row.first_name,
          middle_name: this.row.middle_name,
          last_name: this.row.last_name,
          full_name: this.row.full_name,
          nationality: this.nationality,
          residential_address: this.row.residential_address,
          telephone_no: this.row.telephone_no,
          email_Address: this.row.email_address,
          video_url: this.row.video_url,

          //
          qualifcations: this.row.qualifications,
          languages: this.row.languages,
          courses: this.row.courses,
        },
      };
      axios(options)
        .then((res) => {
          this.btnLoading = false;
          this.errors = false;
          this.success = "Application Completed Successfully.";
          this.row.base64Image = "";
          this.row.passport_file = "";
          this.row.passport_size_file = "";
          this.row.occupation_file = "";
          this.row.detailed_resume = "";
          this.row.hr_letter_file = "";
          this.row.first_name = "";
          this.row.middle_name = "";
          this.row.last_name = "";
          this.row.full_name = "";
          this.nationality = "";
          this.row.residential_address = "";
          this.row.telephone_no = "";
          this.row.email_Address = "";
          this.row.video_url = "";
          this.row.languages = "";
          this.row.courses = "";
          console.log(res);
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

    // fetchCountries
    fetchApplicationData() {
      const url = window.baseURL + "/members-applications";
      axios.get(url)
        .then((res) => {
          // this.countryLoading = false;
          const data = res.data.row;
          this.applicationData = data;
          console.log(data);
        })
        .catch(() => {})
        .finally(() => {});
    },

    // Upload Avatar image
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

    // Upload Passport image
    onPassportChange(e) {
      const file = e.target.files[0];
      // this.row.preview = URL.createObjectURL(file);
      this.createBase64Passport(file);
    },
    createBase64Passport(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.passport_file = e.target.result;
      };
    },

    // Upload Passport Size image
    onPassportSizeChange(e) {
      const file = e.target.files[0];
      // this.row.preview = URL.createObjectURL(file);
      this.createBase64PassportSize(file);
    },
    createBase64PassportSize(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.passport_size_file = e.target.result;
      };
    },

    // Upload Occupation File image
    onOccupationChange(e) {
      const file = e.target.files[0];
      // this.row.preview = URL.createObjectURL(file);
      this.createBase64Occupation(file);
    },
    createBase64Occupation(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.occupation_file = e.target.result;
      };
    },

    // Upload Detailed Resume image
    onDetailedChange(e) {
      const file = e.target.files[0];
      // this.row.preview = URL.createObjectURL(file);
      this.createBase64Detailed(file);
    },
    createBase64Detailed(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.detailed_resume = e.target.result;
      };
    },

    // Upload Hr Letter File image
    onHrLetteredChange(e) {
      const file = e.target.files[0];
      // this.row.preview = URL.createObjectURL(file);
      this.createBase64HrLetter(file);
    },
    createBase64HrLetter(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.row.hr_letter_file = e.target.result;
      };
    },

    // items add more
    addMoreQuals() {
      this.row.qualifications_key++;
    },
    addMoreLangs() {
      this.row.languages_key++;
    },
    addMoreCours() {
      this.row.courses_key++;
    },

    removeQualifications(i) {
        document.querySelector('#quals_'+i).remove();
        // this.row.price_names[i] = '';
    },
    removeCourses(i) {
        document.querySelector('#cours_'+i).remove();
        // this.row.price_names[i] = '';
    },
    removeLanguages(i) {
        document.querySelector('#langs_'+i).remove();
        // this.row.price_names[i] = '';
    },
  },
  created() {
    this.fetchCountries();
    this.fetchApplicationData()();
    // Check Auth
    if (!localStorage.getItem("access_token")) {
      this.$router.push({ name: "Login" });
    }
    this.pTitle = this.$route.query.pTitle;
  },
};
</script>
