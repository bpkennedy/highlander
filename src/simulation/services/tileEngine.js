import { load, TileEngine, dataAssets } from 'kontra'

export const TILE_WIDTH = 50
export const MAP_TILE_WIDTH = 6
export const MAP_TILE_HEIGHT = 6
export const MAP_OUTER_OFFSET = 10

export const initializeTileEngine = async ({
    urls
  } = {
    urls: ['H_Floors.png', 'H_Floors.json']
  }) => {
  await load(urls[0], urls[1])
  dataAssets['H_Floors.json'] = {
    ...dataAssets['H_Floors.json'],
    tilewidth: TILE_WIDTH,
    tileheight: TILE_WIDTH,
    width: MAP_TILE_WIDTH,
    height: MAP_TILE_HEIGHT,
    tilesets: [{
      firstgid: 1,
      image: urls[0],
    }],
    layers: [{
      name: 'ground',
      data: [ 1, 2, 1, 2, 3, 2,
        2, 1, 2, 3, 2, 1,
        1, 2, 3, 2, 1, 2,
        1, 2, 3, 2, 1, 2,
        1, 2, 3, 2, 1, 2,
        1, 2, 3, 2, 1, 2,
      ]
    }]
  }
  return TileEngine(dataAssets[urls[1]])
}
