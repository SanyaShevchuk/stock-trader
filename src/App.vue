<template>
  <VApp>
    <STHeader v-if="verified" />
    <VContent style="height: calc(100% - 64px)">
      <RouterView />
    </VContent>
  </VApp>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import STHeader from "@/components/STHeader/STHeader.vue";

export default Vue.extend({
  name: "App",
  components: {
    STHeader
  },
  computed: {
    ...mapState("user", ["verified"])
  }
});
</script>
