<template>
  <div class="plan-card">
    <h3>{{frequencyOption.label}}</h3>
    <plan-row
        v-for="plan in planOptions"
        :key="`plan-row-${frequencyOption.id}-${plan.id}`"
        :plan-option="plan"
        :rate-options="rateOptions"
        :frequency-option="frequencyOption"/>
  </div>
</template>

<script>
import PlanRow from '@/components/PlanRow.vue';

export default {
  name: 'PlanCard',
  components: { PlanRow },
  props: ['frequencyOption', 'planOptions', 'rateOptions'],
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
