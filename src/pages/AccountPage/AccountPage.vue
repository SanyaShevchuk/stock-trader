<template src="./template.html"></template>
<style lang="scss" scoped src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "AccountPage",
  computed: {
    ...mapState("user/userCredentials", ["name", "email"])
  }
});
</script>
