<template>
  <div class="plan-card">
    <h3>{{paymentsOption.label}}</h3>
    <plan-row
        v-for="plan in planOptions"
        :key="`plan-row-${paymentsOption.id}-${plan.id}`"
        :plan-option="plan"
        :rate-options="rateOptions"
        :payments-option="paymentsOption"/>
  </div>
</template>

<script>
import PlanRow from '@/components/PlanRow.vue';

export default {
  name: 'PlanCard',
  components: { PlanRow },
  props: ['paymentsOption', 'planOptions', 'rateOptions'],
  computed: {
  }
}
</script>

<style lang="scss">
.plan-card {
  h3 {
    margin: 1rem;
  }
  // margin: 0 5px;
}
</style>
