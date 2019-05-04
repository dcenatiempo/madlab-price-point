<template>
  <section id="display-container">
    <div
        v-for="frequency in filteredFrequencyOptions"
        :key="`frequency-display-${frequency.id}`"
        :id="`${frequency.id}-display`" class="display">
      <h2>{{frequency.label}}</h2>
      <div class="row">

        <div>
          <plan-row
              v-for="option in filteredPlanOptions"
              :key="`${frequency.id}-plan-label-${option.id}`"
              :plan-option="option" :label-only="true"
              style="border-left: none"/>
        </div>
      
        <plan-card
              v-for="option in filteredPaymentsOptions"
              :key="`${frequency.id}-plan-card-${option.id}`"
              :payments-option="option"
              :plan-options="filteredPlanOptions"
              :rate-options="rateOptions"
              :frequency-option="frequency"/>

      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import PlanCard from '@/components/PlanCard.vue';
import PlanRow from '@/components/PlanRow.vue';

export default {
  name: 'Display',
  components: { PlanCard, PlanRow },
  computed: {
    ...mapState(['paymentsOptions', 'rateOptions', 'planOptions', 'frequencyOptions']),
    filteredPaymentsOptions() {
      return this.paymentsOptions.filter(option => true === option.value);
    },
    filteredPlanOptions() {
      return this.planOptions.filter(option => true === option.checked);
    },
    filteredFrequencyOptions() {
      return this.frequencyOptions.filter(option => true === option.checked);
    }
  }
}
</script>

<style lang="scss">
#display-container {
  .display {
    border: solid;
    .row {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      margin: auto;
      // justify-content: space-between;
    }
  }
}
</style>
