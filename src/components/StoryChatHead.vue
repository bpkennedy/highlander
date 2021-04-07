<template>
  <div
      class="color-dark-normal flex-row"
      :class="{
        'align-end': position === 'left',
        'align-end flex-row-reverse': position === 'right',
      }"
  >
    <avatar
        v-if="character.id !== NARRATOR_ID"
        class="flex-1 z-up nes-container p-a-none"
        :image-url="character.img"
    />
    <div
        class="flex-1"
        :class="{
          'nes-balloon from-left left-chat align-end half-width': position === 'left',
          'nes-balloon from-right right-chat align-end half-width': position === 'right',
          'is-dark nes-container center-chat color-default-normal': position === 'center'
        }"
    >
      <div class="text-left">
        {{ character.name }}
      </div>
      <animated-typing
          :strings="sanitizedLine"
          :single-string="false"
          class="flex-column full-height justify-center solid-opacity"
      />
    </div>
  </div>
</template>

<script>
import { NARRATOR_ID } from '../simulation/characters'

export default {
  components: {
    Avatar: () => import('./Avatar.vue'),
    AnimatedTyping: () => import('./AnimatedTyping.vue'),
  },
  props: {
    character: {
      type: Object,
      required: true,
    },
    line: {
      type: Object,
      required: true,
    },
    position: {
      type: String,
      default: 'center',
      validator: function (value) {
        return ['left', 'right', 'center'].includes(value)
      },
    }
  },
  data: () => ({
    NARRATOR_ID
  }),
  computed: {
    sanitizedLine() {
      return this.line.text ? [this.line.text] : ['']
    }
  }
}
</script>

<style lang="scss">
.z-up {
  z-index: 4;
  max-width: 5.5rem;
}
</style>
