<template>
<div id="reset-button">
  <button @click="maybeReset">Reset Options</button>
  <help-icon :text="tooltip"/>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import HelpIcon from '@/components/HelpIcon.vue';

export default {
  name: 'ResetButton',
  components: {
    HelpIcon,
  },
  data() {
    return {
      tooltip: "Careful! This will reset the Gymn Rate Options, Plan Options, and Payment Options!"
    }
  },
  methods: {
    ...mapMutations(['resetStore']),
    maybeReset() {
      if (confirm("Are you sure you want to reset the option values?")) {
        this.resetStore();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #app #reset-button {

    button {
      border: none;
      color: #0080c6;
    }
    
    display: flex;
    align-items: center;
  }
</style>
