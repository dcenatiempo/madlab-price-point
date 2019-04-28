<template>
  <div id="app">
    <MadlabHeader />
    <main>
      <h1>Hybrid Pricing Calculator</h1>
      <div class="options">
        <rate-card />
        <plan-card />
        <frequency-card />
      </div>
    </main>
    <footer><span>©2019 Madlab Group</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
  </div>
</template>

<script>
import MadlabHeader from '@/components/MadlabHeader.vue';
import RateCard from '@/components/RateCard.vue';
import PlanCard from '@/components/PlanCard.vue';
import FrequencyCard from '@/components/FrequencyCard.vue';

export default {
  name: 'app',
  components: {
    MadlabHeader,
    RateCard,
    PlanCard,
    FrequencyCard,
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
