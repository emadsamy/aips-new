<template>
  <div class="page-container">
    <div class="certificate-nav">
      <div class="container-fluid">
        <div class="certificate-bar">
          <router-link to="/">
            <img src="../assets/big-logo.svg" alt="Big Logo" class="img-fluid" />
          </router-link>

          <router-link to="/profile" class="dropdown">
            <Avatar />
            <div class="title">{{ username }}</div>
          </router-link>
        </div>
      </div>
    </div>

    <Navbar :certificatePage="true" />

    <div class="main-certificate-container container-fluid">
      <div class="main-certificate">
        <div class="main-certificate-detials">
          <div class="verfication">Verification</div>
          <div class="bg-title">My Certificate</div>
          <div v-if="errors" class="alert alert-danger text-left">{{ errors }}</div>
          <div v-if="success" class="alert alert-success text-left">{{ success }}</div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="serial"
              placeholder="Certificate Serial No. Here DIP/USA/108TMR99830"
              v-model="keyword"
            />
          </div>
          <button
            :disabled="btnLoading"
            @click="sendKeyword()"
            class="verify-btn main-btn-backdrop"
          >
            <img v-if="btnLoading" src="../assets/loader.svg" class="sm-loader" alt />
            <span v-else>Verify</span>
          </button>
          <div class="verify-links">
            <div class="verfication text">Verify other certificates</div>
            <div class="links">
              <router-link to="/my-certificate">Professional Certificate</router-link>
              <router-link to="/my-certificate">Professional Diploma</router-link>
            </div>
          </div>
        </div>
        <div
          class="main-certificate-view"
          :style="{ backgroundImage: `url(` + require('../assets/img/Certificate-of-Achievement.png') + `)` }"
        >
          <!-- <img src="../assets/img/Certificate-of-Achievement.png" class="img-fluid" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../components/common/css/MainCertificate.css">
</style>

<style scoped>
.dropdown img {
  width: 50px;
  height: 50px;
}
.main-certificate-view {
  /* background-image: url("../assets/img/Certificate-of-Achievement.png"); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
</style>

<script>
import Search from "@/components/Search.vue";
import Avatar from "@/components/Avatar.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "MainCertificate",
  components: {
    Search,
    Avatar,
    Navbar,
  },
  data() {
    return {
      username: "",
      keyword: "",
      errors: false,
      success: false,
      btnLoading: false,
    };
  },
  methods: {
    sendKeyword: function () {
      this.btnLoading = true;
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };
      const options = {
        url: window.baseURL + "/popularSearch/certificate",
        method: "POST",
        data: {
          keyword: this.keyword,
        },
      };
      axios(options)
        .then((res) => {
          this.btnLoading = false;
          this.errors = false;
          this.success = "Success Verify.";
          console.log(res);
        })
        .catch((err) => {
          this.btnLoading = false;
          this.success = false;
          this.errors = err.response ? err.response.data.message : "" + err;
        })
        .finally(() => {});
    },
  },
  created() {
    // Check Auth
    if (!localStorage.getItem("access_token")) {
      this.$router.push({ name: "Login" });
    }
    this.username = localStorage.getItem("user_name");
  },
};
</script>
