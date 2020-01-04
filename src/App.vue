<template>
  <VApp>
    <STHeader v-if="verified" />
    <STContent>
      <RouterView />
    </STContent>
  </VApp>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import STHeader from "@/components/STHeader/STHeader.vue";
import STContent from "@/components/STContent/STContent.vue";

export default Vue.extend({
  name: "App",
  components: {
    STHeader,
    STContent
  },
  computed: {
    ...mapState("user", ["verified"])
  }
});
</script>
