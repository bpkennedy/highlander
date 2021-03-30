<template>
    <div class="typed" />
</template>

<script>
import { typed } from '../utils'

export default {
  props: {
    strings: {
      type: Array,
      default: () => [''],
    },
  },
  created() {
    this.$nextTick(() => {
      typed('.typed', {
        strings: this.strings,
        typeSpeed: 15,
        showCursor: false,
        onComplete: () => this.$emit('onComplete'),
        onBegin: () => this.$emit('onBegin'),
        onStart: () => this.$emit('onStart'),
        onDestroy: () => this.$emit('onDestroy'),
      })
    })
  }
}
</script>

<style lang="scss">
.typed {
  text-align: left;
}
.typed-cursor {
  display: none;
}
</style>
