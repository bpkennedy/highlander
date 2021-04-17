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
          :line="storySceneText.currentLine"
      />
      <choices v-if="storySceneText.unPlayedLines.length === 0" :choices="story.currentChoices" />
      <story-chat-head
          v-if="speakingCharacter.id === PLAYER_ID"
          :character="speakingCharacter"
          :line="storySceneText.currentLine"
          position="left"
          class="flex-1"
      />
      <story-chat-head
          v-if="speakingCharacter.id !== PLAYER_ID && speakingCharacter.id !== NARRATOR_ID"
          :character="speakingCharacter"
          :line="storySceneText.currentLine"
          position="right"
          class="flex-1"
      />
    </div>
    <dialogue v-if="sideEffect && sideEffect.id === PICK_NAME_CHOICE" class="flex-column">
      <simple-form
          form-id="name"
          class="width-40 margin-auto p-t-10"
          @submitted="sideEffect.execute"
      />
    </dialogue>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PLAYER_ID, NARRATOR_ID, characters } from '@/simulation/characters'
import { PICK_NAME_CHOICE } from '@/dialogue/choiceSideEffects'
import { ADD_NEW_LINE_MUTATION, ADD_SCENE_TEXT_MUTATION } from '../store'

export default {
  components: {
    SimpleForm: () => import('../components/SimpleForm.vue'),
    Dialogue: () => import('../components/Dialogue.vue'),
    Choices: () => import('../components/Choices.vue'),
    Scene: () => import('../components/Scene.vue'),
    StoryChatHead: () => import('../components/StoryChatHead.vue'),
  },
  data: () => ({
    PLAYER_ID,
    NARRATOR_ID,
    PICK_NAME_CHOICE,
  }),
  methods: {
    touchedMainPanel() {
      if (this.storySceneText.unPlayedLines.length > 0) {
        this.$store.commit(ADD_NEW_LINE_MUTATION)
      }
    },
  },
  computed: {
    ...mapState(['story', 'sideEffect', 'storySceneText']),
    speakingCharacter() {
      return characters[this.storySceneText.currentLine.speakerId]
    },
  },
  watch: {
    story: function (val) {
      this.$store.commit(ADD_SCENE_TEXT_MUTATION, val.sceneText)
      this.$store.commit(ADD_NEW_LINE_MUTATION)
    },
  },
}
</script>
