<template>
  <option-group
      id="payments-input-card"
      label="Payment Options"
      :tooltip="tooltip">
      <div class="list">
        <template v-for="option in paymentsOptions">
          <checkbox
              :key="`payments-input-${option.id}`"
              :id="option.id"
              v-model="option.value"
              @input="setPaymentsOptions(paymentsOptions)"
              :disabled="disabled(option)" />
          <label :key="`payments-label-${option.id}`" :for="option.id">{{option.label}}</label>
        </template>
      </div>
  </option-group>
</template>

<script>
import { mapMutations } from 'vuex';
import OptionGroup from '@/components/options/OptionGroup.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'PaymentsInputCard',
  components: {
    OptionGroup,
    Checkbox,
  },
  data() {
    return  {
      tooltip: "How often client payments are due",
    }
  },
  props: ['paymentsOptions'],
  computed: {
    count() {
      return this.paymentsOptions.filter(option => true === option.value).length;
    }
  },
  methods: {
    ...mapMutations(['setPaymentsOptions']),
    disabled(option) {
      return 1 >= this.count && option.value
    }
  }
}
</script>

<style lang="scss">
#payments-input-card {
  .list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-gap: .5em;
    align-items: center;
  }
}
</style>
