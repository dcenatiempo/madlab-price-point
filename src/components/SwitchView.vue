<template>
  <div id="switch-view">
    <button @click="switchView">{{btnText}}</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'SwitchView',
  components: {},
  props: [],
  computed: {
    ...mapState(['view']),
    btnText() {
      return this.view + ' View';
    }
  },
  methods: {
    ...mapMutations(['switchView']),
  }
}
</script>

<style lang="scss">
#switch-view {

}
</style>
