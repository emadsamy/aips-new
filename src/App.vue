<template>
  <div id="app">
    <router-view/>
    <Cookies />
    <Spinner />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

<script>
import Cookies from '@/components/Cookies.vue';
import Spinner from '@/components/Spinner.vue';
export default {
  name: "App",
  components: {
    Cookies,
    Spinner,
  }
}
</script>
