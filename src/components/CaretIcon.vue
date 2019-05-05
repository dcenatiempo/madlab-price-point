<template>
  <span style="line-height: 0">
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="caret-icon" :class="{expanded: !down}"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" class=""></path></svg>
  </span>
</template>

<script>
export default {
  name: 'CaretIcon',
  components: {
  },
  data() {
    return {
    };
  },
  props: {
    down: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.caret-icon {
    height: 1.5rem;
    width: 1.5rem;
    transition: transform ease .3s;

  &.expanded {
    transform: rotateZ(-180deg);
  }
  path {
    fill: #0080c6;
  }
  &:hover {
    path {
      fill: #21afed;
    }
  }
}
</style>
