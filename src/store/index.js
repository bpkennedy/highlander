import Vue from 'vue'
import Vuex from 'vuex'
import { buildStory, chooseDialogueChoice, getStory } from '@/dialogue'

Vue.use(Vuex)

export const STARTED_DIALOGUE_ACTION = 'STARTED_DIALOGUE_ACTION'
export const SELECTED_DIALOGUE_CHOICE_ACTION = 'SELECTED_DIALOGUE_CHOICE_ACTION'
const REFRESH_STORY_MUTATION = 'REFRESH_STORY_MUTATION'

export default new Vuex.Store({
  state: {
    messages: [],
    story: {
      sceneText: [],
      currentChoices: {},
      currentTags: [],
      globals: {},
    },
  },
  actions: {
    async [STARTED_DIALOGUE_ACTION]({ commit }, storyName) {
      await buildStory(storyName)
      commit(REFRESH_STORY_MUTATION)
    },
    async [SELECTED_DIALOGUE_CHOICE_ACTION]({ commit }, choiceIndex) {
      chooseDialogueChoice(choiceIndex)
      commit(REFRESH_STORY_MUTATION)
    },
  },
  mutations: {
    [REFRESH_STORY_MUTATION](state) {
      Vue.set(state, 'story', getStory())
    },
  },
  modules: {}
})
