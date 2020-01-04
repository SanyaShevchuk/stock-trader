<template src="./template.html"></template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import _isEmpty from "lodash/isEmpty";

import STNoData from "@/components/STNoData/STNoData.vue";
import STSellAsset from "@/components/STSellAsset/STSellAsset.vue";
import { IUserAsset } from "@/interfaces/stocks";

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
    ...mapGetters("user", ["getBoughtAssets"]),
    isAnyData() {
      // @ts-ignore
      return !_isEmpty(this.getBoughtAssets);
    }
  },
  methods: {
    ...mapActions("user", ["sellAssets"]),
    onSellAsset(asset: IUserAsset) {
      // @ts-ignore
      this.sellAssets(asset);
    }
  }
});
</script>
