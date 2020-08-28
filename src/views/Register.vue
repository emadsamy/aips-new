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
                  <div v-if="errors.length" class="alert alert-danger text-left">
                      {{ errors }}
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.first_name" type="text" class="form-control" name="first_name" placeholder="First Name"  required />
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.last_name" type="text" class="form-control" name="last_name" placeholder="Last Name " required  />
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.email" type="email" class="form-control" name="email" placeholder="Primary Email" required  />
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.password" type="password" class="form-control" name="password" placeholder="Password" required  />
                  </div>
                  <div class="input-group d-flex justify-content-between mb-4">
                      <label class="cc-label">Country</label>
                      <select v-model="user.country" class="select-country" name="country">
                          <option selected>United States</option>
                          <option v-for="(country, index) in countries"  :key="index" :value="country.value">{{ country.value }}</option>
                      </select>
                  </div>
                  <button :disabled="btnLoading" @click="register()" class="btn main-btn-backdrop" type="button" name="button">
                      <img src="../assets/loader.svg" class="sm-loader" alt="" v-if="btnLoading" />
                      <span v-else>Create an Account</span>
                  </button>
              </div>
              <div class="dont-have-text">
                  Already have a AIPS email and password? <router-link to="/login">Log in</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped src="../components/common/css/Auth.css">
.goto {
  font-weight: 600;
  text-decoration: underline;
}
</style>

<script>
import Search from '@/components/Search.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'Register',
  components: {
    Search,
    Navbar
  },
  data() {
    return {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        country: 'United States'
      },
      btnLoading: false,
      countries: [],
      errors: ''
    }
  },
  methods: {
    register: function () {
      this.btnLoading = true;
      const data = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          password: this.user.password,
          country: this.user.country,
      }
      axios.post(window.baseURL + '/auth/register', data)
          .then(res => {
              this.btnLoading = false;
              console.log(res);
              this.$router.push({ name: 'VerficationAccount' });
          })
          .catch(err => {
              this.btnLoading = false;
              let errors = err.response.data.message;
              this.errors = errors;
              console.log(errors);
          });
          // .finally(() => {});
      }
  },
  created() {
    // Get Countries
    axios.get(window.baseURL + '/countries')
      .then(res => {
        var data = res.data.rows.countries;
        console.log(data);
        this.countries = data;
      })
      .catch(err => {
        console.log(err);
      });

      // Check Auth
      if (localStorage.getItem('access_token')) {
        this.$router.push({ name: 'Home' });
      }
  }
}
</script>
