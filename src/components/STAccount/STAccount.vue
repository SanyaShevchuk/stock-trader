<template src="./template.html"></template>
<style lang="scss" scoped src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "STAccount",
  computed: {
    ...mapState("user", ["name", "email"])
  }
});
</script>
