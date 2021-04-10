import Vue from 'vue'
import Vuex from 'vuex'
import { buildStory, chooseDialogueChoice, getStory } from '@/dialogue'
import { startSimulation } from '@/simulation'
import {characters, PLAYER_ID, updatePlayerName } from '@/simulation/characters'

Vue.use(Vuex)

const setValue = key => (state, val) => {
  state[key] = val
}

export const SIMULATION_STARTED_ACTION = 'SIMULATION_STARTED_ACTION'
export const STARTED_DIALOGUE_ACTION = 'STARTED_DIALOGUE_ACTION'
export const SELECTED_DIALOGUE_CHOICE_ACTION = 'SELECTED_DIALOGUE_CHOICE_ACTION'
export const PLAYER_CHOICE_PAUSED_ACTION = 'PLAYER_CHOICE_PAUSED_ACTION'
export const PLAYER_CHOICE_UNPAUSED_ACTION = 'PLAYER_CHOICE_UNPAUSED_ACTION'
export const PLAYER_NAME_CHANGED_ACTION = 'PLAYER_NAME_CHANGED_ACTION'
const UPDATE_PLAYER_MUTATION = 'UPDATE_PLAYER_MUTATION'
const REFRESH_STORY_MUTATION = 'REFRESH_STORY_MUTATION'
const SET_CHOICE_SIDE_EFFECT_MUTATION = 'SET_CHOICE_SIDE_EFFECT_MUTATION'
export const ADD_NEW_LINE_MUTATION = 'ADD_NEW_LINE_MUTATION'
export const ADD_SCENE_TEXT_MUTATION = 'ADD_SCENE_TEXT_MUTATION'

export default new Vuex.Store({
  state: {
    player: {},
    sideEffect: null,
    messages: [],
    unPlayedLines: [],
    playedLines: [],
    currentLine: {},
    story: {
      sceneText: [],
      currentChoices: {},
      currentTags: [],
      globals: {},
    },
  },
  actions: {
    [SIMULATION_STARTED_ACTION]({ commit }, debugMode) {
      startSimulation(debugMode)
      commit(UPDATE_PLAYER_MUTATION, characters[PLAYER_ID])
    },
    [PLAYER_NAME_CHANGED_ACTION]({ commit }, playerName) {
      updatePlayerName(playerName)
      commit(UPDATE_PLAYER_MUTATION, characters[PLAYER_ID])
    },
    async [STARTED_DIALOGUE_ACTION]({ commit }, storyName) {
      await buildStory(storyName)
      commit(REFRESH_STORY_MUTATION)
    },
    async [SELECTED_DIALOGUE_CHOICE_ACTION]({ commit }, choiceIndex) {
      chooseDialogueChoice(choiceIndex)
      commit(REFRESH_STORY_MUTATION)
    },
    [PLAYER_CHOICE_PAUSED_ACTION]({ commit }, sideEffect) {
      commit(SET_CHOICE_SIDE_EFFECT_MUTATION, sideEffect)

    },
    [PLAYER_CHOICE_UNPAUSED_ACTION]({ state, commit }) {
      chooseDialogueChoice(state.sideEffect.inkChoiceIdx)
      commit(SET_CHOICE_SIDE_EFFECT_MUTATION, null)
      commit(REFRESH_STORY_MUTATION)
    },
  },
  mutations: {
    [REFRESH_STORY_MUTATION](state) {
      Vue.set(state, 'story', getStory())
    },
    [UPDATE_PLAYER_MUTATION]: setValue('player'),
    [SET_CHOICE_SIDE_EFFECT_MUTATION]: setValue('sideEffect'),
    [ADD_NEW_LINE_MUTATION](state) {
      const lineToLoad = state.unPlayedLines[state.unPlayedLines.length -1]
      state.unPlayedLines.pop()
      Vue.set(state, 'unPlayedLines', state.unPlayedLines)
      Vue.set(state, 'currentLine', lineToLoad)
      Vue.set(state, 'playedLines', [...state.playedLines.concat([lineToLoad])])
    },
    [ADD_SCENE_TEXT_MUTATION](state, text) {
      Vue.set(state, 'unPlayedLines', text)
    },
  },
  modules: {},
})
