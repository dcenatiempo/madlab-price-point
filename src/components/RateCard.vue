<template>
  <div id="rate-card" class="card">
    <h3>Rate Options</h3>
    <div class="list">
      <label>Base Monthly Rate</label>
      <money-input v-model="monthlyRate"/>
      <label>PT Rate</label>
      <money-input v-model="ptRate"/>
    </div>
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

<style lang="scss">
#rate-card {
  .list {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: .5em;
    align-items: center;
    input {
      width: 5em;
      text-align: right;
    }
  }
}
</style>
