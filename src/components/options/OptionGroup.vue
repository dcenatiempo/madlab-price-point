<template>
  <div class="card">
    <label><span @click="collapsed = !collapsed"><caret-icon :down="!collapsed"/>{{label}}</span><help-icon :text="tooltip"/></label>
    <div class="collapsable" :class="{collapsed: !collapsed}">
      <slot />
    </div>
  </div>
</template>

<script>
import HelpIcon from '@/components/HelpIcon.vue';
import CaretIcon from '@/components/CaretIcon.vue';

export default {
  name: 'OptionGroup',
  components: {
    HelpIcon,
    CaretIcon
  },
  data() {
    return  {
      collapsed: false,
    }
  },
  props: ['label', 'tooltip'],
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.card {
  border-bottom: solid 1px gray;
  padding: 1em .5em;
  // margin-top: .5rem;

  div.collapsable {
    padding-top: 1em;
    overflow: hidden;
    // transition: transform ease 500ms;

    &.collapsed {
      height: 0;
      padding-top: 0em;
    }
  }

  &:last-child {
    border: none;
  }

  > label {
    display: flex;
    align-items: center;
    font-weight: 100;

    span:first-child {
      margin-right: .5em;
      display: flex;
    }
  }
}
</style>