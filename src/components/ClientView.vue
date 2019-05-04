<template>
  <div id="client-view">
    <madlab-header view="Client"/>
    <main>
      <h1>{{gymnName}}</h1>
      <div class="options">
        <p-d-f />
        <switch-view />
      </div>
      <display />
    </main>
    <footer><span>©2019 {{gymnName}}</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
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
    ...mapState(['gymnName']),
  },
  methods: {
    ...mapMutations(['resetStore']),
  }
}
</script>

<style lang="scss">
#client-view {
  main {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
}
</style>
