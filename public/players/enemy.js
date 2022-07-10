import { Sprite } from '../sprite/sprite.js'

export const enemy = new Sprite({
  position: {
    x: 974,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'red',
  width: 50,
  height: 100,
  offset: {
    x: -50,
    y: 10
  }
})

export const enemyKeys = {
  ArrowUp: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  Control: {
    pressed: false
  }
}