<template lang="html">
  <div>
    <div v-if="has_faq" class="accred-faq">
        <router-link to="/faq" class="faq-link d-flex mb-30">
            <div class="faq-bold d-flex align-items-center">
                FAQ
            </div>
            <div class="faq-small d-flex align-items-center">
                Frequently Asked
                <br />
                Questions
            </div>
        </router-link>
    </div>
    <div v-if="has_training" class="training">
      <div class="bg-title mb-3" v-html="appTitle"></div>
      <router-link to="/" class="read-more">
          <div>
              Apply Now <span class="icon-back"></span>
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  props: ["appTitle", "has_faq", "has_training"],
};
</script>

<style lang="css" scoped>
.bg-title {
  font-weight: bold;
  font-size: 20px;
  color: #1b1464;
}
.faq-small {
  font-size: 17px;
  line-height: 1.2;
  padding-left: 7px;
  color: #666;
}
.faq-bold {
  font-weight: bolder;
  font-size: 33px;
  color: #1b1464;
}
</style>
