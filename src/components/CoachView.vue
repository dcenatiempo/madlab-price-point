<template>
  <div id="coach-view">
    <madlab-header view="Coach"/>
    <main>
      <h1>Hybrid Pricing Calculator</h1>
      <div class="options">
        <p-d-f />
        <switch-view />
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
import PDF from '@/components/PDF.vue';
import SwitchView from '@/components/SwitchView.vue';

export default {
  name: 'CoachView',
  components: {
    MadlabHeader,
    RateInputCard,
    PlanInputCard,
    FrequencyInputCard,
    Display,
    PDF,
    SwitchView,
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

</style>
