<template>
  <span class="nes-text is-primary text-left">
    {{ toSimpleTime(action.date) }} {{ action.message }}
  </span>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    action: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toSimpleTime(date) {
      return DateTime.fromObject(date).toLocaleString(DateTime.TIME_SIMPLE)
    }
  }
}
</script>

<style lang="scss">

.text-left {
  text-align: left;
}
</style>
