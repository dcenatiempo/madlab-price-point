<template>
  <header>
    <nav v-if="'Coach' === view">
      <a href="http://madlabgroup.com/" target="_blank">
        <img src="../assets/logo.png" alt="MadLab Group" />
      </a>
      <img src="../assets/moosecock_rooster_final.png" alt="Moose Cock" class="moose" />
    </nav>
    <nav class="client" v-if="'Client' === view">
      <img v-if="logo" :src="logo" />
      <h1>{{gymName}}</h1>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MadlabHeader',
  props: ['view'],
  computed: {
    ...mapState(['gymName', 'logo']),
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
      height: 90px;
      

      &.moose {
        height: 140px;
        margin-top: -20px;
      }
    }

    &.client {
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 3em;
        margin: 0;
        max-width: 100vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
