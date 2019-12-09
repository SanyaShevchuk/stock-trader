<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue, { PropType } from "vue";

import { IAsset } from "@/interfaces/stocks";

export default Vue.extend({
  name: "STAsset",
  model: {
    prop: "quantity",
    event: "input"
  },
  props: {
    quantity: {
      type: [Number, String],
      required: true
    },
    asset: {
      type: Object as PropType<IAsset>,
      required: true
    }
  },
  data() {
    return {
      value: this.quantity
    };
  },
  methods: {
    handleInput(value: string) {
      const quantity = value ? parseInt(value) : 0;
      this.$emit("input", quantity);
    }
  },
  watch: {
    quantity(updatedQuantity) {
      this.value = this.quantity;
    }
  }
});
</script>
