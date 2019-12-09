<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapGetters } from "vuex";
import _some from "lodash/some";

import STBuyAsset from "@/components/STBuyAsset/STBuyAsset.vue";
import { IBoughtAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "STStocks",
  components: {
    STBuyAsset
  },
  computed: {
    ...mapState("stocks", ["assets", "boughtAssets"])
  },
  methods: {
    ...mapGetters("stocks", ["isAssetBought"]),
    ...mapMutations("stocks", ["addBoughtAsset", "updateBoughtAsset"]),
    onBuyAsset(asset: IBoughtAsset) {
      _some(this.boughtAssets, { id: asset.id })
        ? this.updateBoughtAsset(asset)
        : this.addBoughtAsset(asset);
    }
  }
});
</script>
