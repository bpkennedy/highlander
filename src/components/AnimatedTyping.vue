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
    singleString: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textToType() {
      return this.singleString ? [this.strings.join('<br><br>')] : this.strings
    }
  },
  created() {
    this.$nextTick(() => {
      typed('.typed', {
        strings: this.textToType,
        typeSpeed: 20,
        showCursor: true,
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
