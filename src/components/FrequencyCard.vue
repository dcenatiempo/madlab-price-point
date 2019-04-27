<template>
  <div>
    Rate Card
    <label>Weekly</label>
    <checkbox id="weekly" v-model="weekly"/>
    <label>Every 2 Weeks</label>
    <checkbox id="twoWeeks" v-model="twoWeeks"/>
    <label>Monthly</label>
    <checkbox id="monthly" v-model="monthly"/>
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
      weekly: false,
      twoWeeks: false,
      biMonthly: false,
      monthly: true,
      quarterly: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
