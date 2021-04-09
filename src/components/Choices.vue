<template>
  <div class="flex-column align-center justify-center">
    <button
        v-for="choice in choices"
        :key="choice.idx"
        type="button"
        class="nes-btn flex-1"
        :class="{'fade-out': performFadeOut }"
        @click="choiceClicked(choice)"
    >
      {{ choice.value }}
    </button>
  </div>
</template>

<script>
import { SELECTED_DIALOGUE_CHOICE_ACTION, PLAYER_CHOICE_PAUSED_ACTION } from '../store'
import { choiceSideEffects } from '../dialogue/choiceSideEffects'

export default {
  props: {
    choices: {
      type: Array,
      default: () => [],
    },
    fadeOut: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    performFadeOut: false,
  }),
  methods: {
    async choiceClicked(choice) {
      if (choiceSideEffects[choice.choiceId]) {
        await this.$store.dispatch(PLAYER_CHOICE_PAUSED_ACTION, {
          sideEffect: choiceSideEffects[choice.choiceId],
          choiceIdx: choice.idx
        })
        return
      }
      await this.$store.dispatch(SELECTED_DIALOGUE_CHOICE_ACTION, choice.idx)
      if (this.fadeOut) {
        this.performFadeOut = true
      }
    },
  },
}
</script>

<style lang="scss">
.fade-in {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 1s;
}
.fade-out {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 2s, opacity 2s;
}
</style>
