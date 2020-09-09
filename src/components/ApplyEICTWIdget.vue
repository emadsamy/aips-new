<template>
  <div v-if="has_training">
    <div class="title mb-3">
      {{ title ? title : "Become a Certified Trainer" }}
    </div>
    <router-link :to="link" class="read-more">
      <div>
        Apply Now
        <span class="icon-back"></span>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.title {
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "ApplyEICTWIdget",
  components: {},
  props: ["title", "link", "has_training"],
};
</script>
