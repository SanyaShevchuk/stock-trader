<template src="./template.html"></template>
<style lang="scss" src="./styles.scss" scoped></style>

<script lang="ts">
import { mapState } from "vuex";
import _find from "lodash/find";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _round from "lodash/round";

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
    ...mapState("user", ["history", "assets"]),
    isAnyData(): boolean {
      // @ts-ignore
      return !_isEmpty(this.history);
    }
  },
  methods: {
    getItemValue(stockAction: IStockHistory, header: string) {
      switch (header) {
        case "price":
          return _round(_get(stockAction.quote["USD"], header, 0), 3);
        case "summary":
          return _round(_get(stockAction, header, 0), 3);
        default:
          return _get(stockAction, header, "--");
      }
    }
  }
};
</script>
