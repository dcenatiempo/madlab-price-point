<template>
  <div id="app">
    <MadlabHeader />
    <main>
      <h1>Hybrid Pricing Calculator</h1>
      <div class="options">
        <button @click="resetStore">Reset</button>
        <rate-input-card :rate-options="rateOptions"/>
        <plan-input-card :plan-options="planOptions"/>
        <frequency-input-card :frequency-options="frequencyOptions"/>
      </div>
      <display
          :rate-options="rateOptions"
          :plan-options="planOptions"
          :frequency-options="frequencyOptions"/>
    </main>
    <footer><span>©2019 Madlab Group</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import MadlabHeader from '@/components/MadlabHeader.vue';
import RateInputCard from '@/components/RateInputCard.vue';
import PlanInputCard from '@/components/PlanInputCard.vue';
import FrequencyInputCard from '@/components/FrequencyInputCard.vue';
import Display from '@/components/Display.vue';

export default {
  name: 'app',
  components: {
    MadlabHeader,
    RateInputCard,
    PlanInputCard,
    FrequencyInputCard,
    Display,
  },
  computed: {
    ...mapState(['frequencyOptions', 'rateOptions', 'planOptions']),
  },
  methods: {
    ...mapMutations(['resetStore']),
  }
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

  main {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .options {
      display: flex;
      flex-flow: row wrap;
    }
  }

  footer {
    padding: 5px;
    display: grid;
    text-align: center;
  }

  .card {
    border: solid 1px gray;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
  }
}
</style>
