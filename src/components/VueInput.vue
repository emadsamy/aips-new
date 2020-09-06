<template>
  <vue-tel-input></vue-tel-input>
</template>
<script>
import { VueTelInput } from "vue-tel-input";

export default {
  name: "VueInput",
  components: {
    VueTelInput: VueTelInput,
  },
  data() {
    return {
      tel: "",
    };
  },
};
</script>
