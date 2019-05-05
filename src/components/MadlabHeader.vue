<template>
  <header>
    <nav v-if="'Coach' === view">
      <a href="http://madlabgroup.com/" target="_blank">
        <img src="../assets/logo.png" alt="MadLab Group" />
      </a>
      <img src="../assets/moosecock_rooster_final.png" alt="Moose Cock" />
    </nav>
    <nav class="client" v-if="'Client' === view">
      <h1>{{gymnName}}</h1>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MadlabHeader',
  props: ['view'],
  computed: {
    ...mapState(['gymnName']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  border-bottom:2px solid gray;
  height: 120px;
  nav {
    display: flex;
    justify-content: space-between;

    > a img {
      height: 16vw;
      max-height:90px;
    }
    
    > img {
      max-height: 24vw;
      height: 140px;
      margin-top: -20px;
    }

    &.client {
      justify-content: center;
      h1 {
        font-size: 3em;
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
