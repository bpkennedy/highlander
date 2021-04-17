import { Sprite } from 'kontra'
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '@/simulation/sprites/Base'

export class Triangle extends Sprite.class {
  constructor(props) {
    super(props)
    this.id = props.id || this.missingProp()
    this.x = props.x || 0
    this.y = props.y || 0
    this.color = props.color || 'blue'
    this.width = SPRITE_WIDTH
    this.height = SPRITE_HEIGHT
    this.anchor = { x:0.5, y:0.5 }
    this.scaleY = -1
  }

  missingProp() {
    throw new Error('No ID given for Base')
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(this.width, 0);
    this.context.lineTo(this.width / 2, this.height);
    this.context.fill();
  }
}
