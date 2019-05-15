<template>
  <option-group
      id="rate-input-card"
      label="Gym Options"
      :tooltip="tooltip">
    <div class="list">
      <gym-name-input />
      <label>Monthly Rate</label>
      <money-input
          v-model="rateOptions.monthlyRate"
          @input="setRateOptions(rateOptions)"
          :min="100"
          :max="1000"/>
      <label>PT Rate</label>
      <money-input
          v-model="rateOptions.ptRate"
          @input="setRateOptions(rateOptions)"
          :min="60"
          :max="500"/>
    </div>
  </option-group>
</template>

<script>
import { mapMutations } from 'vuex';
import OptionGroup from '@/components/options/OptionGroup.vue';
import MoneyInput from '@/components/inputs/MoneyInput.vue';
import GymNameInput from '@/components/options/GymNameInput.vue';

export default {
  name: 'RateInputCard',
  components: {
    OptionGroup,
    MoneyInput,
    GymNameInput,
  },
  data() {
    return  {
      tooltip: 'Enter gym name, monthly unlimited class rate (rate BEFORE any PT hybrid sessions are included), and PT session rate'
    }
  },
  props: ['rateOptions'],
  methods: {
    ...mapMutations(['setRateOptions']),
  }
}
</script>

<style lang="scss">
#rate-input-card {
  .list {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: .5em;
    align-items: center;

    input:not(#gym-name-input) {
      width: 5em;
      text-align: right;
    }
    #gym-name-input {
      grid-column: 1 / 3;
    }
  }
}
</style>
