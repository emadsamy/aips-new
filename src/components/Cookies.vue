<template>
  <div v-if="cookie" class="cookies-notice">
      <div class="cookies-container container">
          <p>We use cookies to enhance the user experience and improve the quality of our site. Accept cookies to hide this message.<br /> Read our privacy policy <router-link to="/privacy" class="paleMainColor">here</router-link>.</p>
          <div class="accept-cookie">
              <button @click="setCookie()" class="read-more" name="button">
                <div>
                  Accept
                </div>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cookies',
  data() {
    return {
      cookie: true
    }
  },
  methods: {
    setCookie() {
      this.cookie = false;
    }
  },
  created() {

  }
}
</script>

<style scoped>
.cookies-notice {
  background: #efe9dd;
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 50px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding-left: 4.8rem;
  padding-right: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  font-size: 17px;
  line-height: 1.5;
  color: rgba(0,0,0,.6);
  margin: 0;
  font-weight: normal
}
.read-more {
  padding: 6px 30px
}
.read-more > div {
  font-size: 20px
}
</style>
