<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import routesLinks from "@/constants/routes";

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
      },
      {
        value: "Statistics",
        path: "statistics"
      }
    ]
  }),
  computed: {
    ...mapState("stocks", ["cash"])
  },
  methods: {
    ...mapActions("stocks", ["updateStocks"]),
    openAccountMenu() {
      this.$router.push(routesLinks.account);
    }
  }
});
</script>
