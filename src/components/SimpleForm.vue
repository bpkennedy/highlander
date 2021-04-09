<template>
  <form :id="formId" @submit.prevent="validateForm">

    <text-input
        :value="form.name"
        name="name"
        @input="updateName($event)"
        class="flex-column"
    />

    <div v-if="!isValid" class="color-error-normal p-y-3">
      <div v-for="rule of this.tempRules" :key="rule.fieldName">
        {{ rule.message }}
      </div>
    </div>

    <button
        type="submit"
        class="nes-btn is-primary"
    >
      Enter
    </button>
  </form>
</template>

<script>
import Vue from 'vue'

export default {
  components: {
    TextInput: () => import('./TextInput.vue'),
  },
  props: {
    formId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isValid: true,
    form: {
      name: '',
    },
    rules: [{
      fieldName: 'name',
      message: 'Must enter a name',
      method: (val) => val && val.length
    }],
    tempRules: [],
  }),
  methods: {
    updateName(value) {
      Vue.set(this, 'form', { ...this.form, name: value })
    },
    validateForm() {
      this.isValid = true
      this.tempRules = []
      this.tempRules = [...this.rules]
      for (const rule of this.tempRules) {
        const actualValue = this.form[rule.fieldName]
        if (!!rule.method(actualValue) !== true) {
          this.tempRules._error = true
        }
      }
      if (this.tempRules.some(r => r._error)) {
        this.isValid = false
      } else {
        this.processForm()
      }
    },
    processForm() {
      this.$emit('submitted', this.form)
    }
  }
}
</script>

<style lang="scss">
</style>
