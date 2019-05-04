<template>
  <option-group
      id="plan-input-card"
      label="Plan Options"
      :tooltip="tooltip">
    <div class="list">
      <template v-for="option in planOptions">
        <checkbox
            :key="`plan-check-${option.id}`"
            :id="option.id"
            v-model="option.checked"
            @input="setPlanOptions(planOptions)"
            :disabled="disabled(option)" />
        <label :key="`plan-label-${option.id}`" :for="option.id">{{option.label}}</label>
        <integer-input
            :key="`plan-input-${option.id}`"
            v-model="option.value"
            @input="setPlanOptions(planOptions)"
            :min="0"
            :max="365"/>
      </template>
    </div>
  </option-group>
</template>

<script>
import { mapMutations } from 'vuex';
import OptionGroup from '@/components/options/OptionGroup.vue';
import IntegerInput from '@/components/inputs/IntegerInput.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'PlanInputCard',
  components: {
    OptionGroup,
    IntegerInput,
    Checkbox,
  },
  data() {
    return  {
      tooltip: "The number of pt session per year",
    }
  },
  props: ['planOptions'],
  computed: {
    count() {
      return this.planOptions.filter(option => true === option.checked).length;
    },
  },
  methods: {
    ...mapMutations(['setPlanOptions']),
    disabled(option) {
      return 1 >= this.count && option.checked
    }
  }
}
</script>

<style lang="scss">
#plan-input-card {
  .list {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-gap: .5em;
    align-items: center;
    input {
      width: 3em;
      text-align: center;
    }
  }
}
</style>