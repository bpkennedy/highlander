<template>
  <span class="nes-text is-primary small-text text-left">{{ toSimpleTime(action.date) }} {{ action.message }}</span>
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
.small-text {
  font-size: .5rem;
}
.text-left {
  text-align: left;
}
</style>
