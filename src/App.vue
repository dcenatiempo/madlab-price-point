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
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  width: 100vw;
  margin: auto;

  button {
    font-size: 1em;
    padding: 1em;
    border: 1px solid gray;
    border-radius: .25em;
    background: white;
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
