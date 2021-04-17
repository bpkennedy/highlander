import { Sprite } from 'kontra'

export const SPRITE_WIDTH = 6
export const SPRITE_HEIGHT = 6

export class Base extends Sprite.class {
  constructor(props) {
    super(props)
    this.id = props.id || this.missingProp()
    this.x = props.x || 0
    this.y = props.y || 0
    this.color = props.color || 'red'
    this.width = SPRITE_WIDTH * 2
    this.height = SPRITE_HEIGHT * 2
    this.anchor = { x:0.5, y:0.5 }
    this.dx = props.dx || 0
    this.dy = props.dy || 0
  }

  missingProp() {
    throw new Error('No ID given for Base')
  }

  draw() {
    super.draw()
  }
}
