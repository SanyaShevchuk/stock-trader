<template src="./template.html"> </template>
<style lang="scss" src="./styles.scss"></style>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "MainPage",
  computed: {
    ...mapGetters("user", ["getRoundedCash"])
  },
  methods: {
    ...mapActions("stocks", ["getAssets"])
  },
  async mounted() {
    try {
      await this.getAssets();
    } catch (error) {
      console.log(error);
    }

    //   function download(content:any, fileName:string, contentType:string) {
    //     var a = document.createElement("a");
    //     var file = new Blob([content], {type: contentType});
    //     a.href = URL.createObjectURL(file);
    //     a.download = fileName;
    //     a.click();
    // }
  }
});
</script>
