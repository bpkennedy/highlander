import { Sprite } from './Sprite'

export class Character extends Sprite {
  constructor({ name, img, description }) {
    super({ img })
    this.name = name
    this.description = description
    this.img = img
  }
}
