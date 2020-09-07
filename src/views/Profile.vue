<template>
  <div class="page-container">
      <!-- Navbar -->
      <Navbar />
      <!-- Navbar -->

      <!-- Content -->
      <div class="content">
          <div class="container-fluid">
            <div class="profile">
                <div class="row mb-4">
                    <div class="col-lg-3 col-md-4 pl-2">
                        <div class="profile-header">
                            <div class="user-head d-flex align-items-center">
                                <div class="avatar">
                                    <Avatar :title="data.first_name" :src="preview ? preview : data.avatar" />
                                    <div class="loading-overlay"  v-if="btnLoading">
                                        <img src="../assets/loader.svg" class="sm-loader" alt />
                                    </div>
                                    <div class="upload-avatar-profile">
                                        <span class="icon-camera change-avatar">
                                            <input name="avatar" type="file" accept="image/*" @change="onImageChange" />
                                        </span>
                                    </div>
                                </div>
                                <div class="username">
                                    <div class="fullname text-capitalize">
                                        {{ data.first_name }} {{ data.last_name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 pr-2">
                        <div class="profile-welcome-msg d-flex align-items-center">
                            <div class="hello">
                                Welcome,
                            </div>
                            <div class="user-name text-capitalize">
                                {{ data.first_name }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <div id="profileTabs" class="profile-links nav nav-tabs">
                            <a href="#myInfo" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content active">
                              <span class="profile-link-text">My Profile</span>
                              <span class="icon-edit icon"></span>
                            </a>
                            <a href="#myCertificate" data-toggle="tab" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">My Certificate</span>
                              <span class="icon-quality icon"></span>
                            </a>
                            <router-link to="/logout" class="d-flex justify-content-between align-items-center profile-link-content">
                              <span class="profile-link-text">Sign Out</span>
                              <span class="icon-logout icon"></span>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8">

                        <div class="profile-info">
                            <div class="profile-edit-head d-flex justify-content-between align-items-center">
                                <div id="tabTitle" class="title">
                                    My Profile
                                </div>
                                <button @click="switchProfileBtn()" class="profile-edit-action d-flex justify-content-between align-items-center">
                                    <div @click="updateUserData()" class="d-flex align-items-center" v-if="switchProfileSetting">
                                        <span class="edit-text">Save</span>
                                        <span class="icon-edit icon"></span>
                                    </div>
                                    <div class="d-flex align-items-center" v-else>
                                        <span class="edit-text">Edit</span>
                                        <span class="icon-edit icon"></span>
                                    </div>
                                </button>
                            </div>
                            <div class="profile-form tab-content">
                                <!-- Profile Data -->
                                <div id="myInfo" class="profile-data tab-pane active">
                                    <form v-if="!switchProfileSetting" action="index.html" method="post">
                                        <div class="form-group d-flex align-items-center">
                                            <label for="name" class="d-flex justify-content-between">First Name<span>:</span></label>
                                            <div class="user-data text-capitalize">
                                                {{ data.first_name }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="name" class="d-flex justify-content-between">Last Name<span>:</span></label>
                                            <div class="user-data text-capitalize">
                                                {{ data.last_name }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="phone" class="d-flex justify-content-between">Tel<span>:</span></label>
                                            <div class="user-data user-data-number">
                                                {{ data.mobile }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="company" class="d-flex justify-content-between">Company <span>:</span></label>
                                            <div class="user-data">
                                                {{ data.company }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="job" class="d-flex justify-content-between">Country <span>:</span></label>
                                            <div class="user-data">
                                                {{ data.country }}
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="website" class="d-flex justify-content-between">Website <span>:</span></label>
                                            <div class="user-data">
                                                {{ data.website }}
                                            </div>
                                        </div>
                                    </form>

                                    <form v-if="switchProfileSetting" action="index.html" method="post">
                                        <div class="form-group d-flex align-items-center">
                                            <label for="name" class="d-flex justify-content-between">First Name<span>:</span></label>
                                            <input v-model="first_name" type="text" id="first_name" />
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="name" class="d-flex justify-content-between">Last Name<span>:</span></label>
                                            <input v-model="last_name" type="text" id="last_name" />
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="phone" class="d-flex justify-content-between">Tel<span>:</span></label>
                                            <input v-model="mobile" type="text" id="mobile" />
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="company" class="d-flex justify-content-between">Company <span>:</span></label>
                                            <input v-model="company" type="text" id="company" />
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="job" class="d-flex justify-content-between">Country<span>:</span></label>
                                            <!-- <input v-model="country" type="text" id="country" /> -->
                                            <div class="choose-country">
                                              <select v-model="country" class="select-country" name="country">
                                                <option
                                                  v-for="(country, index) in countries"
                                                  :value="country.value"
                                                >{{ country.value }}</option>
                                              </select>
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center">
                                            <label for="website" class="d-flex justify-content-between">Website<span>:</span></label>
                                            <input v-model="website" type="text" id="website" />
                                        </div>
                                    </form>
                                </div>

                                <!-- Profile Previous -->
                                <div id="myCertificate" class="profile-previous tab-pane">
                                    <div class="certificatesOrders">
                                        <div class="co-row" v-for="(certificate, index) in certificates"  :key="index">
                                            <div class="co-info">
                                                <div class="co-title">
                                                    {{ certificate.title }}
                                                </div>
                                                <div class="co-code">
                                                    {{ certificate.code }}
                                                </div>
                                            </div>
                                            <div class="co-view">
                                                <img :src="certificate.image" alt="" class="img-fluid" />
                                            </div>
                                        </div>
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

<style scoped src="../components/common/css/Profile.css">

</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Avatar from '../components/Avatar.vue';
import axios from 'axios';

export default {
  name: 'Profile',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Avatar: Avatar
  },
  data() {
    return {
      data: [],
      access_token: '',
      first_name: "",
      last_name: "",
      mobile: "",
      company: "",
      country: "",
      website: "",
      avatar: "",
      avatar: "",
      base64Image: "",
      preview: "",
      btnLoading: false,
      certificates: [
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Diploma.png')
        },
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Achievement.png')
        },
        {
          title: 'Professional Certificate in Human Resources',
          code: 'Dip/USA/108TMR99830',
          image: require('../assets/img/Certificate-of-Diploma.png')
        }
      ],
      switchProfileSetting: false
    }
  },
  created() {
    // this.firstName = localStorage.getItem('user_name');
    // this.lastName = localStorage.getItem('last_name');
    // this.country = localStorage.getItem('country');
    this.accessToken = localStorage.getItem('access_token');
    // fetch user Data
    this.fetchUserData();

    // fetch countries
    this.fetchCountries();

    // Check Auth
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Login' });
    }
  },
  mounted() {

    $(function(){
        var hash = window.location.hash;
        hash && $('.profile-links a[href="' + hash + '"]').tab('show');
        if (hash) {
          var titleHash = $('a[href="' + hash + '"]').find('.profile-link-text').text();
          $("#tabTitle").text(titleHash);
        }

        $('.nav-tabs a').click(function (e) {
            var title = $(this).find('.profile-link-text').text();
            $(this).tab('show');
            $("#tabTitle").text(title);
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });
  },
  methods: {
    switchProfileBtn: function () {
      this.switchProfileSetting = !this.switchProfileSetting;
    },
    fetchUserData() {
      const options = {
          url: window.baseURL + "/myProfile",
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
      };
      axios(options)
        .then((res) => {
          const data = res.data.row;
          this.first_name = data.first_name;
          this.last_name = data.last_name;
          this.mobile = data.mobile;
          this.company = data.company;
          this.country = data.country;
          this.website = data.website;
          this.avatar = data.avatar;
          this.data = data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateUserData() {
      const options = {
          url: window.baseURL + "/myProfile",
          method: 'POST',
          data: {
            first_name: this.first_name,
            last_name: this.last_name,
            mobile: this.mobile,
            company: this.company,
            country: this.country,
            website: this.website,
          },
          headers: {
            'Authorization': 'Bearer ' + this.accessToken
          }
      };
      axios(options)
        .then((res) => {
          const data = res.data.row;
          console.log(data);
          this.fetchUserData();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onImageChange(e) {
      this.btnLoading = true;
      const file = e.target.files[0];
      this.preview = URL.createObjectURL(file);
      this.createBase64Image(file);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        this.base64Image = e.target.result;
        this.apply();
      };
    },

    apply() {
      this.btnLoading = true;
      // this.apply();
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };

      const options = {
        url: window.baseURL + "/myProfile",
        method: "POST",
        data: {
          avatar: this.base64Image,
        },
        headers: {
          'Authorization': 'Bearer ' + this.accessToken
        }
      }

      axios(options)
        .then((res) => {
          this.btnLoading = false;
          this.errors = false;
          this.success = "Application Completed Successfully.";
          console.log("uploaded");
          console.log(res);
          this.fetchUserData();
        })
        .catch((err) => {
          this.btnLoading = false;
          this.success = false;
          this.errors = err.response ? err.response.data.message : "" + err;
        })
        .finally(() => {});
    },

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
          this.countryLoading = false;
          this.countries = res.data.rows.countries;
        })
        .catch(() => {})
        .finally(() => {});
    },
  },
  
}
</script>
