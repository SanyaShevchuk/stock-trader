<template>
  <VApp>
    <HeaderLayout v-if="verified" />
    <ContentLayout>
      <RouterView />
    </ContentLayout>
  </VApp>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import HeaderLayout from "@/layouts/HeaderLayout/HeaderLayout.vue";
import ContentLayout from "@/layouts/ContentLayout/ContentLayout.vue";

export default Vue.extend({
  name: "App",
  components: {
    HeaderLayout,
    ContentLayout
  },
  computed: {
    ...mapState("user", ["verified"])
  }
});
</script>
