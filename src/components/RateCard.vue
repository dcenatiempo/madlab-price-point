<template>
  <div>
    Rate Card
    <label>Base Monthly Rate</label>
    <money-input v-model="monthlyRate"/>
    <label>PT Rate</label>
    <money-input v-model="ptRate"/>
  </div>
</template>

<script>
import MoneyInput from '@/components/MoneyInput.vue';

export default {
  name: 'RateCard',
  components: {
    MoneyInput,
  },
  data() {
    return  {
      monthlyRate: 100,
      ptRate: 10,
    }
  }
}
</script>

<style scoped lang="scss">

</style>
