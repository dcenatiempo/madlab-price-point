<template>
  <div id="display">
    <div>
      <plan-row
        :key="`plan-label-${option.id}`"
        v-for="option in filteredPlanOptions"
        :plan-option="option" :label-only="true"
        style="border-left: none"/>
    </div>
    <plan-card
        :key="`plan-card-${option.id}`"
        v-for="option in filteredFrequencyOptions"
        :frequency-option="option"
        :plan-options="filteredPlanOptions"
        :rate-options="rateOptions"/>
  </div>
</template>

<script>
import PlanCard from '@/components/PlanCard.vue';
import PlanRow from '@/components/PlanRow.vue';

export default {
  name: 'Display',
  components: { PlanCard, PlanRow },
  props: ['planOptions', 'frequencyOptions', 'rateOptions'],
  computed: {
    filteredFrequencyOptions() {
      return this.frequencyOptions.filter(option => true === option.value);
    },
    filteredPlanOptions() {
      return this.planOptions.filter(option => true === option.checked);
    }
  }
}
</script>

<style lang="scss">
#display {
  border: solid;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  // justify-content: space-between;
}
</style>
