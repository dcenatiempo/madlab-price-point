<template>
  <button @click="switchView">{{btnText}}</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'SwitchView',
  computed: {
    ...mapState(['view']),
    btnText() {
      return `Switch to ${this.view} View`;
    }
  },
  methods: {
    ...mapMutations(['switchView']),
  }
}
</script>

<style lang="scss">

</style>
