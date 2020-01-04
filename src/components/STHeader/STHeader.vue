<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters("user", ["getRoundedCash"])
  },
  methods: {
    ...mapActions("stocks", ["updateStocks"]),
    openAccountMenu() {
      this.$router.push(routesLinks.account);
    }
  }
});
</script>
