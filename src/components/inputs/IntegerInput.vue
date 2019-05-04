<template>
  <input type="text"
    v-model="amount"
    @change="change"/>
</template>

<script>

export default {
  name: 'IntegerInput',
  data() {
    return {
      amount: 0,
    }
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5// Number.MAX_SAFE_INTEGER
    }
  },
  computed: {},
  methods: {
    forceRange(amount) {
      if (amount > this.max) {
        amount = this.max;
      } else if (amount < this.min) {
        amount = this.min
      }
      return amount;
    },
    format(event, shouldForceRange = false) {
      let amount = event.target.value;
      amount = amount.replace(/\D/g,'');
      amount = '' === amount ? 0 : parseInt(amount)

      if (shouldForceRange) {
        amount = this.forceRange(amount);
      }
      this.amount = amount;
      this.$emit('input', this.amount);
    },
    change(event) {
      this.format(event, true);
    },
    setAmount(value) {
      let rangedValue = this.forceRange(value);
      this.amount = rangedValue;
    }
  },
  created() {
    this.setAmount(this.value);
  },
  watch: {
    value(value) {
      this.setAmount(value);
    }
  }
}
</script>

<style scoped lang="scss">

</style>