<template>
  <div class="nes-container with-title is-centered is-dark">
    <span class="title">
      Main panel
    </span>
    <animated-typing
      class="flex-column full-height justify-center solid-opacity"
      :class="{ 'fade-out': slowFadeGameGreeting }"
      :strings="story.sceneText"
      :single-string="true"
      @onComplete="displayActions = true"
    />
    <button
        v-for="choice in story.currentChoices"
        :key="choice"
        type="button"
        class="nes-btn position-absolute bottom-center m-b-5 no-opacity"
        :class="{'fade-in': displayActions, 'fade-out': slowFadeGameGreeting }"
        @click="addFadeOut"
    >
      {{ choice }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    AnimatedTyping: () => import('../components/AnimatedTyping.vue'),
  },
  data: () => ({
    slowFadeGameGreeting: false,
    displayActions: false,
  }),
  methods: {
    addFadeOut() {
      this.slowFadeGameGreeting = true
    }
  },
  computed: {
    ...mapState(['story']),
  }
}
</script>

<style lang="scss">

.no-opacity { opacity: 0; }
.solid-opacity { opacity: 1; }

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
