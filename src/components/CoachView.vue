<template>
  <div id="coach-view">
    <madlab-header view="Coach"/>
    <main>
      <h1>Hybrid Pricing Calculator</h1>
      <all-options />
      <display />
    </main>
    <footer><span>©2019 Madlab Group</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
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

  main {
    flex-grow: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 1rem;

    h1 {
      grid-column: 1 / 3;
    }
  }
}
</style>
