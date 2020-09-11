<template>
  <div v-if="show" class="loader">
      <img src="../assets/loader.svg" alt="">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Loader',
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggleLoader() {
      setTimeout(() => {
          this.show = false;
      }, 500);
    }
  },
  mounted() {
    this.toggleLoader();
  }
}
</script>

<style scoped>
.loader {
  width: 100%;
  height: 100%;
  background-color: #00000020;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader img {
  width: 150px;
  height: 150px;
}
</style>
