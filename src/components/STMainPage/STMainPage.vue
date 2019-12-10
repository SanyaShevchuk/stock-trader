<template src="./template.html"> </template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "STMainPage",
  computed: {
    ...mapState("stocks", ["cash"])
  }
});
</script>
