export const ATT_QUICKENING = 'quickening'
export const ATT_HONOR = 'honor'
export const ATT_DOOM = 'doom'

export const attributesCatalog = {
  [ATT_QUICKENING]: ({ val, max } = { val: 5, max: 100 }) => ({
    display: 'Quickening',
    img: '',
    description: 'There is great power in the Quickening. But Nature has not given us equal shares. We are at one with all living things.',
    color: 'color-dark-normal',
    progressColor: 'progress-color-primary-normal',
    val,
    max,
  }),
  [ATT_HONOR]: ({ val, max } = { val: 25, max: 100 }) => ({
    display: 'Honor',
    img: '',
    description: 'Success without honor is an unseasoned dish; it will satisfy your hunger but it won’t taste good.',
    color: 'color-dark-normal',
    progressColor: 'progress-color-warning-normal',
    val,
    max,
  }),
  [ATT_DOOM]: ({ val, max } = { val: 2, max: 100 }) => ({
    display: 'Doom',
    img: '',
    description: 'Fear not death for the hour of your doom is set and none may escape it.',
    color: 'color-dark-normal',
    progressColor: 'progress-color-error-normal',
    val,
    max,
  }),
}
