<template>
  <div class="program-download">
      <div class="download-catalog">
          <img :src="require('../assets/img/home.png')" alt="Download Catalog" class="img-fluid" />
          <div class="title">
              Programs Catalog
          </div>
          <router-link to="/Link" class="download-btn">Download</router-link>
      </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'DownloadCatalog',
  components: {

  }
}
</script>
