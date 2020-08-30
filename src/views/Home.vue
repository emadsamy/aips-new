<template>
  <div class="page-container page-multi-columns">
      <!-- Sidebar -->
      <div class="multi-sidebar">
          <div class="sidebar-top">
            <div class="big-logo-box mb-5">
                <a href="#" class="big-logo">
                    <img src="../assets/big-logo.svg" alt="Big Logo" />
                </a>
            </div>
            <div class="sidebar-link">
                <router-link to="/popular-search" class="link active">Popular Searches</router-link>
            </div>
            <div class="sidebar-link" v-for="(link, index) in homeSidebar"  :key="index">
                <router-link :to="'/' + link.slug" class="link">
                  {{ link.title }}
                  <div v-if="link.slug == 'my-certificate'">
                    <small>You can view and print your certificate</small>
                  </div>
                </router-link>
            </div>
          </div>
          <div class="sidebar-bottom">
              <div class="footer-copyright">
                  <div>American  Institute of Professional Studies </div>
                  <div>2021 All Rights Reserved  © AIPS</div>
              </div>
          </div>
      </div>
      <!-- Sidebar -->

      <!-- Content -->
      <div class="multi-columns">
          <!-- Navbar -->
          <!-- <div class="nav">
            <div class="apis-navbar">
                <div class="nav-links">
                  <router-link to="/accreditation" class="nav-link">Accreditation</router-link>
                  <router-link to="/programs" class="nav-link">Programs</router-link>
                  <router-link to="/membership" class="nav-link">Membership</router-link>
                  <router-link to="/about" class="nav-link">About</router-link>
                  <router-link to="/contact" class="nav-link">Contact us</router-link>
                </div>
                <div class="nav-actions d-flex align-items-center">
                    <button type="button" name="button" class="navbar-action">
                      <div v-if="authenticated" class="showDropdown">
                          <Avatar />
                          <div class="dropdown-container">
                              <router-link to="/profile">Profile</router-link>
                              <router-link to="/logout">Logout</router-link>
                          </div>
                      </div>
                      <router-link v-else to="/login" class="navbar-action"><span class="icon-user icon"></span></router-link>
                    </button>
                    <div class="horizontal-divider"></div>
                    <button @click="toggleSearch = !toggleSearch" class="navbar-action">
                        <span class="icon-close icon" v-if="toggleSearch"></span>
                        <span class="icon-search icon" v-else="toggleSearch"></span>
                    </button>
                </div>
            </div>
          </div> -->
          <Navbar :containerFluidHome="true" :hiddenLogo="true" />
          <!-- Navbar -->

          <!-- Content -->
          <div class="content-multi home-background" :style="{backgroundImage:`url(${require('../assets/img/home.jpg')})`}"> <!-- home -->
              <div class="home-widget-explore">
                  <div class="title">
                      {{ widget.title }}
                  </div>
                  <div class="description mb-4" v-html="widget.body"></div>
                  <router-link to="/about" class="read-more">
                      <div>
                          {{ widget.button }} <span class="icon-back"></span>
                      </div>
                  </router-link>
              </div>
          </div>
          <!-- Content -->

          <!-- Footer -->
          <Footer :containerFluidHome="true" />
          <!-- Footer -->
      </div>
      <!-- Content -->
  </div>
</template>

<style scoped>
.home-background {
  background-size: cover;
}
.showDropdown {
  position: relative;
}
.showDropdown:after {
  content: "";
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  /* background: #000; */
  min-width: 120px;
  height: 16px;
  display: none;
}
.dropdown-container {
  position: absolute;
  background: #FFF;
  padding: 5px 0;
  z-index: 20;
  min-width: 120px;
  left: 50%;
  transform: translateX(-50%);
  top: 46px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(3,27,78,.1);
  display: none;
}
.showDropdown:hover:after {
  display: block;
}
.showDropdown:hover .dropdown-container {
  display: block;
}
.dropdown-container a {
  display: block;
  text-align: left;
  padding: 7px 17px;
  line-height: 1
}
.dropdown-container a:hover {
  background: #eee
}
.home-widget-explore {
  padding: 40px;
  background-color: #FFF;
  display: inline-block;
  position: relative;
  top: 98px;
  width: 360px
}

.home-widget-explore .title {
  position: relative;
  margin-bottom: 27px;
  padding-bottom: 31px;
  font-size: 45px;
  font-weight: bold;
  color: #1B1464;
}

.home-widget-explore .title:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 7px;
  background-color: #C9DD5D;
}

.home-widget-explore .description {
  color: #6E6D76;
}
.nav-links {
  padding-left: 40px;
}
.page-multi-columns .nav .container-fluid {
  padding: 0;
}
.containerFluid {
  padding: 0
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {

}

@media (max-width: 767.98px) {
  .multi-sidebar {
    display: none;
  }
  .multi-columns {
    width: 100%;
  }
  .home-background {
    background-size: cover;
    background-position: top;
    height: 100%;
    width: calc(100% + 30px);
    margin: 0 -15px;
  }
  .home-widget-explore {
    width: 240px;
    left: 15px;
    padding: 23px 30px;
    max-width: calc(100% - 25px)
  }
  .home-widget-explore .title {
    font-size: 30px;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .home-widget-explore {
    position: absolute;
    top: auto;
    bottom: 120px;
  }
  .content-multi {
    min-height: auto;
    height: calc(100% - 54px) !important;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {

}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {

}

@media (min-width: 768px) and (max-width: 1199.98px) {
  .multi-sidebar {
    display: none;
  }
  .multi-columns {
    width: 100%;
  }
  .content-multi {
    height: calc(100% - 127px) !important;
  }
  .home-widget-explore {
    padding: 30px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}
</style>

<script>
// import Search from '@/components/Search.vue';
// import Avatar from '@/components/Avatar.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    // Search,
    // Avatar,
    Navbar,
    Footer
  },
  data(){
      return {
          // toggleSearch: false,
          widget: [],
          homeSidebar: [],
          home: null,
          authenticated: false
      }
  },
  created() {
    // Get Articles In Setors
    axios.get(window.baseURL + '/home')
      .then(res => {
        var data = res.data.row;
        this.widget = data;
        this.home = data.image;
        console.log(data);
        console.log(data.image);
      })
      .catch(err => {
        console.log(err);
      });

      // Get Links
      axios.get(window.baseURL + '/popularSearch')
        .then(res => {
          var data = res.data.rows;
          console.log(data);
          this.homeSidebar = res.data.rows;
        })
        .catch(err => {
          console.log(err);
        });

        // Check Auth
        if (!localStorage.getItem('access_token')) {
          this.authenticated = false;
          // this.$router.push({ name: 'Login' });
        } else {
          this.authenticated = true;
        }
  }
}
</script>
