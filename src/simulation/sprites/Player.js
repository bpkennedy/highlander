import { Base } from './Base'
import { itemCatalog, DOLLARS } from '@/simulation/services/inventory'
import { abilitiesCatalog, SENSE } from '@/simulation/services/abilities'
import {
  attributesCatalog,
  ATT_QUICKENING,
  ATT_DOOM,
  ATT_HONOR
} from '@/simulation/services/attributes'
import {
  statisticsCatalog,
  STAT_AGE,
  STAT_MORTALS_KILLED,
  STAT_IMMORTALS_KILLED,
  STAT_QUICKENINGS_GAINED,
  STAT_REGENERATED
} from '@/simulation/services/statistics'
import {angleToTarget, getPointer, keyPressed} from 'kontra'
import {Triangle} from '@/simulation/sprites/Triangle'
import {MAP_OUTER_OFFSET} from '@/simulation/services/tileEngine'

const PLAYER_ZOOM_SPEED = 3

export class Player extends Base {
  constructor({ id, name, img }) {
    super({ id, img })
    this.name = name
    this.x = 0
    this.y = 0
    this.stats = {
      [STAT_AGE]: statisticsCatalog[STAT_AGE](),
      [STAT_REGENERATED]: statisticsCatalog[STAT_REGENERATED](),
      [STAT_IMMORTALS_KILLED]: statisticsCatalog[STAT_IMMORTALS_KILLED](),
      [STAT_MORTALS_KILLED]: statisticsCatalog[STAT_MORTALS_KILLED](),
      [STAT_QUICKENINGS_GAINED]: statisticsCatalog[STAT_QUICKENINGS_GAINED](),
    }
    this.attributes = {
      [ATT_QUICKENING]: attributesCatalog[ATT_QUICKENING](),
      [ATT_HONOR]: attributesCatalog[ATT_HONOR](),
      [ATT_DOOM]: attributesCatalog[ATT_DOOM](),
    }
    this.abilities = {
      [SENSE]: abilitiesCatalog[SENSE](),
    }
    this.inventory = {
      [DOLLARS]: itemCatalog[DOLLARS]({ quantity: 10 }),
    }
    // setup child sprite for head rotation
    let triangle = new Triangle({ id: 'eee' })
    this.addChild(triangle)
  }

  draw() {
    super.draw()
  }

  update(canvas) {
    if (keyPressed('a')) {
      if (this.x > MAP_OUTER_OFFSET) {
        this.x = this.x - (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
      }
    }
    if (keyPressed('d')) {
      if (this.x < canvas.width - MAP_OUTER_OFFSET) {
        this.x = this.x + (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
      }
    }
    if (keyPressed('w')) {
      if (this.y > MAP_OUTER_OFFSET) {
        this.y = this.y - (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
      }
    }
    if (keyPressed('s')) {
      if (this.y < canvas.height - MAP_OUTER_OFFSET) {
        this.y = this.y + (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
      }
    }

    //rotate child sprite to follow mouse cursor
    const { x, y } = getPointer()
    this.children[0].rotation = angleToTarget(this, {x, y});
  }
}
