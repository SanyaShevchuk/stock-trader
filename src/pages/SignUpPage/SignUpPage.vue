<template src="./template.html"></template>
<style lang="scss" scoped src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import routesLinks from "@/constants/routes";

export default Vue.extend({
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
    ...mapActions("user", ["signUp"]),
    onSignUp() {
      const userData = {
        email: this.email,
        name: this.name,
        password: this.password
      };
      // @ts-ignore
      this.signUp(userData);
      this.$router.push(routesLinks.home);
    }
  }
});
</script>
