<template>
  <div id="coach-view">
    <madlab-header view="Coach"/>
    <h1>Hybrid Pricing Calculator</h1>
    <main>
      <all-options />
      <display />
    </main>
    <footer><span>&copy;2019 Madlab Group</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
  </div>
</template>

<script>
import MadlabHeader from '@/components/MadlabHeader.vue';
import Display from '@/components/Display.vue';
import AllOptions from '@/components/options/AllOptions.vue';

export default {
  name: 'CoachView',
  components: {
    MadlabHeader,
    Display,
    AllOptions,
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
#coach-view {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;

  main {
    flex-grow: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 1rem;
    align-items: flex-start;

    h1 {
      grid-column: 1 / 3;
    }
  }
}
</style>
