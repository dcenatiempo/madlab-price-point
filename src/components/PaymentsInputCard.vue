<template>
  <div id="payments-input-card" class="card">
    <h3>Payment Options</h3>
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'PaymentsInputCard',
  components: {
    Checkbox,
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
