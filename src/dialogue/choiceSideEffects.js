import store from '../store'

const PICK_NAME = '001'

export const choiceSideEffects = {
  [PICK_NAME]: pickName,
}

export const pickName = {
  id: PICK_NAME,
  name: 'Pick Name',
  description: 'What is your name?',
  callback: async function() {
    store.dispatch()
  },
}
