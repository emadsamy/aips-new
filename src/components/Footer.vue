<template>
  <footer class="footer" v-bind:class="[footerNavbar ? 'footerNavbar' : '']">
    <div
      v-bind:class="[containerFluidHome ? 'containerFluidHome' : '']"
      class="container-fluid d-flex justify-content-between"
    >
      <div class="footer-copyright d-flex">
        <div class="mr-3">American Institute of Professional Studies</div>
        <div>2021 All Rights Reserved © AIPS</div>
      </div>
      <div class="footer-links">
        <router-link to="/privacy" class="footer-link"
          >Privacy Policy</router-link
        >
        <router-link to="/events" class="footer-link"
          >Events & Conferences</router-link
        >
        <router-link to="/online-training" class="footer-link"
          >Online Training</router-link
        >
        <div v-for="(nav, index) in navbar">
            <router-link
              v-if="nav.has_footer"
              :to="{ name: 'show-page', params: { slug: nav.slug }}"
              class="nav-link"
              :key="index"
            >{{ nav.title }}</router-link>
        </div>
        <!-- <router-link to="/news" class="footer-link">News</router-link> -->
      </div>
      <div class="footer-social">
        <div class="text">Follow Us</div>
        <a
          v-for="(social, index) in rows"
          class="social-icon"
          :href="social.provider_url"
          :key="index"
          target="_blank"
        >
          <i
            v-if="social.provider.toLowerCase() == 'facebook'"
            class="fab fa-facebook-f"
          ></i>
          <i
            v-if="social.provider.toLowerCase() == 'youtube'"
            class="fab fa-youtube"
          ></i>
          <i
            v-if="social.provider.toLowerCase() == 'linkedin'"
            class="fab fa-linkedin-in"
          ></i>
          <i
            v-if="social.provider.toLowerCase() == 'twitter'"
            class="fab fa-twitter"
          ></i>
        </a>

        <!-- <a class="social-icon" href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="social-icon" href="#">
          <i class="fab fa-youtube"></i>
        </a>
        <a class="social-icon" href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="social-icon" href="#">
          <i class="fab fa-twitter"></i>
        </a> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
  line-height: 1;
}
.footer .text {
  color: #555555;
  font-size: 14px;
  margin-right: 13px;
  line-height: 1;
  font-weight: 600;
}

.footer-social {
  display: flex;
  align-items: center;
}

.social-icon {
  font-size: 13.5px;
  color: #555;
  margin-left: 13px;
  line-height: 1;
}
.social-icon:hover {
  color: #4f17a8;
}

.footer-link {
  color: #555555;
  font-size: 14px;
  margin-right: 30px;
  font-weight: 600;
}
.footer-link:hover {
  color: #4f17a8;
}
.footer-links {
  display: none;
}
.containerFluidHome {
  padding: 0;
}
.containerFluidHome .footer-copyright {
  display: none !important;
}
.containerFluidHome .footer-links {
  display: block !important;
}
.footerNavbar {
  padding: 13px 0;
}
.footerNavbar .container-fluid {
  padding: 0;
}
.footerNavbar .footer-copyright > div,
.footerNavbar .text,
.footerNavbar i {
  color: #999;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

@media (max-width: 767.98px) {
  .footer-copyright > div {
    font-size: 12px;
  }
  .footer-copyright > div:first-of-type {
    display: none;
  }
  .footer .text {
    font-size: 13px;
    margin-right: 2px;
  }
  .containerFluidHome .footer-copyright {
    display: block !important;
  }
  .containerFluidHome .footer-links {
    display: none !important;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

<script>
import axios from "axios";
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      rows: [],
    };
  },
  props: ["has_links", "containerFluidHome", "footerNavbar"],
  created() {
    axios
      .get(window.baseURL + "/socials")
      .then((res) => {
        var data = res.data.rows;
        console.log(data);
        this.rows = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
