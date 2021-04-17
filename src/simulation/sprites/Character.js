import { Base } from './Base'

export class Character extends Base {
  constructor({ id, name, img, description }) {
    super({ id, img })
    this.name = name
    this.description = description
    this.img = img
  }
}
