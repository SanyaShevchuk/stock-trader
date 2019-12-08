<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "STAsset",
  props: {
    asset: {
      type: Object as PropType<IAsset>,
      required: true
    }
  },
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    canBuy(): Boolean {
      return Boolean(this.quantity);
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
