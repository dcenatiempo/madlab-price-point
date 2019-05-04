<template>
  <button @click="resetStore">Reset</button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ResetButton',
  methods: {
    ...mapMutations(['resetStore']),
  }
}
</script>

<style lang="scss">

</style>
