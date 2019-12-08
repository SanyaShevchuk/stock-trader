<template src="./template.html"></template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import STAsset from "@/components/STAsset/STAsset.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "STPortfolio",
  components: {
    STAsset
  },
  computed: {
    ...mapState("stocks", ["boughtAssets"])
  }
});
</script>
