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
              <div class="title">Verify your email</div>
              <div class="auth-box">
                  <div v-if="errors.length" class="alert alert-danger text-left">
                      {{ errors }}
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.code" type="email" class="form-control" name="" placeholder="Your Code" />
                  </div>
                  <button :disabled="btnLoading" @click="sendCode()" class="btn main-btn-backdrop" type="button" name="button">
                      <img src="../assets/loader.svg" class="sm-loader" alt="" v-if="btnLoading" />
                      <span v-else>Send code to verify</span>
                  </button>
              </div>
              <div class="dont-have-text">
                  Have an account? <router-link to="/login">Log in</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped src="../components/common/css/Auth.css">

</style>

<script>
import Search from '@/components/Search.vue';
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  name: 'Verifcation',
  components: {
    Search,
    Navbar
  },
  data() {
    return {
      user: {
        code: ''
      },
      btnLoading: false,
      errors: ''
    }
  },
  methods: {
    sendCode: function () {
      this.btnLoading = true;
      const data = {
          verification: this.user.code
      }
      axios.post(window.baseURL + '/auth/verification', data)
          .then(res => {
              this.btnLoading = false;
              console.log(res);
              this.$router.push({ name: 'Login' });
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
    // Check Auth
    if (localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>
