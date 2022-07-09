import { playerKeys } from './players/player.js'
import { enemyKeys } from './players/enemy.js'
import { createCanvas } from './canvas/canvas.js'
import { animate } from './animate/animate.js'

createCanvas()
animate()

window.addEventListener('keydown', (event) => {
  if (playerKeys[event.key]) {
  playerKeys[event.key].pressed = true
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = true
  }
})

window.addEventListener('keyup', (event) => {
  if (playerKeys[event.key]) {
    playerKeys[event.key].pressed = false
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = false
  }
})