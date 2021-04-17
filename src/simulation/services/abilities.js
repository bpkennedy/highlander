export const SENSE = 'sense'

export const abilitiesCatalog = {
  [SENSE]: ({ level, radius } = { level: 1, radius: 1}) => ({
    display: 'Sense',
    img: '',
    description: 'When other immortals are near enough you feel the Buzz - prickles on your neck, enhanced physical senses, and a surge of adrenaline.',
    level,
    radius,
  }),
}
