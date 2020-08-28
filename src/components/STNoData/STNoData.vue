<template src="./template.html"></template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "STNoData",
  props: {
    text: {
      type: String,
      required: true
    }
  }
});
</script>
