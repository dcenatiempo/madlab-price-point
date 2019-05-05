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
      let view = 'Client';
      if ('Client' === this.view)
        view = 'Coach';
      return `Switch to ${view} View`;
    }
  },
  methods: {
    ...mapMutations(['switchView']),
  }
}
</script>

<style lang="scss">

</style>
