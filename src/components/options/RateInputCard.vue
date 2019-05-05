<template>
  <option-group
      id="rate-input-card"
      label="Gymn Options"
      :tooltip="tooltip">
    <div class="list">
      <gymn-name-input />
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
import GymnNameInput from '@/components/options/GymnNameInput.vue';

export default {
  name: 'RateInputCard',
  components: {
    OptionGroup,
    MoneyInput,
    GymnNameInput,
  },
  data() {
    return  {
      tooltip: 'Enter gymn name, monthly unlimited class rate, and pt session rate'
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

    input:not(#gymn-name-input) {
      width: 5em;
      text-align: right;
    }
    #gymn-name-input {
      grid-column: 1 / 3;
    }
  }
}
</style>
