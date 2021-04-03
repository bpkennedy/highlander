import { Sprite } from './Sprite'

// Identity
const ID_NAME = {
  value: 'name',
  display: 'Name',
  img: '',
  description: `The character's name.`,
  val: 'Nameless',
}

// Statistics
const STAT_AGE = {
  value: 'age',
  display: 'Age',
  img: '',
  description: 'How many years the character has lived',
  val: 18,
}
const STAT_DIED_COUNT = {
  value: 'diedCount',
  display: 'Died Count',
  img: '',
  description: 'How many times the immortal has temporarily killed.',
  val: 1,
}
const STAT_IMMORTALS_KILLED = {
  value: 'immortalsKilled',
  display: 'Immortals Killed',
  img: '',
  description: 'How many immortals the character has temporarily killed.',
  val: 0,
}
const STAT_MORTALS_KILLED = {
  value: 'mortalsKilled',
  display: 'Mortals Killed',
  img: '',
  description: 'How many immortals the character has killed.',
  val: 0,
}
const STAT_IMMORTALS_QUICKENED = {
  value: 'immortalsQuickened',
  display: 'Immortals Quickened',
  img: '',
  description: 'How many immortals the character has permanently killed.',
  val: 0,
}

// Attributes
const ATT_QUICKENING = {
  value: 'quickening',
  display: 'Quickening',
  img: '',
  description: 'There is great power in the Quickening. But Nature has not given us equal shares. We are at one with all living things.',
  val: 1,
  max: 100,
}
const ATT_HONOR = {
  value: 'honor',
  display: 'Honor',
  img: '',
  description: 'Success without honor is an unseasoned dish; it will satisfy your hunger but it won’t taste good.',
  val: 25,
  max: 100,
}
const ATT_DOOM = {
  value: 'doom',
  display: 'Doom',
  img: '',
  description: 'Fear not death for the hour of your doom is set and none may escape it.',
  val: 1,
  max: 100,
}

// Actions
const ACTION_SENSE = {
  value: 'sense',
  display: 'Sense',
  img: '',
  description: 'When other immortals are near enough you feel the Buzz - prickles on your neck, enhanced physical senses, and a surge of adrenaline.',
  radius: 1,
  level: 1,
}

// Inventory
const INV_DOLLARS = {
  value: 'dollars',
  display: 'Dollars',
  img: '',
  description: 'Pay for things with this.',
  quantity: 4
}


export class Player extends Sprite {
  constructor({ id, name, img }) {
    super({ id, img })
    this[`${ID_NAME.value}`] = name

    // statistics
    this.stats = {
      [`${STAT_AGE.value}`]: { ...STAT_AGE },
      [`${STAT_DIED_COUNT.value}`]: { ...STAT_DIED_COUNT },
      [`${STAT_IMMORTALS_KILLED.value}`]: { ...STAT_IMMORTALS_KILLED },
      [`${STAT_IMMORTALS_QUICKENED.value}`]: { ...STAT_IMMORTALS_QUICKENED },
      [`${STAT_MORTALS_KILLED.value}`]: { ...STAT_MORTALS_KILLED },
    }

    // attributes
    this.attributes = {
      [`${ATT_QUICKENING.value}`]: { ...ATT_QUICKENING },
      [`${ATT_HONOR.value}`]: { ...ATT_HONOR },
      [`${ATT_DOOM.value}`]: { ...ATT_DOOM },
    }

    // actions
    this.actions = {
      [`${ACTION_SENSE.value}`]: { ...ACTION_SENSE },
    }

    // inventory
    this.inventory = {
      [`${INV_DOLLARS.value}`]: { ...INV_DOLLARS },
    }
  }
}
