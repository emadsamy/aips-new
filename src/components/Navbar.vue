<template>
  <div v-bind:class="[certificatePage ? 'certificatePage' : '']" class="nav">
    <div v-bind:class="[containerFluidHome ? 'containerFluidHome' : '']" class="container-fluid">
      <div class="apis-navbar">
        <div class="nav-logo" v-bind:class="[hiddenLogo ? 'hiddenLogo' : '']">
          <!--  v-if="has_logo" -->
          <router-link class="d-flex" to="/">
            <img src="../assets/logo.svg" class="img-fluid" alt="Logo" />
          </router-link>
        </div>
        <div v-bind:class="[isActive ? 'active' : '']" class="nav-links">
          <router-link :to="{ name: 'accrediations'}" class="nav-link">Accreditation</router-link>
          <router-link to="/programs" class="nav-link">Programs</router-link>
          <router-link :to="{ name: 'memberships'}" class="nav-link">Membership</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <router-link to="/our-certificate" class="nav-link">Our Certificate</router-link>
          <router-link
            v-for="(nav, index) in navbar"
            :to="{ name: 'NavbarPage', params: { slug: nav.slug } }"
            class="nav-link"
            :key="index"
          >{{ nav.title }}</router-link>
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="'/' + link.slug"
            class="nav-link hiddenBgSize"
          >{{ link.title }}</router-link>
          <div class="hiddenBgSize">
            <Footer :footerNavbar="true" />
          </div>
        </div>
        <div class="nav-actions d-flex align-items-center">
          <button
            v-bind:class="[isActive ? 'hiddenAction' : '']"
            type="button"
            name="button"
            class="navbar-action"
          >
            <div v-if="authenticated" class="showDropdown">
              <Avatar />
              <div class="dropdown-container">
                <router-link to="/profile">Profile</router-link>
                <router-link to="/logout">Logout</router-link>
              </div>
            </div>
            <router-link v-else to="/login" class="navbar-action">
              <span class="icon-user icon"></span>
            </router-link>
          </button>
          <div v-bind:class="[isActive ? 'hiddenAction' : '']" class="horizontal-divider"></div>
          <button
            v-bind:class="[isActive ? 'hiddenAction' : '']"
            @click="toggleSearch = !toggleSearch"
            class="navbar-action"
          >
            <span class="icon-close icon" v-if="toggleSearch"></span>
            <span class="icon-search icon" v-else></span>
          </button>
          <button
            v-bind:class="[isActive ? 'active' : '']"
            id="menuBar"
            class="menu-bar-a"
            @click="toggleNavbar()"
          >
            <div class="menu-bar">
              <div class="child-bar-1"></div>
              <div class="child-bar-2"></div>
              <div class="child-bar-3"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <Search v-if="toggleSearch" />
  </div>
</template>

<style lang="scss" scoped>
.showDropdown {
  position: relative;
}
.showDropdown:after {
  content: "";
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  // background: #000;
  min-width: 120px;
  height: 16px;
  display: none;
}
.dropdown-container {
  position: absolute;
  background: #fff;
  padding: 5px 0;
  z-index: 20;
  min-width: 120px;
  left: 50%;
  transform: translateX(-50%);
  top: 46px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(3, 27, 78, 0.1);
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
  line-height: 1;
}
.dropdown-container a:hover {
  background: #eee;
}
.menu-bar {
  position: relative;
  width: 40px;
  height: 21px;
  display: block !important;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin-top: -3px;
  margin-left: 14px;
}
.horizontal-divider {
  margin: 0 19px;
}
.menu-bar > div {
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 0;
  background: #000;
  transition: all 0.3s ease-in-out;
}
.menu-bar > div:first-of-type {
  top: 0;
  width: 100%;
}
.menu-bar > div:nth-of-type(2) {
  top: 50%;
}
.menu-bar > div:last-of-type {
  top: 100%;
}

.menu-bar-a.active .menu-bar > div:first-of-type {
  transform: translateY(10px) rotate(50deg);
}
.menu-bar-a.active .menu-bar > div:nth-of-type(2) {
  opacity: 0;
}
.menu-bar-a.active .menu-bar > div:last-of-type {
  transform: translateY(-11px) rotate(-49deg);
}
#menuBar {
  display: none;
}
.logo-title {
  font-size: 38px;
  margin-left: 7px;
  font-weight: bold;
  color: #1b1464;
}
.containerFluidHome .nav-links {
  padding-left: 40px;
}
.hiddenLogo {
  display: none;
}
.hiddenBgSize {
  display: none;
}
.certificatePage {
  display: none;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 767.98px) {
  .nav-links {
    position: fixed;
    top: 73px;
    z-index: 20;
    background: #370f76;
    width: 100%;
    left: 0;
    height: calc(100% - 73px);
    flex-wrap: wrap;
    align-items: inherit;
    display: none;
    padding: 0 20px;
    z-index: 1000;
    overflow-y: auto;
  }
  .nav-links.active {
    display: block;
  }
  .nav-link {
    color: #d0d877;
    font-weight: normal;
    font-size: 32px;
    display: block;
    width: 100%;
    border-bottom: 1px solid #d0d87740;
  }
  #menuBar {
    display: block;
  }
  .nav {
    padding: 18px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    // padding-left: 0;
    // padding-right: 0;
  }
  .hiddenLogo {
    display: block;
  }
  .hiddenAction {
    display: none;
  }
  .containerFluidHome .nav-links {
    padding: 0 20px;
  }
  .hiddenBgSize {
    display: block;
  }
  .certificatePage {
    display: block;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .nav-links {
    margin-right: 0;
    padding-left: 0 !important;
  }
  .nav-logo img {
    transform: none;
  }
  .nav-link {
    padding: 0.5rem 0.5rem;
    font-size: 17px;
  }
  .containerFluidHome .nav-logo {
    display: block;
  }
  .containerFluidHome {
    padding: 0 !important;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .containerFluidHome .nav-logo {
    display: block;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .containerFluidHome {
    padding: 0;
  }
}
</style>

<script>
import Search from "./Search.vue";
import Avatar from "./Avatar.vue";
import Footer from "./Footer.vue";
import axios from "axios";
export default {
  name: "Navbar",
  components: {
    Avatar: Avatar,
    Search: Search,
    Footer: Footer,
  },
  props: ["has_logo", "containerFluidHome", "hiddenLogo", "certificatePage"],
  data() {
    return {
      toggleSearch: false,
      isActive: false,
      authenticated: false,
      links: [],
      navbar: [],
    };
  },
  methods: {
    toggleNavbar: function () {
      this.isActive = !this.isActive;
    },
  },
  created() {
    if (!localStorage.getItem("access_token")) {
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }

    // Get Navbar Links
    axios
      .get(window.baseURL + "/popularSearch")
      .then((res) => {
        var data = res.data.rows;
        console.log(data);
        this.links = res.data.rows;
      })
      .catch((err) => {
        console.log(err);
      });

    // Get Navbar Links in Big Sizes
    axios
      .get(window.baseURL + "/pages")
      .then((res) => {
        var data = res.data.rows;
        console.log("Test");
        console.log(data);
        this.navbar = res.data.rows;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
