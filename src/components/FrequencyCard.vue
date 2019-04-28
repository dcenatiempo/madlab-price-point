<template>
  <div id="frequency-card" class="card">
    <h3>Frequency Options</h3>
    <div class="list">
      <template v-for="option in frequecyOptions">
        <checkbox :key="`frequency-inpute-${option.id}`" :id="option.id" v-model="option.value"/>
        <label :key="`frequency-label-${option.id}`" :for="option.id">{{option.label}}</label>
      </template>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';

export default {
  name: 'FrequencyCard',
  components: {
    Checkbox,
  },
  data() {
    return  {
      frequecyOptions: [
        {
          id: "weekly",
          value: false,
          label: "Weekly",
        }, {
          id: "twoWeeks",
          value: false,
          label: "Every 2 Weeks",
        }, {
          id: "biMonthly",
          value: false,
          label: "Twice a Month",
        }, {
          id: "monthly",
          value: true,
          label: "Monthly",
        }, {
          id: "quarterly",
          value: false,
          label: "Quarterly",
        },
      ]
    }
  }
}
</script>

<style lang="scss">
#frequency-card {
  .list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-gap: .5em;
    align-items: center;
  }
}
</style>
