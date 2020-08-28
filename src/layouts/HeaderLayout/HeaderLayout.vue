<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import routesLinks from "@/constants/routes";

export default Vue.extend({
  name: "HeaderLayout",
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
    ...mapMutations("user", ["resetState"]),
    openAccountMenu() {
      this.$router.push(routesLinks.account);
    },
    onLogOut() {
      this.resetState();
      this.$router.push(routesLinks.logIn);
    }
  }
});
</script>
