import { init, GameLoop } from 'kontra'
import { initializeTileEngine } from '@/simulation/services/tileEngine'
import { initializeControls } from '@/simulation/services/controls'
import { Player } from '@/simulation/sprites/Player'

const scenes = {
  'alley': {
    id: 'game'
  }
}

export const initGame = async (scene) => {
  let { canvas } = init(scenes[scene].id)
  initializeControls()

  let tileEngine = await initializeTileEngine()
  let player = new Player({
    id: '001',
    name: 'Nameless',
    img: require('../../public/portraits/15.webp'),
  })

  let loop = GameLoop({
    update: function() {
      player.update(canvas)
    },
    render: function() {
      tileEngine.render()
      player.render()
    }
  })

  loop.start()
  return canvas
}
