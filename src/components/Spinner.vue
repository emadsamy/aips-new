<template>
  <div v-if="loader" class="loader">
      Loader..........
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Loader',
  data() {
    return {
      loader: true
    }
  },
  methods: {
    test() {
      this.loader = false;
    }
  },
  mounted: {

  },
  created() {
    this.test();
  }
}
</script>

<style scoped>
.loader {
  width: 100px;
  height: 100px;
  background-color: #080;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
