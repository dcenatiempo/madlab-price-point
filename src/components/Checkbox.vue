<template>
  <label class="checkbox" :for="id">
    <input type="checkbox"
      :id="id"
      @input="handleInput"
      :checked="value"/>
    <div class="box">
    <span v-show="internalValue">
      <svg class="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
    </span>
    </div>
  </label>
</template>

<script>
function randomId(length) {
   return window.crypto.getRandomValues(new Uint32Array(1))[0];
}

export default {
  name: 'checkbox',
  data() {
    return {
      internalValue: false,
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: '',
    }
  },
  // computed: {},
  methods: {
    handleInput(event) {
      this.internalValue = true=== event.target.checked;

      this.$emit('input', this.internalValue);
    }
  },
  created() {
    this.internalValue = this.value
  }
}
</script>

<style scoped lang="scss">
.checkbox {
  input {
    display: none;
  }
  .box {
    height: 25px;
    width: 25px;
    border: solid 1px black;
  }
  .check {
    color: white;
  }
}
</style>