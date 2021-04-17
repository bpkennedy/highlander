import {initKeys, initPointer, keyMap} from 'kontra'

export const initializeControls = () => {
  initKeys()
  keyMap['ShiftLeft'] = 'shift'
  initPointer()
}
