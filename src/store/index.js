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
export const GAME_STORY_PROGRESSED_ACTION = 'GAME_STORY_PROGRESSED_ACTION'
export const DIALOGUE_COMPLETE_ACTION = 'DIALOGUE_COMPLETE_ACTION'
const UPDATE_PLAYER_MUTATION = 'UPDATE_PLAYER_MUTATION'
const REFRESH_STORY_MUTATION = 'REFRESH_STORY_MUTATION'
const SET_CHOICE_SIDE_EFFECT_MUTATION = 'SET_CHOICE_SIDE_EFFECT_MUTATION'
export const ADD_NEW_LINE_MUTATION = 'ADD_NEW_LINE_MUTATION'
export const ADD_SCENE_TEXT_MUTATION = 'ADD_SCENE_TEXT_MUTATION'
const INCREMENT_GAME_PROGRESS_MUTATION = 'INCREMENT_GAME_PROGRESS_MUTATION'
const SET_RECENT_STORY_MUTATION = 'SET_RECENT_STORY_MUTATION'
const SET_STORY_MODE_MUTATION = 'SET_STORY_MODE_MUTATION'
const RESET_STORY_SCENE_TEXT_MUTATION = 'RESET_STORY_SCENE_TEXT_MUTATION'

const emptyStorySceneModel = {
  unPlayedLines: [],
  playedLines: [],
  currentLine: {},
}

export default new Vuex.Store({
  state: {
    player: {},
    sideEffect: null,
    progress: 100,
    messages: [],
    storyMode: false,
    story: {
      sceneText: [],
      currentChoices: {},
      currentTags: [],
      globals: {},
    },
    storyMemory: {
      recentStory: null,
      city: 'St. Louis',
    },
    storySceneText: { ...emptyStorySceneModel},
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
      commit(SET_RECENT_STORY_MUTATION, storyName)
      commit(SET_STORY_MODE_MUTATION, true)
      commit(REFRESH_STORY_MUTATION)
    },
    [DIALOGUE_COMPLETE_ACTION]({ commit }) {
      commit(RESET_STORY_SCENE_TEXT_MUTATION)
      commit(SET_STORY_MODE_MUTATION, false)
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
    [GAME_STORY_PROGRESSED_ACTION]({ commit }) {
      commit(INCREMENT_GAME_PROGRESS_MUTATION)
    },
  },
  mutations: {
    [REFRESH_STORY_MUTATION](state) {
      Vue.set(state, 'story', getStory())
    },
    [UPDATE_PLAYER_MUTATION]: setValue('player'),
    [SET_CHOICE_SIDE_EFFECT_MUTATION]: setValue('sideEffect'),
    [SET_STORY_MODE_MUTATION]: setValue('storyMode'),
    [INCREMENT_GAME_PROGRESS_MUTATION](state) {
      Vue.set(state, 'progress', state.progress += 1)
    },
    [SET_RECENT_STORY_MUTATION](state, story) {
      Vue.set(state.storyMemory, 'recentStory', story)
    },
    [RESET_STORY_SCENE_TEXT_MUTATION](state) {
      Vue.set(state, 'storySceneText', {...emptyStorySceneModel})
    },
    [ADD_NEW_LINE_MUTATION](state) {
      const lineToLoad = state.storySceneText.unPlayedLines[state.storySceneText.unPlayedLines.length -1]
      state.storySceneText.unPlayedLines.pop()
      Vue.set(state.storySceneText, 'unPlayedLines', state.storySceneText.unPlayedLines)
      Vue.set(state.storySceneText, 'currentLine', lineToLoad)
      Vue.set(state.storySceneText, 'playedLines', [...state.storySceneText.playedLines.concat([lineToLoad])])
    },
    [ADD_SCENE_TEXT_MUTATION](state, text) {
      Vue.set(state.storySceneText, 'unPlayedLines', text)
    },
  },
  modules: {},
})
