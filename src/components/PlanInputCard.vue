<template>
  <div id="plan-input-card" class="card">
    <h3>Plan Options</h3>
    <div class="list">
      <template v-for="option in planOptions">
        <checkbox
            :key="`frequency-check-${option.id}`"
            :id="option.id"
            v-model="option.checked"
            :disabled="disabled(option)" />
        <label :key="`frequency-label-${option.id}`" :for="option.id">{{option.label}}</label>
        <integer-input
            :key="`frequency-input-${option.id}`"
            v-model="option.value"
            :min="0"
            :max="365"/>
      </template>
    </div>
  </div>
</template>

<script>
import IntegerInput from '@/components/inputs/IntegerInput.vue';
import Checkbox from '@/components/inputs/Checkbox.vue';

export default {
  name: 'PlanInputCard',
  components: {
    IntegerInput,
    Checkbox,
  },
  data() {
    return  {
    }
  },
  props: ['planOptions'],
  computed: {
    count() {
      return this.planOptions.filter(option => true === option.checked).length;
    }
  },
  methods: {
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