<template src="./template.html"></template>
<style lang="scss" src="./styles.scss" scoped></style>

<script lang="ts">
import { mapState } from "vuex";
import _find from "lodash/find";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import STNoData from "@/components/STNoData/STNoData.vue";
import { IStockHistory } from "@/interfaces/stocks";
import { statisticsHeaders } from "@/configs/table";

export default {
  name: "STStatistics",
  components: {
    STNoData
  },
  data() {
    return {
      headers: statisticsHeaders,
      noDataText: "You haven't bought or sold any assets"
    };
  },
  computed: {
    ...mapState("stocks", ["history", "assets"]),
    isAnyData(): boolean {
      // @ts-ignore
      return !_isEmpty(this.history);
    }
  },
  methods: {
    getItemValue(stockAction: IStockHistory, header: string) {
      return _get(stockAction, header, "--");
    }
  }
};
</script>
