let debugContext

export const startSimulation = (debugMode = false) => {
  if (debugMode) {
    const canvas = document.getElementById('debug')
    debugContext = canvas.getContext('2d')
  }
  window.requestAnimationFrame(gameLoop);
}

const gameLoop = timeStamp => {
  !debugContext ? draw() : drawDebug(timeStamp)
  window.requestAnimationFrame(gameLoop)
}

let secondsPassed
let oldTimeStamp
let fps
const drawDebug = timeStamp => {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000
  oldTimeStamp = timeStamp
  fps = Math.round(1 / secondsPassed)

  debugContext.fillStyle = 'white'
  debugContext.fillRect(0, 0, 100, 100)
  debugContext.font = '16px Arial'
  debugContext.fillStyle = 'black'
  debugContext.fillText('FPS: ' + fps, 10, 30)
}

const draw = () => {
  // TODO draw stuff later
}
