<template>
  <option-group
      id="frequency-input-card"
      label="Frequency Options"
      :tooltip="tooltip">
    <div class="list">
      <template v-for="option in frequencyOptions">
        <checkbox
            :key="`plan-check-${option.id}`"
            :id="option.id"
            v-model="option.checked"
            @input="setFrequencyOptions(frequencyOptions)"
            :disabled="disabled(option)" />
        <label :key="`plan-label-${option.id}`" :for="option.id">{{option.label}}</label>
      </template>
    </div>
  </option-group>
</template>

<script>
import { mapMutations } from 'vuex';
import OptionGroup from '@/components/options/OptionGroup.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'FrequencyInputCard',
  components: {
    OptionGroup,
    Checkbox,
  },
  data() {
    return  {
      tooltip: "How many client sessions allowed per week",
    }
  },
  props: ['frequencyOptions'],
  computed: {
    count() {
      return this.frequencyOptions.filter(option => true === option.checked).length;
    },
  },
  methods: {
    ...mapMutations(['setFrequencyOptions']),
    disabled(option) {
      return 1 >= this.count && option.checked
    }
  }
}
</script>

<style lang="scss">
#frequency-input-card {
  border: none;
  .list {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: .5em;
    align-items: center;
    input {
      width: 3em;
      text-align: center;
    }
  }
}
</style>