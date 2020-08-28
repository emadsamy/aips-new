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
              <div class="title">Log in</div>
              <div class="auth-box">
                  <div v-if="errors.length" class="alert alert-danger text-left">
                      {{ errors }}
                  </div>
                  <div class="input-group mb-4">
                      <input v-model="user.email" type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="input-group mb-5">
                      <input v-model="user.password" type="password" class="form-control" placeholder="Password" />
                  </div>
                  <button :disabled="btnLoading" @click="login()" class="btn main-btn-backdrop" type="button" name="button">
                      <img src="../assets/loader.svg" class="sm-loader" alt="" v-if="btnLoading" />
                      <span v-else>Login</span>
                  </button>
              </div>
              <div class="dont-have-text">
                  Don't have an account? <router-link to="/register">Create an Account</router-link>
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
  name: 'Login',
  components: {
    Search,
    Navbar
  },
  data() {
    return {
      auth: {
          access_token: ''
      },
      user: {
        email: '',
        password: '',
        keepMeAlive: false
      },
      btnLoading: false,
      errors: ''
    }
  },
  methods: {
    login(){
        this.btnLoading = true;
        // this.axios.defaults.headers.common = {
        //     'X-Requested-With': 'XMLHttpRequest', // security to prevent CSRF attacks
        // };
        // const options = {
        //     url: window.baseURL + '/auth/login',
        //     method: 'POST',
        //
        // }
        const data = {
            email: this.user.email,
            password: this.user.password,
            keepMeAlive: this.user.keepMeAlive
        }
        axios.post(window.baseURL + '/auth/login', data)
        .then(res => {
            this.btnLoading = false;
            this.user.password = '';
            console.log(res.data);
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('user_image', res.data.user.image);
            localStorage.setItem('user_name', res.data.user.first_name);
            localStorage.setItem('last_name', res.data.user.last_name);
            localStorage.setItem('country', res.data.user.country);
            localStorage.setItem('user_id', res.data.user.id);
            this.$router.push({ name: 'Home' });
        })
        .catch(err => {
            this.btnLoading = false;
            // this.row.password = '';
            console.log(err);

            // 401 Unauthorized
            // if(err.response && err.response.status == 401) {
            //     iziToast.error({
            //         icon: 'ti-na',
            //         title: 'Wow-wow,',
            //         message: err.response.data.error
            //     });
            //
            // } else {
            //     iziToast.error({
            //         icon: 'ti-na',
            //         title: 'Wow-wow,',
            //         message: 'Something went wrong '+err
            //     });
            // }

        });
    }
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>
