<template>
  <div class="plan-row">
    <span v-if="labelOnly">{{planOption.label}}</span>
    <span v-else >{{amount}}</span>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default {
  name: 'PlanRow',
  components: { },
  props: {
    planOption: {
      default: () => {}
    },
    rateOptions: {
      default: () => []
    },
    paymentsOption: {
      default: () => {}
    },
    labelOnly: {
      type: Boolean,
      default: false,
    }
    },
  computed: {
    amount() {
      if (this.labelOnly) return 0;

      let totalPT = this.planOption.value * this.rateOptions.ptRate;
      let totalMonthly = 12 * this.rateOptions.monthlyRate;
      let yearlyCost = totalPT + totalMonthly;

      return formatter.format(Math.round(yearlyCost / this.paymentsOption.divisor));
    }
  }
}
</script>

<style lang="scss">
.plan-row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  border-left: solid 1px gray;
  border-top: solid 1px gray;
  padding: .5em;
  
}
</style>
