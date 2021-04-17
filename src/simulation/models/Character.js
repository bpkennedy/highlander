import { CharacterSprite } from './Sprite'

export class Character extends Sprite {
  constructor({ id, name, img, description }) {
    super({ id, img })
    this.name = name
    this.description = description
    this.img = img
  }
}
