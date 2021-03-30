<template>
  <div class="nes-container with-title is-centered is-dark">
    <span class="title">
      Main panel
    </span>
    <animated-typing
      class="flex-column full-height align-center justify-center solid-opacity"
      :class="{ 'fade-out': slowFadeGameGreeting }"
      :strings="newGameGreeting"
      @onComplete="displayActions = true"
    />
    <button
        type="button"
        class="nes-btn position-absolute bottom-center m-b-5 no-opacity"
        :class="{'fade-in': displayActions, 'fade-out': slowFadeGameGreeting }"
        @click="addFadeOut"
    >
      Proceed
    </button>
  </div>
</template>

<script>
export default {
  components: {
    AnimatedTyping: () => import('../components/AnimatedTyping.vue'),
  },
  data: () => ({
    slowFadeGameGreeting: false,
    displayActions: false,
    newGameGreeting: [
      `From the dawn of time we came, moving silently down through the centuries.<br>
      <br>
      Living many secret lives,<br>
      struggling to reach the time of the Gathering,<br>
      when the few who remain will battle to the last.<br>
      <br>
      No one has ever known we were among you.
      <br><br>
      ...
      <br><br>
      ...
      <br><br><br>
      until now.`
    ],
  }),
  methods: {
    addFadeOut() {
      this.slowFadeGameGreeting = true
    }
  },
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
