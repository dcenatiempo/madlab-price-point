<template>
  <input
      id="gymn-name-input"
      type="text"
      v-model="gymnName"
      @input="handleInput"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'GymnNameInput',
  computed: {
    ...mapState(['gymnName']),
  },
  methods: {
    ...mapMutations(['setGymnName']),
    handleInput(e) {
      this.setGymnName(e.target.value);
    }
  }
}
</script>

<style scoped lang="scss">

</style>