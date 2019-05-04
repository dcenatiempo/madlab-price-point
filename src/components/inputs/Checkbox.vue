<template>
  <label class="checkbox" :for="`${id}-checkbox`" ref="checkbox">
    <input
        type="checkbox"
        :id="`${id}-checkbox`"
        @input="handleInput"
        :checked="value"
        :disabled="disabled"/>
    <div class="box">
      <svg v-show="internalValue" class="check" xmlns="http://www.w3.org/2000/svg" :width="em" :height="em" :viewBox="`0 0 24 24`"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
    </div>
  </label>
</template>

<script>
// function randomId() {
//    return window.crypto.getRandomValues(new Uint32Array(1))[0];
// }

export default {
  name: 'checkbox',
  data() {
    return {
      internalValue: false,
      em: '16',
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  // computed: {},
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.checked);
    },
    setInternalValue(value) {
      this.internalValue = value;
    }
  },
  created() {
    this.setInternalValue(this.value);
  },
  mounted() {
    this.em = window.getComputedStyle(this.$refs.checkbox)['font-size'].replace(/px/g, '');
  },
  watch: {
    value(value) {
      this.setInternalValue(value);
    }
  }
}
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;

  input {
    z-index: -9999 !important;
    height: 1.4em !important;
    width: 1.4em !important;
    margin: 0 !important;
    position: absolute !important;
  }
  .box {
    background: white;
    height: 1.4em;
    width: 1.4em;
    border: solid 1px #2c3e50;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check {
    margin-top:.1em;
    fill: #2c3e50;
  }
}
</style>