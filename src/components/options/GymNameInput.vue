<template>
  <input
      id="gym-name-input"
      type="text"
      v-model="gymName"
      @input="handleInput"/>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'GymNameInput',
  computed: {
    ...mapState(['gymName']),
  },
  methods: {
    ...mapMutations(['setGymName']),
    handleInput(e) {
      this.setGymName(e.target.value);
    }
  }
}
</script>

<style scoped lang="scss">

</style>