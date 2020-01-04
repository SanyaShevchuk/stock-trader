<template src="./template.html"></template>

<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue, { PropType } from "vue";

import STAsset from "@/components/STAsset/STAsset.vue";
import { IUserAsset } from "@/interfaces/stocks";
import _pick from "lodash/pick";
import _round from "lodash/round";

interface ISellAsset extends IUserAsset {
  price: number;
}

export default Vue.extend({
  name: "STSellAsset",
  components: {
    STAsset
  },
  props: {
    asset: {
      type: Object as PropType<ISellAsset>,
      required: true
    }
  },
  data() {
    return {
      quantity: ""
    };
  },
  computed: {
    canSell(): Boolean {
      return Boolean(this.quantity);
    },
    price(): number {
      return _round(this.asset.price, 3);
    }
  },
  methods: {
    onSellAsset() {
      const { quantity, asset } = this;
      this.$emit("sell", { ...asset, quantity });
    }
  }
});
</script>
