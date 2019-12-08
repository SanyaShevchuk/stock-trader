<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "STHeader",
  data: () => ({
    headers: [
      {
        value: "Stock Trader",
        path: "/"
      },
      {
        value: "Portfolio",
        path: "portfolio"
      },
      {
        value: "Stocks",
        path: "stocks"
      }
    ]
  })
});
</script>
