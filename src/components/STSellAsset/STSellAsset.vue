<template src="./template.html"></template>

<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue, { PropType } from "vue";

import STAsset from "@/components/STAsset/STAsset.vue";
import { IAsset } from "@/interfaces/stocks";
import _pick from "lodash/pick";

export default Vue.extend({
  name: "STSellAsset",
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
    canSell(): Boolean {
      return Boolean(this.quantity);
    }
  },
  methods: {
    onSellAsset() {
      const { quantity, asset } = this;
      this.$emit("sell", { ...asset, sell: quantity });
    }
  }
});
</script>
