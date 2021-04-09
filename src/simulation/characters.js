import { Character } from './models/Character'
import { Player } from './models/Player'

export const NARRATOR_ID = '000'
export const PLAYER_ID = '001'
export const LAMBO_ID = '002'
export const BADGUY1_ID = '003'
export const BADGUY2_ID = '004'

const player = new Player({
  id: PLAYER_ID,
  name: 'Nameless',
  img: require('../../public/portraits/15.webp'),
  description: ``,
})

export const Narrator = new Character({
  id: NARRATOR_ID,
  name: '',
  img: '',
  description: ``,
})

export const Lambo = new Character({
  id: LAMBO_ID,
  name: 'Lambo',
  img: require('../../public/portraits/24.webp'),
  description: `He has super intense eyes, and you wince to look at him directly for more than a moment. Power seems to roll off of him in waves; you can almost feel it. For all his calm and collected demeanor, this is NOT someone to be trifled with. Especially since he's carrying that--what's it? Is that a broadsword!?`,
})

export const BadGuy1 = new Character({
  id: BADGUY1_ID,
  name: 'Thug 1',
  img: require('../../public/portraits/39.webp'),
  description: `Biff is a regular at the neighborhood pub, and he makes sure everybody knows it. Biff likes to read philosophy books, appreciate art, and meditate. Just kidding, Biff is a buttface.`,
})

export const BadGuy2 = new Character({
  id: BADGUY2_ID,
  name: 'Thug 2',
  img: require('../../public/portraits/77.webp'),
  description: `Noone knows much about Randy except for the fact that he is always with Biff, and he is always in agreement with him. I mean, try being your own man dude, wtf! Like, you don't need Biff's approval to feel good about yourself.`,
})

export const characters = {
  [NARRATOR_ID]: Narrator,
  [PLAYER_ID]: player,
  [LAMBO_ID]: Lambo,
  [BADGUY1_ID]: BadGuy1,
  [BADGUY2_ID]: BadGuy2,
}

export const updatePlayerName = name => {
  player.name = name
}
