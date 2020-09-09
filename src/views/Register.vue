<template>
  <div class="page-container">
    <div class="auth-big-logo">
      <div class="container-fluid">
        <router-link to="/">
          <img src="../assets/big-logo.svg" alt="Big Logo" class="img-fluid" />
        </router-link>
      </div>
    </div>
    <div class="navbar-auth-sm">
      <Navbar />
    </div>
    <div class="auth center-vertically">
      <div class="auth-content">
        <div class="title">Create an Account</div>
        <div class="auth-box">
          <div v-if="errors.length" class="alert alert-danger text-left">{{ errors }}</div>
          <div class="input-group mb-4">
            <input
              v-model="user.first_name"
              type="text"
              class="form-control"
              name="first_name"
              placeholder="First Name"
              required
            />
          </div>
          <div class="input-group mb-4">
            <input
              v-model="user.last_name"
              type="text"
              class="form-control"
              name="last_name"
              placeholder="Last Name "
              required
            />
          </div>
          <div class="input-group mb-4">
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              name="email"
              placeholder="Primary Email"
              required
            />
          </div>
          <div class="input-group mb-4">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required
              autocomplete="off"
            />
          </div>
          <div class="input-group d-flex justify-content-between mb-4">
            <label class="cc-label">Country</label>
            <select v-model="user.country" class="select-country" name="country">
              <option
                v-for="(country, index) in countries"
                :value="country.value"
              >{{ country.value }}</option>
            </select>
          </div>
          <button class="btn main-btn-backdrop" type="button" @click="register">
            <img src="../assets/loader.svg" class="sm-loader" alt v-if="btnLoading" />
            <span v-else>Create an Account</span>
          </button>
        </div>
        <div class="dont-have-text">
          Already have a AIPS email and password?
          <router-link to="/login">Log in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../components/common/css/Auth.css"></style>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Register",
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        country: "United States",
      },
      btnLoading: false,
      countryLoading: true,
      countries: [],
      errors: "",
    };
  },
  mounted() {},
  created() {
    this.fetchCountries();
  },
  methods: {
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
          this.countryLoading = false;
          this.countries = res.data.rows.countries;
        })
        .catch(() => {})
        .finally(() => {});
    },

    register() {
      this.btnLoading = true;
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest", // security to prevent CSRF attacks
      };
      const options = {
        url: window.baseURL + "/auth/register",
        method: "POST",
        data: {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          password: this.user.password,
          country: this.user.country,
        },
      };
      axios(options)
        .then(() => {
          this.btnLoading = false;
          this.$router.push({ name: "VerficationAccount" });
        })
        .catch((err) => {
          this.btnLoading = false;
          let errors = err.response ? err.response.data.message : "" + err;
          this.errors = errors;
        })
        .finally(() => {});
    },
  },
};
</script>
