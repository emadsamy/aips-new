<template>
  <vue-tel-input v-model="tel"></vue-tel-input>
</template>
<script>
import { VueTelInput } from "vue-tel-input";

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      tel: "",
    };
  },
};
</script>
