<template>
  <div id="app">
    <MadlabHeader />
    <main>
    <h1>Hybrid Pricing Calculator</h1>
    <rate-card />
    <plan-card />
    <frequency-card />
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

  main {
    flex-grow: 1;
  }

  footer {
    padding: 5px;
    display: grid;
    text-align: center;
  }
}
</style>
