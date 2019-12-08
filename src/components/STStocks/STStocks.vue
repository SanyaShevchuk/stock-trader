<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapGetters } from "vuex";

import STAsset from "@/components/STAsset/STAsset.vue";
import { IBoughtAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "STStocks",
  components: {
    STAsset
  },
  computed: {
    ...mapState("stocks", ["assets"])
  },
  methods: {
    ...mapGetters("stocks", ["isAssetBought"]),
    ...mapMutations("stocks", ["addBoughtAsset", "updateBoughtAsset"]),
    onBuyAsset(asset: IBoughtAsset) {
      this.isAssetBought(asset)
        ? this.updateBoughtAsset(asset)
        : this.addBoughtAsset(asset);
    }
  }
});
</script>
