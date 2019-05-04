<template>
  <div id="app">
    <client-view v-if="'Client' === view"/>
    <coach-view v-if="'Coach' === view"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CoachView from '@/components/CoachView.vue';
import ClientView from '@/components/ClientView.vue';

export default {
  name: 'app',
  components: {
    CoachView,
    ClientView,
  },
  computed: {
    ...mapState(['view']),
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  max-width: 960px;
  width: 100vw;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;

  button {
    font-size: 1em;
    padding: 1em;
    border: 1px solid gray;
    border-radius: .25em;
  }
  input {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1em;
    line-height: 1em;
    padding: .125em;
    padding-bottom: 0;
  }
  label {
    font-size:1.1em;
    font-weight: 500;
  }

  footer {
    padding: 5px;
    display: grid;
    text-align: center;
  }
}
</style>
