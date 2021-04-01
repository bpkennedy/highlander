import { Story } from 'inkjs'
import beginning from '../dialogue/generated/beginning'

const inkStory = new Story(beginning)
console.log(inkStory.ContinueMaximally())

export const startLocation = [
  `It's cold. You pull your clothes tighter around you.`,
  `It smells like garbage, piss, and motor oil.`,
  `You can see the mouth of the alleyway, where cars are swishing past. No-one's paying you a second thought.`,
  `Your mouth feels like you smoked a pack of cigarettes in ten minutes. You need water. Or maybe a whiskey?`,
  `When did it get dark? The dingy alley wall sconces are flickering and wash the wet asphalt with a hazy yellow glow.`,
  `Well, at least you're not dead. Oh wait.`,
]
