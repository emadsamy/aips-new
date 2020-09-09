<template>
  <div class="page-container">
      Logout
  </div>
</template>

<style scoped>

</style>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import DownloadCatalog from '../components/DownloadCatalog.vue';
import axios from 'axios';
export default {
  name: 'Logout',
  components: {
    Navbar: Navbar,
    Footer: Footer,
    DownloadCatalog: DownloadCatalog
  },
  data() {
    return {
      
    }
  },
  created() {
      localStorage.clear();
      if (!localStorage.getItem('access_token')) {
        this.$router.push({ name: 'Login' });
      }
  }
}
</script>
