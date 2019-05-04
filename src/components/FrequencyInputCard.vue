<template>
  <div id="frequency-input-card" class="card">
    <h3>Payment Options</h3>
    <div class="list">
      <template v-for="option in frequencyOptions">
        <checkbox
            :key="`frequency-input-${option.id}`"
            :id="option.id"
            v-model="option.value"
            @input="setFrequencyOptions(frequencyOptions)"
            :disabled="disabled(option)" />
        <label :key="`frequency-label-${option.id}`" :for="option.id">{{option.label}}</label>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'FrequencyInputCard',
  components: {
    Checkbox,
  },
  props: ['frequencyOptions'],
  computed: {
    count() {
      return this.frequencyOptions.filter(option => true === option.value).length;
    }
  },
  methods: {
    ...mapMutations(['setFrequencyOptions']),
    disabled(option) {
      return 1 >= this.count && option.value
    }
  }
}
</script>

<style lang="scss">
#frequency-input-card {
  .list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-gap: .5em;
    align-items: center;
  }
}
</style>
