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
  data: () => ({
    typed: null,
  }),
  methods: {
    typeText() {
      if (this.typed) {
        this.typed.destroy()
      }
      this.typed = typed('.typed', {
        strings: this.textToType,
        typeSpeed: 20,
        showCursor: true,
        onComplete: () => this.$emit('onComplete'),
        onBegin: () => this.$emit('onBegin'),
        onStart: () => this.$emit('onStart'),
        onDestroy: () => this.$emit('onDestroy'),
      })
    }
  },
  computed: {
    textToType() {
      return this.singleString ? [this.strings.join('<br><br>')] : this.strings
    }
  },
  watch: {
    strings: function () {
      this.typeText()
    },
  },
  created() {
    this.$nextTick(() => {
      this.typeText()
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
