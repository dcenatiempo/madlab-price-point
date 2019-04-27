<template>
  <input type="text"
    v-model="amount"
    @input="format"/>
</template>

<script>

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

      this.amount = amount.replace(/\D/g,'');
      
      this.$emit('input', parseInt(this.amount));
    }
  },
  created() {
    this.amount = this.value
  }
}
</script>

<style scoped lang="scss">

</style>