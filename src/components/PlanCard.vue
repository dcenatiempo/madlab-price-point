<template>
  <div>
    Plan Card
    <label>Base</label>
    <integer-input v-model="base"/>
    <label>Bronze</label>
    <integer-input v-model="bronze"/>
    <label>Silver</label>
    <integer-input v-model="silver"/>
    <label>Gold</label>
    <integer-input v-model="gold"/>
    <label>Platinum</label>
    <integer-input v-model="platinum"/>
  </div>
</template>

<script>
import IntegerInput from '@/components/IntegerInput.vue';

export default {
  name: 'PlanCard',
  components: {
    IntegerInput,
  },
  data() {
    return  {
      base: 2,
      bronze: 4,
      silver: 6,
      gold: 12,
      platinum: 24,
    }
  }
}
</script>

<style scoped lang="scss">

</style>