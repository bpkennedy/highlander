import store, {PLAYER_CHOICE_UNPAUSED_ACTION, PLAYER_NAME_CHANGED_ACTION} from '@/store'

export const PICK_NAME_CHOICE = '001'

const pickName = {
  id: PICK_NAME_CHOICE,
  name: 'Pick Name',
  description: 'What is your name?',
  execute: async function(formData) {
    await store.dispatch(PLAYER_NAME_CHANGED_ACTION, formData.name)
    await store.dispatch(PLAYER_CHOICE_UNPAUSED_ACTION)
  },
}

export const choiceSideEffects = {
  [PICK_NAME_CHOICE]: inkChoiceIdx => ({ ...pickName, inkChoiceIdx }),
}
