<template src="./template.html"></template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

import STNoData from "@/components/STNoData/STNoData.vue";
import STSellAsset from "@/components/STSellAsset/STSellAsset.vue";
import { IBoughtAsset } from "@/interfaces/stocks";

interface ISellAsset {
  id: number;
  quantity: number;
  sell: number;
}

export default Vue.extend({
  name: "STPortfolio",
  components: {
    STSellAsset,
    STNoData
  },
  data() {
    return {
      noDataText: "You haven't bought any assets"
    };
  },
  computed: {
    ...mapGetters("stocks", ["getBoughtAssets"]),
    isAnyData() {
      // @ts-ignore
      console.log(this.getBoughtAssets, this.getBoughtAssets.length);
      // @ts-ignore
      return this.getBoughtAssets.length;
    }
  },
  methods: {
    ...mapMutations("stocks", ["sellBoughtAsset", "removeBoughtAsset"]),
    onSellAsset(asset: ISellAsset) {
      const { quantity, sell } = asset;
      if (quantity - sell > 0) {
        // @ts-ignore
        this.sellBoughtAsset({ id: asset.id, quantity: sell });
      } else {
        // @ts-ignore
        this.removeBoughtAsset(asset.id);
      }
    }
  }
});
</script>
