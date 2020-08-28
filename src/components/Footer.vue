<template>
  <footer class="footer">
      <div v-bind:class="[containerFluidHome ? 'containerFluidHome' : '']" class="container-fluid d-flex justify-content-between">
        <div class="footer-copyright d-flex">
            <div class="mr-3">American  Institute of Professional Studies </div>
            <div>2021 All Rights Reserved  © AIPS</div>
        </div>
        <!-- <div class="footer-links">
            <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
            <router-link to="/events" class="footer-link">Events & Conferences</router-link>
            <router-link to="/online-training" class="footer-link">Online Training</router-link>
            <router-link to="/news" class="footer-link">News</router-link>
        </div> -->
        <div class="footer-social">
            <div class="text">Follow Us</div>
            <a class="facebook-icon social-icon" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="youtube-icon social-icon" href="#"><i class="fab fa-youtube"></i></a>
            <a class="linkedin-icon social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="facebook-icon social-icon" href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
  </footer>
</template>

<style scoped>
.containerFluidHome {
  padding: 0;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {

}

@media (max-width: 767.98px) {
  .footer-copyright > div {
    font-size: 12px
  }
  .footer-copyright > div:first-of-type {
    display: none;
  }
  .footer .text {
    font-size: 13px;
    margin-right: 2px;
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
export default {
  name: 'Footer',
  components: {

  },
  props: ['has_links', 'containerFluidHome'],
}
</script>
