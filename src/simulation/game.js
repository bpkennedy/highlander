import { init, Sprite, GameLoop, initKeys, keyMap, keyPressed, initPointer, getPointer, angleToTarget, load, TileEngine, dataAssets } from 'kontra'

const scenes = {
  'alley': {
    id: 'game'
  }
}

const TILE_WIDTH = 50
const MAP_TILE_WIDTH = 6
const MAP_TILE_HEIGHT = 6
const MAP_OUTER_OFFSET = 10
const CAMERA_PAN_SPEED = 3

const PLAYER_ZOOM_SPEED = 3

export const initGame = scene => {
  let { canvas } = init(scenes[scene].id)
  initKeys();
  initPointer();

  load('H_Floors.png', 'H_Floors.json')
    .then(assets => {

      dataAssets['H_Floors.json'] = {
        ...dataAssets['H_Floors.json'],
        tilewidth: TILE_WIDTH,
        tileheight: TILE_WIDTH,

        // map size in tiles
        width: MAP_TILE_WIDTH,
        height: MAP_TILE_HEIGHT,

        // tileset object
        tilesets: [{
          firstgid: 1,
          image: 'H_Floors.png',
        }],

        // layer object
        layers: [{
          name: 'ground',
          data: [ 1, 2, 1, 2, 3, 2,
            2, 1, 2, 3, 2, 1,
            1, 2, 3, 2, 1, 2,
            1, 2, 3, 2, 1, 2,
            1, 2, 3, 2, 1, 2,
            1, 2, 3, 2, 1, 2,
          ]
        }]}
      let tileEngine = TileEngine(dataAssets['H_Floors.json']);

      keyMap['ShiftLeft'] = 'shift'
      const spriteWidth = 6
      const spriteHeight = 6

      let circleSprite = Sprite({
        x: 0,
        y: 0,
        width: spriteWidth,
        height: spriteHeight,
        anchor: {x:0.5,y:0.5},
        color: 'blue',
        scaleY: -1,

        render: function() {
          this.context.fillStyle = this.color;
          this.context.beginPath();
          this.context.moveTo(0, 0);
          this.context.lineTo(this.width, 0);
          this.context.lineTo(this.width / 2, this.height);
          this.context.fill();
        }
      });

      let sprite = Sprite({
        x: 0,        // starting x,y position of the sprite
        y: 0,
        color: 'red',  // fill color of the sprite rectangle
        width: spriteWidth * 2,     // width and height of the sprite rectangle
        height: spriteHeight * 2,
        anchor: {x:0.5,y:0.5},
        dx: 0,
        dy: 0,
      });

      sprite.addChild(circleSprite)

      let loop = GameLoop({  // create the main game loop
        update: function() { // update the game state

          sprite.update();

          if (keyPressed('a')) {
            if (sprite.x > MAP_OUTER_OFFSET) {
              sprite.x = sprite.x - (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
            }
            tileEngine.sx -= CAMERA_PAN_SPEED
          }
          if (keyPressed('d')) {
            if (sprite.x < canvas.width - MAP_OUTER_OFFSET) {
              sprite.x = sprite.x + (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
            }
            tileEngine.sx += CAMERA_PAN_SPEED
          }
          if (keyPressed('w')) {
            if (sprite.y > MAP_OUTER_OFFSET) {
              sprite.y = sprite.y - (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
            }
            tileEngine.sy -= CAMERA_PAN_SPEED
          }
          if (keyPressed('s')) {
            if (sprite.y < canvas.height - MAP_OUTER_OFFSET) {
              sprite.y = sprite.y + (keyPressed('shift') ? PLAYER_ZOOM_SPEED : 1)
            }
            tileEngine.sy += CAMERA_PAN_SPEED
          }

          //rotate child sprite to follow mouse cursor
          const { x, y } = getPointer()
          sprite.children[0].rotation = angleToTarget(sprite, {x, y});
        },
        render: function() {
          tileEngine.render();
          sprite.render();
        }
      });

      loop.start();
      // start the game
      return canvas
    });
}
