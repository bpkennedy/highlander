import { Story } from 'inkjs'

let inkInstance

export const getStory = () => {
  // return {
  //   ...inkInstance,
  //   gameData: loadStoryGameData(),
  // }
  return loadStoryGameData()
}

export const buildStory = async (storyTitle) => {
  inkInstance = null
  const inkContent = (await import(`./generated/${storyTitle}.js`)).default
  inkInstance = new Story(inkContent)
}

export const chooseDialogueChoice = choiceIndex => {
  inkInstance.ChooseChoiceIndex(choiceIndex)
}

export const loadStoryGameData = () => {
  const sceneText = []
  let currentTags = []
  while (inkInstance.canContinue) {
    sceneText.push(inkInstance.Continue())
    currentTags = currentTags.concat(inkInstance.currentTags)
  }
  const {currentChoices, variablesState} = inkInstance

  if (!inkInstance.canContinue && !currentChoices.length) {
    // console.log('game over')
  }

  return {
    globals: transformVariablesState(variablesState),
    currentChoices: transformCurrentChoices(currentChoices),
    sceneText,
    currentTags,
  }
}

function transformVariablesState(variablesState) {
  const globals = {}
  variablesState._globalVariables.forEach((val, key) => globals[key] = val.value)
  return globals
}

function transformCurrentChoices(currentChoices) {
  const choices = {}
  currentChoices.forEach((val, key) => choices[key] = val.text)
  return choices
}



// export const startLocation = [
//   `It's cold. You pull your clothes tighter around you.`,
//   `It smells like garbage, piss, and motor oil.`,
//   `You can see the mouth of the alleyway, where cars are swishing past. No-one's paying you a second thought.`,
//   `Your mouth feels like you smoked a pack of cigarettes in ten minutes. You need water. Or maybe a whiskey?`,
//   `When did it get dark? The dingy alley wall sconces are flickering and wash the wet asphalt with a hazy yellow glow.`,
//   `Well, at least you're not dead. Oh wait.`,
// ]
