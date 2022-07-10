import { player, playerKeys } from './players/player.js'
import { enemy, enemyKeys } from './players/enemy.js'
import { createCanvas } from './canvas/canvas.js'
import { animate } from './animate/animate.js'

createCanvas()
animate()

let playerAttacked = false
let enemyAttacked = false

window.addEventListener('keydown', (event) => {
  if (playerKeys[event.key]) {
    playerKeys[event.key].pressed = true
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = true
  }
  if (playerKeys[' '].pressed && !playerAttacked) {
    player.attack()
    playerAttacked = true
  }
  if (enemyKeys['Control'].pressed && !enemyAttacked) {
    enemy.attack()
    enemyAttacked = true
  }
})

window.addEventListener('keyup', (event) => {
  if (playerKeys[event.key]) {
    playerKeys[event.key].pressed = false
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = false
  }
  if (event.key == ' ') {
    playerAttacked = false
  }
  if (event.key == 'Control') {
    enemyAttacked = false
  }
})