<template>
  <section id="display-container">
    <div
        v-for="frequency in filteredFrequencyOptions"
        :key="`frequency-display-${frequency.id}`"
        :id="`${frequency.id}-display`" class="wrapper">
      
      <div class="display">

        <h2>{{frequency.label}} Classes</h2>

        <div class="row">

          <div class="left-label">
            <h4 style="text-align: right; margin: 1rem 0 0 1rem;">Payments:</h4>
            <plan-row
                v-for="option in filteredPlanOptions"
                :key="`${frequency.id}-plan-label-${option.id}`"
                :plan-option="option" :label-only="true"
                style="border-left: none;"/>
          </div>
        
          <div class="right-content row">
            <plan-card
                v-for="option in filteredPaymentsOptions"
                :key="`${frequency.id}-plan-card-${option.id}`"
                :payments-option="option"
                :plan-options="filteredPlanOptions"
                :rate-options="rateOptions"
                :frequency-option="frequency">
            </plan-card>
          </div>

        </div>

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
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  &:nth-child(2) {
    .display {
      margin-bottom: 2rem;
    }
  }
  .wrapper {
    padding-right: 1rem;
    margin: auto;
    max-width: 100%;
  }
  .display {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    // border: solid 1px gray;
    border-radius: 4px;
    overflow-x: scroll;
    box-shadow: 3px 3px 10px rgba(150, 150, 150, 0.5);
    margin: 0 auto;

    .left-label {
      flex-shrink: 0;
      box-shadow: -3px 15px 13px rgba(0, 0, 0, .2);
      z-index: 1;
      border-right: 3px solid white;

      div:nth-child(2n) {
        background: rgb(232, 235, 236);
      }
      div:nth-child(2n+1) {
        background: rgb(246, 246, 247);
      }
    }

    .right-content {
      overflow-x: scroll;
      // border-left: 4px solid white;

      div:first-child {
        .plan-row {
          border-left: none;
        }
      }
    }

    h2 {
      margin: 1rem 1rem 0;
    }
    h4 {
      margin: 1rem 1rem 0;
    }

    .row {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      margin: auto;
      // overflow-x: scroll;
      width: 100%;
      // justify-content: space-between;
    }
  }
}
</style>
