<template src="./template.html"></template>

<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue, { PropType } from "vue";
import _round from "lodash/round";

import STAsset from "@/components/STAsset/STAsset.vue";
import { IAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "STBuyAsset",
  components: {
    STAsset
  },
  props: {
    asset: {
      type: Object as PropType<IAsset>,
      required: true
    }
  },
  data() {
    return {
      quantity: ""
    };
  },
  computed: {
    canBuy(): Boolean {
      return Boolean(this.quantity);
    },
    price(): string {
      return `(${this.$t("price")} ${_round(
        this.asset.quote["USD"].price,
        3
      )})`;
    }
  },
  methods: {
    buyAsset() {
      const { quantity, asset } = this;
      this.$emit("buy", { ...asset, quantity });
    }
  }
});
</script>
