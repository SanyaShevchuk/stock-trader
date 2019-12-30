<template src="./template.html"> </template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
// import axios, { Method } from 'axios';
const axios = require("axios").default;
export default Vue.extend({
  name: "STMainPage",
  computed: {
    ...mapState("stocks", ["cash"])
  },
  mounted() {
    const options = {
      headers: {
        "X-CMC_PRO_API_KEY": "63fb5379-398f-4b7c-89bf-e68f52a946cc"
      }
    };

    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "63fb5379-398f-4b7c-89bf-e68f52a946cc"
          }
        }
      )
      .then((data: any) => console.log(data));
  }
});
</script>
