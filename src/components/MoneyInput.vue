<template>
  <input type="text"
    v-model="amount"
    @input="format"/>
</template>

<script>

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default {
  name: 'MoneyInput',
  data() {
    return {
      amount: 0,
    }
  },
  props: ['value'],
  computed: {},
  methods: {
    format(event) {
      let amount = event.target.value;

      amount = amount.replace(/\D/g,'')/100;
      
      this.amount = formatter.format(amount);
      this.$emit('input', amount);
    }
  },
  created() {
    this.amount = formatter.format(this.value);
  }
}
</script>

<style scoped lang="scss">

</style>