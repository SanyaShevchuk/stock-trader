<template>
  <VApp>
    <STHeader />
    <VContent style="height: calc(100% - 64px)">
      <RouterView />
    </VContent>
  </VApp>
</template>

<script lang="ts">
import Vue from "vue";
import STHeader from "@/components/STHeader/STHeader.vue";

export default Vue.extend({
  name: "App",
  components: {
    STHeader
  },
  data: () => ({
    //
  })
});
</script>
