export const STAT_AGE = 'age'
export const STAT_REGENERATED = 'regeneratedCount'
export const STAT_IMMORTALS_KILLED = 'immortalsKilled'
export const STAT_MORTALS_KILLED = 'mortalsKilled'
export const STAT_QUICKENINGS_GAINED = 'quickeningsAbsorbed'

export const statisticsCatalog = {
  [STAT_AGE]: ({ val } = { val: 18 }) => ({
    display: 'Age',
    img: '',
    description: 'How many years the character has lived',
    val,
  }),
  [STAT_REGENERATED]: ({ val} = { val: 1 }) => ({
    display: 'Regenerated Count',
    img: '',
    description: 'How many times the character has regenerated after being temporary killed.',
    val,
  }),
  [STAT_IMMORTALS_KILLED]: ({ val} = { val: 0 }) => ({
    display: 'Immortals Killed',
    img: '',
    description: 'How many immortals the character has killed.',
    val,
  }),
  [STAT_MORTALS_KILLED]: ({ val} = { val: 0 }) => ({
    display: 'Mortals Killed',
    img: '',
    description: 'How many mortals the character has killed.',
    val,
  }),
  [STAT_QUICKENINGS_GAINED]: ({ val} = { val: 1 }) => ({
    display: 'Quickenings Absorbed',
    img: '',
    description: 'How many Quickenings the character has absorbed.',
    val,
  }),
}
