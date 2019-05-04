<template>
  <div class="options">
    <switch-view />
    <rate-input-card :rate-options="rateOptions"/>
    <plan-input-card :plan-options="planOptions"/>
    <payments-input-card :payments-options="paymentsOptions"/>
    <frequency-input-card :frequency-options="frequencyOptions"/>
    <p-d-f />
    <reset-button />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RateInputCard from '@/components/options/RateInputCard.vue';
import PlanInputCard from '@/components/options/PlanInputCard.vue';
import PaymentsInputCard from '@/components/options/PaymentsInputCard.vue';
import FrequencyInputCard from '@/components/options/FrequencyInputCard.vue';
import PDF from '@/components/buttons/PDF.vue';
import SwitchView from '@/components/buttons/SwitchView.vue';
import ResetButton from '@/components/buttons/ResetButton.vue';

export default {
  name: 'AllOptions',
  components: {
    RateInputCard,
    PlanInputCard,
    PaymentsInputCard,
    FrequencyInputCard,
    PDF,
    SwitchView,
    ResetButton,
  },
  computed: {
    ...mapState(['paymentsOptions', 'rateOptions', 'planOptions', 'frequencyOptions']),
  },
  methods: {
    ...mapMutations(['resetStore']),
  }
}
</script>

<style lang="scss">
.options {
      display: flex;
      flex-flow: column nowrap;
    }
</style>
