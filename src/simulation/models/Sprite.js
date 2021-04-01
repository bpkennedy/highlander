let idTicker = 1

export class Sprite {
  constructor({ id, img, x, y }) {
    this.id = id || idTicker++
    this.img = img || require('../../../public/portraits/666.webp')
    this.x = x || 0
    this.y = y || 0
  }
}
