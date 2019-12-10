<template src="./template.html"></template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions } from "vuex";

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
      return this.getBoughtAssets.length;
    }
  },
  methods: {
    ...mapActions("stocks", ["sellAssets"]),
    onSellAsset(asset: ISellAsset) {
      // @ts-ignore
      this.sellAssets(asset);
    }
  }
});
</script>
