<template>
  <input type="text"
    v-model="amount"
    @change="change"/>
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
      default: Number.MAX_SAFE_INTEGER
    }
  },
  computed: {},
  methods: {
    forceInRange(amount) {
      if (amount > this.max) {
        amount = this.max;
      } else if (amount < this.min) {
        amount = this.min
      }
      return amount;
    },
    format(event, shouldForceRange = false) {
      let amount = event.target.value;

      amount = amount.replace(/\D/g,'')/100;

      if (shouldForceRange) {
        amount = this.forceInRange(amount);
      }
      
      this.amount = formatter.format(amount);
      this.$emit('input', amount);
    },
    change(event) {
      this.format(event, true);
    },
    setAmount(value) {
      let rangedValue = this.forceInRange(value);
      this.amount = formatter.format(rangedValue);
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