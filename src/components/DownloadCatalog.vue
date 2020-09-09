<template>
  <div class="program-download">
      <div class="download-catalog">
          <img :src="image ? image : require('../assets/img/home.png')" alt="Download Catalog" class="img-fluid" />
          <div class="title">
              {{ title ? title : 'Programs Catalog' }}
          </div>
          <a target="_blank" :href="link ? link : '#' " class="download-btn">Download</a>
      </div>
  </div>
</template>

<style scoped>
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .program-download {
    display: none
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .program-download {
    display: none
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .program-download {
    display: none
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
export default {
  name: 'DownloadCatalog',
  props: ["title", "link", "image"],
  components: {

  }
}
</script>
