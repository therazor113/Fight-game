import { canvas, c }  from '../canvas/canvas.js'

const gravity = 0.5

export class Sprite {
  constructor({ position, velocity, color }) {
    this.position = position
    this.velocity = velocity
    this.height = 100
    this.color = color
    this.attackBox = {
      position: this.position,
      width: 100,
      height: 50,
    }
  }

  draw() {
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, 50, this.height)

    //  attack box
    c.fillStyle = 'purple'
    c.fillRect(
      this.attackBox.position.x, 
      this.attackBox.position.y, 
      this.attackBox.width, 
      this.attackBox.height
      )
  }

  update() {
    this.draw()
    
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity
  }
}