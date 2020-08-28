<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import _some from "lodash/some";

import STBuyAsset from "@/components/STBuyAsset/STBuyAsset.vue";
import { IAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "StocksPage",
  components: {
    STBuyAsset
  },
  computed: {
    ...mapState("stocks", ["assets"])
  },
  methods: {
    ...mapActions("user", ["buyAssets"]),
    onBuyAsset(asset: IAsset) {
      console.log(asset);
      this.buyAssets(asset);
    }
  }
});
</script>
