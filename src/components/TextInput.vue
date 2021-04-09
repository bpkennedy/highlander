<template>
  <div class="nes-field is-inline bg-color-dark-normal p-a-1">
    <label
        for="dark_field"
        class="color-default-normal"
    >
      What is your name?
    </label>
    <input
        type="text"
        id="dark_field"
        :name="name"
        class="nes-input is-dark"
        placeholder="Sean Connery"
        @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    currentValue: null,
  }),
  watch: {
    value(newValue) {
      this.currentValue = newValue
    }
  }
}
</script>

<style lang="scss">
</style>
