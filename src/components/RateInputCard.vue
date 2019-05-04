<template>
  <div id="rate-input-card" class="card">
    <h3>Rate Options</h3>
    <div class="list">
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import MoneyInput from '@/components/inputs/MoneyInput.vue';

export default {
  name: 'RateInputCard',
  components: {
    MoneyInput,
  },
  data() {
    return  {
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
    input {
      width: 5em;
      text-align: right;
    }
  }
}
</style>
