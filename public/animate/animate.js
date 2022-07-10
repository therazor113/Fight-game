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
    player.velocity.x = -5
  } 
  if (playerKeys.d.pressed) {
    player.velocity.x = 5
  }

  enemy.velocity.x = 0
  if (enemyKeys.ArrowUp.pressed) {
    enemy.velocity.y = -5
  }
  if (enemyKeys.ArrowLeft.pressed) {
    enemy.velocity.x = -5
  } 
  if (enemyKeys.ArrowRight.pressed) {
    enemy.velocity.x = 5
  }

  if (
    player.attackBox.position.x + player.attackBox.width >= enemy.position.x
    && player.attackBox.position.x <= enemy.position.x + enemy.width 
    && player.attackBox.position.y + player.attackBox.height >= enemy.position.y
    && player.attackBox.position.y <= enemy.position.y + enemy.height
    && player.isAttacking
    ) {
    player.isAttacking = false
    console.log('player hit!') 
  }

  if (
    enemy.attackBox.position.x + enemy.attackBox.width >= player.position.x
    && enemy.attackBox.position.x <= player.position.x + player.width 
    && enemy.attackBox.position.y + enemy.attackBox.height >= player.position.y
    && enemy.attackBox.position.y <= player.position.y + player.height
    && enemy.isAttacking
    ) {
    enemy.isAttacking = false
    console.log('enemy hit!') 
  }
}