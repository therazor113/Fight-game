import { canvas, c }  from '../canvas/canvas.js'
import { player, playerKeys } from '../players/player.js'
import { enemy, enemyKeys } from '../players/enemy.js'

export function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  if (playerKeys.w.pressed) {
    player.velocity.y = -5
  }
  if (playerKeys.a.pressed) {
    player.velocity.x = -1
  } 
  if (playerKeys.d.pressed) {
    player.velocity.x = 1
  }

  enemy.velocity.x = 0
  if (enemyKeys.ArrowUp.pressed) {
    enemy.velocity.y = -5
  }
  if (enemyKeys.ArrowLeft.pressed) {
    enemy.velocity.x = -1
  } 
  if (enemyKeys.ArrowRight.pressed) {
    enemy.velocity.x = 1
  }
}