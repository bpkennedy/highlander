import Vue from 'vue'
import Vuex from 'vuex'
import { buildStory, chooseDialogueChoice, getStory } from '@/dialogue'

Vue.use(Vuex)

const setValue = key => (state, val) => {
  state[key] = Object.freeze(val)
}

export const STARTED_DIALOGUE_ACTION = 'STARTED_DIALOGUE_ACTION'
export const SELECTED_DIALOGUE_CHOICE_ACTION = 'SELECTED_DIALOGUE_CHOICE_ACTION'
export const PLAYER_CHOICE_PAUSED_ACTION = 'PLAYER_CHOICE_PAUSED_ACTION'
const REFRESH_STORY_MUTATION = 'REFRESH_STORY_MUTATION'
const SET_PAUSED_CHOICE = 'SET_PAUSED_CHOICE'

export default new Vuex.Store({
  state: {
    pausedChoice: 0,
    messages: [],
    newPlayerForm: {},
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
    [PLAYER_CHOICE_PAUSED_ACTION]({ commit }, choice) {
      commit(SET_PAUSED_CHOICE, choice)
    }
  },
  mutations: {
    [REFRESH_STORY_MUTATION](state) {
      Vue.set(state, 'story', getStory())
    },
    [SET_PAUSED_CHOICE]: setValue('pausedChoice'),
  },
  modules: {},
})
