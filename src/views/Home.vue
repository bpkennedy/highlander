<template>
  <div
      class="nes-container with-title is-centered is-dark"
      @click="touchedMainPanel"
  >
    <span class="title position-relative z-2">
      Main panel
    </span>

    <scene image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/41694069/original/66a90c41f4dbbe1fcbfe6c4a4a4f03dc5ebea34b/create-a-pixel-art-background-and-scenery.png" />

    <div
        v-if="speakingCharacter"
        class="flex-column flex-1"
    >
      <story-chat-head
          v-if="speakingCharacter.id === NARRATOR_ID"
          :character="speakingCharacter"
          :line="currentLine"
      />
      <choices v-if="unPlayedLines.length === 0" :choices="story.currentChoices" />
      <story-chat-head
          v-if="speakingCharacter.id === PLAYER_ID"
          :character="speakingCharacter"
          :line="currentLine"
          position="left"
          class="flex-1"
      />
      <story-chat-head
          v-if="speakingCharacter.id !== PLAYER_ID && speakingCharacter.id !== NARRATOR_ID"
          :character="speakingCharacter"
          :line="currentLine"
          position="right"
          class="flex-1"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { PLAYER_ID, NARRATOR_ID, characters } from '../simulation/characters'

export default {
  components: {
    Choices: () => import('../components/Choices.vue'),
    Scene: () => import('../components/Scene.vue'),
    StoryChatHead: () => import('../components/StoryChatHead.vue'),
  },
  data: () => ({
    unPlayedLines: [],
    playedLines: [],
    currentLine: {},
    PLAYER_ID,
    NARRATOR_ID,
  }),
  methods: {
    touchedMainPanel() {
      if (this.unPlayedLines.length > 0) {
        this.addNewLine()
      }
    },
    addNewLine() {
      const lineToLoad = this.unPlayedLines.pop()
      Vue.set(this, 'currentLine', lineToLoad)
      Vue.set(this, 'playedLines', this.playedLines.concat([lineToLoad]))
    },
  },
  computed: {
    ...mapState(['story']),
    speakingCharacter() {
      return characters[this.currentLine.speakerId]
    },
  },
  watch: {
    story: function (val) {
      Vue.set(this, 'unPlayedLines', val.sceneText)
      this.addNewLine()
    },
  },
}
</script>

<style lang="scss">
.z-2 {
  z-index: 2;
}
</style>
