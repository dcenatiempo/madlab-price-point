<template>
  <div id="client-view">
    <madlab-header view="Client"/>
    <main>
      <!-- <h1>{{gymName}}</h1> -->
      <div class="options">
        <switch-view />
        <p-d-f />
      </div>
      <display />
    </main>
    <footer><span>&copy;2019 Madlab Group</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import MadlabHeader from '@/components/MadlabHeader.vue';
import Display from '@/components/Display.vue';
import PDF from '@/components/buttons/PDF.vue';
import SwitchView from '@/components/buttons/SwitchView.vue';

export default {
  name: 'ClientView',
  components: {
    MadlabHeader,
    Display,
    PDF,
    SwitchView,
  },
  computed: {
    ...mapState(['gymName']),
  },
  methods: {
    ...mapMutations(['resetStore']),
  }
}
</script>

<style lang="scss">
#client-view {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;

   main {
    margin-top: 2rem;
    flex-grow: 1;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 1rem;
    align-items: flex-start;

    .options {
      display: grid;
      grid-gap: 1rem;
      align-content: flex-start;
    }
  }
}
</style>
