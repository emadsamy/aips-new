<template>
  <div class="page-container">
    <div class="certificate-nav">
      <div class="container-fluid">
        <div class="certificate-bar">
          <router-link to="/">
            <img src="../assets/big-logo.svg" alt="Big Logo" class="img-fluid" />
          </router-link>

          <router-link to="/profile" class="dropdown">
            <!-- <img src="../assets/user.png" class="avatar img-fluid" alt="Avatar" /> -->
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
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="serial"
              placeholder="Certificate Serial No. Here DIP/USA/108TMR99830"
              value
            />
          </div>
          <router-link to="/" class="main-btn-backdrop">Verify</router-link>
          <div class="verify-links">
            <div class="verfication text">Verify other certificates</div>
            <div class="links">
              <router-link to="/my-certificate">Professional Certificate</router-link>
              <router-link to="/my-certificate">Professional Diploma</router-link>
            </div>
          </div>
        </div>
        <div class="main-certificate-view">
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
  background-image: url("../assets/img/Certificate-of-Achievement.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
</style>

<script>
import Search from "@/components/Search.vue";
import Avatar from "@/components/Avatar.vue";
import Navbar from "@/components/Navbar.vue";

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
    };
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
