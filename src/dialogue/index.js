import store, { DIALOGUE_COMPLETE_ACTION } from '../store'
import { Story } from 'inkjs'

let inkInstance

export const getStory = () => {
  return loadStoryGameData()
}

export const buildStory = async (storyTitle) => {
  inkInstance = null
  const { storyContent } = await import(`./generated/${storyTitle}.js`)
  inkInstance = new Story(storyContent)
}

export const chooseDialogueChoice = choiceIndex => {
  inkInstance.ChooseChoiceIndex(choiceIndex)
}

export const loadStoryGameData = () => {
  const sceneText = []
  let currentTags = []
  while (inkInstance.canContinue) {
    const text = inkInstance.Continue()
    const hydratedText = fillVarReferences(text)
    sceneText.unshift({
      speakerId: hydratedText.substring(0, 3),
      text: hydratedText.slice(4),
    })
    currentTags = currentTags.concat(inkInstance.currentTags)
  }
  const {currentChoices, variablesState} = inkInstance

  if (!inkInstance.canContinue && !currentChoices.length) {
    store.dispatch(DIALOGUE_COMPLETE_ACTION)
  }

  return {
    globals: transformVariablesState(variablesState),
    currentChoices: transformCurrentChoices(currentChoices),
    sceneText,
    currentTags,
  }
}

function fillVarReferences(textString) {
  let newString = textString
  const usedMarkers = textString.match(/[^[\]]+(?=]])/gm)
  if (usedMarkers) {
    for (const marker of usedMarkers) {
      const stateValue = marker.split('.').reduce((o,i)=>o[i], store.state)
      newString = textString.replace(`[[${marker}]]`, stateValue)
    }
  }
  return newString
}

function transformVariablesState(variablesState) {
  const globals = []
  variablesState._globalVariables.forEach((val, key) => {
    globals.push({
      idx: key,
      value: val.value,
    })
  })
  return globals
}

function transformCurrentChoices(currentChoices) {
  const choices = []
  currentChoices.forEach((val, key) => {
    choices.push({
      choiceId: val.text.substring(val.text.length -3),
      idx: key,
      value: val.text.substring(val.text.length - 4, 0),
    })
  })
  return choices
}



// export const startLocation = [
//   `It's cold. You pull your clothes tighter around you.`,
//   `It smells like garbage, piss, and motor oil.`,
//   `You can see the mouth of the alleyway, where cars are swishing past. No-one's paying you a second thought.`,
//   `Your mouth feels like you smoked a pack of cigarettes in ten minutes. You need water. Or maybe a whiskey?`,
//   `When did it get dark? The dingy alley wall sconces are flickering and wash the wet asphalt with a hazy yellow glow.`,
//   `Well, at least you're not dead.`,
// ]
