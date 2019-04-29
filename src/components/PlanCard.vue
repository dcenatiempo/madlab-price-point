<template>
  <div id="plan-card" class="card">
    <h3>Plan Options</h3>
    <div class="list">
      <template v-for="option in planOptions">
        <checkbox :key="`frequency-check-${option.id}`" :id="option.id" v-model="option.checked"/>
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
  name: 'PlanCard',
  components: {
    IntegerInput,
    Checkbox,
  },
  data() {
    return  {
      planOptions: [
        {
          id: "base",
          checked: true,
          value: 2,
          label: "Base",
        }, {
          id: "bronze",
          checked: true,
          value: 6,
          label: "Bronze",
        }, {
          id: "silver",
          checked: true,
          value: 12,
          label: "Silver",
        }, {
          id: "gold",
          checked: true,
          value: 24,
          label: "Gold",
        }, {
          id: "platinum",
          checked: true,
          value: 48,
          label: "Platinum",
        }
      ]
    
    }
  }
}
</script>

<style lang="scss">
#plan-card {
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