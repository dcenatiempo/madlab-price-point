<template>
  <div class="plan-card">
    <h4>{{paymentsOption.label}}</h4>
    <plan-row
        v-for="plan in planOptions"
        :key="`plan-row-${paymentsOption.id}-${plan.id}`"
        :plan-option="plan"
        :rate-options="rateOptions"
        :payments-option="paymentsOption"
        :frequency-option="frequencyOption"/>
  </div>
</template>

<script>
import PlanRow from '@/components/PlanRow.vue';

export default {
  name: 'PlanCard',
  components: { PlanRow },
  props: ['paymentsOption', 'planOptions', 'rateOptions', 'frequencyOption'],
  computed: {
  }
}
</script>

<style lang="scss">
.plan-card {
  flex-shrink: 0;
  h3 {
    margin: 1rem;
  }

  div:nth-child(2n) {
    background: rgb(232, 235, 236);
  }
  div:nth-child(2n+1) {
    background: rgb(246, 246, 247);
  }
  // margin: 0 5px;
}
</style>
