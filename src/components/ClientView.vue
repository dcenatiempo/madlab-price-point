<template>
  <div id="client-view">
    <madlab-header view="Client"/>
    <main>
      <h1>{{gymnName}}</h1>
      <div class="options">
        <p-d-f />
        <switch-view />
      </div>
      <display
          :rate-options="rateOptions"
          :plan-options="planOptions"
          :payments-options="paymentsOptions"/>
    </main>
    <footer><span>©2019 {{gymnName}}</span><span>Developed by &nbsp;<a href="http://dcenatiempo.com/" target="_blank">dcenatiempo.com</a></span></footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import MadlabHeader from '@/components/MadlabHeader.vue';
import Display from '@/components/Display.vue';
import PDF from '@/components/PDF.vue';
import SwitchView from '@/components/SwitchView.vue';

export default {
  name: 'ClientView',
  components: {
    MadlabHeader,
    Display,
    PDF,
    SwitchView,
  },
  computed: {
    ...mapState(['paymentsOptions', 'rateOptions', 'planOptions', 'gymnName']),
  },
  methods: {
    ...mapMutations(['resetStore']),
  }
}
</script>

<style lang="scss">

</style>
