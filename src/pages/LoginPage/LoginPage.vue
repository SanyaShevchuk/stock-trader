<template src="./template.html"></template>
<style scoped lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import routesLinks from "@/constants/routes";

export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    onLogIn() {
      if (this.name === "sanya") {
        alert("lol");
      }
    },
    onSignUp() {
      this.$router.push(routesLinks.signUp);
    }
  }
});
</script>
